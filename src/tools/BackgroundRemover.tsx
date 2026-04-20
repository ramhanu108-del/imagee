import { Download, Upload, Image as ImageIcon, History } from "lucide-react";
import React, { useRef, useState } from "react";

interface BackgroundRemoverProps {
  sharedState?: { original: string | null, processed: string | null };
  updateSharedImage?: (img: string | null, isProcessed?: boolean) => void;
}

export default function BackgroundRemover({ sharedState, updateSharedImage }: BackgroundRemoverProps) {
  const [image, setImage] = useState<string | null>(null);
  const [tolerance, setTolerance] = useState(30);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [pickedColor, setPickedColor] = useState<{r: number, g: number, b: number} | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImage(url);
    if (updateSharedImage) updateSharedImage(url, false);
    setProcessedImage(null);
    setPickedColor(null);
    setShowHistory(false);
  };

  const loadFromHistory = (url: string | null) => {
    if (url) {
      setImage(url);
      setProcessedImage(null);
      setPickedColor(null);
      setShowHistory(false);
    }
  };

  const pickColor = (e: React.MouseEvent<HTMLImageElement>) => {
    if (processedImage || !imageRef.current) return;
    
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imageRef.current;
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    ctx.drawImage(img, 0, 0);

    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    const y = ((e.clientY - rect.top) / rect.height) * canvas.height;

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    setPickedColor({ r: pixel[0], g: pixel[1], b: pixel[2] });
  };

  const processImage = () => {
    if (!image || !canvasRef.current) return;
    setIsProcessing(true);
    
    setTimeout(() => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setIsProcessing(false);
        return;
      }

      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        const bgR = pickedColor ? pickedColor.r : data[0];
        const bgG = pickedColor ? pickedColor.g : data[1];
        const bgB = pickedColor ? pickedColor.b : data[2];

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const diff = Math.sqrt(
            Math.pow(r - bgR, 2) + Math.pow(g - bgG, 2) + Math.pow(b - bgB, 2)
          );

          if (diff < tolerance) {
            data[i + 3] = 0;
          }
        }

        ctx.putImageData(imageData, 0, 0);
        
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            setProcessedImage(url);
            if (updateSharedImage) updateSharedImage(url, true);
          }
          setIsProcessing(false);
        }, 'image/png');
      };
      img.src = image;
    }, 100);
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-4 text-sm space-y-2">
        <p><strong>Option 1:</strong> Automatic (uses the top-left pixel color).</p>
        <p><strong>Option 2:</strong> Manual (Click on the image below to pick exactly which color to remove).</p>
      </div>

      {!image ? (
        <div className="flex flex-col gap-4">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors text-center p-6">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500 font-semibold">
                Click to upload an image
              </p>
              <p className="text-xs text-gray-400">PNG, JPG or WebP</p>
            </div>
            <input type="file" accept="image/*" className="hidden" onChange={handleImageLoad} />
          </label>

          {(sharedState?.original || sharedState?.processed) && (
            <div className="space-y-3">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-medium"
              >
                <History className="w-5 h-5" />
                {showHistory ? "Hide Recent Images" : "Choose from Recent Images"}
              </button>

              {showHistory && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  {sharedState?.original && (
                    <button
                      onClick={() => loadFromHistory(sharedState.original)}
                      className="flex flex-col items-center gap-2 p-3 border border-blue-100 dark:border-blue-900/30 rounded-xl bg-blue-50/30 dark:bg-blue-900/5 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all"
                    >
                      <div className="w-full aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100">
                        <img src={sharedState.original} alt="Original" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                        <ImageIcon className="w-3 h-3" /> Original Upload
                      </span>
                    </button>
                  )}
                  {sharedState?.processed && (
                    <button
                      onClick={() => loadFromHistory(sharedState.processed)}
                      className="flex flex-col items-center gap-2 p-3 border border-green-100 dark:border-green-900/30 rounded-xl bg-green-50/30 dark:bg-green-900/5 hover:bg-green-50 dark:hover:bg-green-900/10 transition-all"
                    >
                      <div className="w-full aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100">
                        <img src={sharedState.processed} alt="Result" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-xs font-semibold text-green-600 dark:text-green-400 flex items-center gap-1">
                        <ImageIcon className="w-3 h-3" /> Latest Result
                      </span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex justify-between text-sm font-medium mb-4">
                <span>Tolerance</span>
                <span className="text-blue-600 dark:text-blue-400 font-bold">{tolerance}</span>
              </label>
              <input
                type="range"
                min="0"
                max="200"
                value={tolerance}
                onChange={(e) => setTolerance(parseInt(e.target.value))}
                className="w-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium">Selected Color:</div>
              <div 
                className="w-8 h-8 rounded border dark:border-gray-600 shadow-sm"
                style={{ backgroundColor: pickedColor ? `rgb(${pickedColor.r},${pickedColor.g},${pickedColor.b})` : 'transparent' }}
              >
                {!pickedColor && <div className="text-[10px] text-center pt-2 text-gray-400 italic">Auto</div>}
              </div>
              {pickedColor && (
                <button 
                  onClick={() => setPickedColor(null)}
                  className="text-xs text-red-500 hover:underline"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          <div className="relative checkerboard-bg rounded-lg overflow-hidden flex justify-center max-h-96 bg-gray-200 dark:bg-gray-800 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZmZmIi8+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjZWVlIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNlZWUiLz48L3N2Zz4=')]">
            <img 
              ref={imageRef}
              src={processedImage || image} 
              alt="Preview" 
              className={`object-contain ${!processedImage ? 'cursor-crosshair' : ''}`} 
              onClick={pickColor}
            />
          </div>

          <canvas ref={canvasRef} className="hidden" />
          
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => { setImage(null); setProcessedImage(null); }}
              className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 font-medium rounded-lg transition-colors"
            >
              Start Over
            </button>
            {!processedImage ? (
              <button
                onClick={processImage}
                disabled={isProcessing}
                className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
              >
                {isProcessing ? "Processing..." : "Remove Background"}
              </button>
            ) : (
              <a
                href={processedImage}
                download="no-bg.png"
                className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" /> Download
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
