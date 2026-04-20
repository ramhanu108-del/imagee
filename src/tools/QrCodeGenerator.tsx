import React, { useState, useEffect, useRef } from "react";
import QRCode from "qrcode";
import { Download, QrCode as QrIcon } from "lucide-react";

interface QrCodeGeneratorProps {
  updateSharedImage?: (img: string | null, isProcessed?: boolean) => void;
}

export default function QrCodeGenerator({ updateSharedImage }: QrCodeGeneratorProps) {
  const [text, setText] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (text) {
      QRCode.toDataURL(text, {
        width: 600, // Higher resolution for better reuse
        margin: 2,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      })
      .then(url => {
        setQrUrl(url);
        if (updateSharedImage) updateSharedImage(url, true);
      })
      .catch(err => console.error(err));
    } else {
      setQrUrl("");
    }
  }, [text, updateSharedImage]);

  const downloadQr = () => {
    if (!qrUrl) return;
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Enter URL or Text</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://example.com"
          className="w-full px-4 py-3 border rounded-xl dark:bg-gray-800 dark:border-gray-700 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900/50 rounded-2xl min-h-[300px] border dark:border-gray-800">
        {qrUrl ? (
          <img src={qrUrl} alt="QR Code" className="w-64 h-64 rounded-xl shadow-lg bg-white p-2" />
        ) : (
          <div className="flex flex-col items-center text-gray-400">
            <QrIcon className="w-16 h-16 mb-4 opacity-20" />
            <p className="text-sm">Start typing to generate QR code</p>
          </div>
        )}
      </div>

      {qrUrl && (
        <button
          onClick={downloadQr}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" /> Download QR Code
        </button>
      )}
    </div>
  );
}
