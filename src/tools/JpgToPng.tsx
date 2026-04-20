import { Download, Upload, Image as ImageIcon, History } from "lucide-react";
import React, { useRef, useState } from "react";

interface JpgToPngProps {
  sharedState?: { original: string | null, processed: string | null };
  updateSharedImage?: (img: string | null, isProcessed?: boolean) => void;
}

export default function JpgToPng({ sharedState, updateSharedImage }: JpgToPngProps) {
  const [image, setImage] = useState<string | null>(null);
  const [showHistory, setShowHistory] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleImageLoad = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImage(url);
    if (updateSharedImage) updateSharedImage(url, false);
  };

  const loadFromHistory = (url: string | null) => {
    if (url) {
      setImage(url);
      setShowHistory(false);
    }
  };

  const downloadImage = () => {
    if (!image || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = `converted.png`;
          link.href = url;
          link.click();
        }
      }, 'image/png');
    };
    img.src = image;
  };

  return (
    <div className="space-y-6">
      {!image ? (
        <div className="flex flex-col gap-4">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors text-center p-6">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-10 h-10 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500 font-semibold">
                Click to upload a JPG image
              </p>
              <p className="text-xs text-gray-400">JPG or JPEG only</p>
            </div>
            <input type="file" accept="image/jpeg, image/jpg" className="hidden" onChange={handleImageLoad} />
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
                      className="flex flex-col items-center gap-2 p-3 border border-blue-100 dark:border-blue-900/30 rounded-xl bg-blue-50/30 dark:bg-blue-900/5 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all text-left"
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
                      className="flex flex-col items-center gap-2 p-3 border border-green-100 dark:border-green-900/30 rounded-xl bg-green-50/30 dark:bg-green-900/5 hover:bg-green-50 dark:hover:bg-green-900/10 transition-all text-left"
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
          <p className="text-center font-medium text-green-600 dark:text-green-400">Ready to convert to PNG!</p>
          
          <div className="flex justify-center max-h-64 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <img src={image} alt="Preview" className="object-contain" />
          </div>

          <canvas ref={canvasRef} className="hidden" />
          
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => setImage(null)}
              className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 font-medium rounded-lg transition-colors"
            >
              Start Over
            </button>
            <button
              onClick={downloadImage}
              className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" /> Download PNG
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
