import { PDFDocument } from "pdf-lib";
import React, { useState } from "react";
import { Download, FileText, Upload } from "lucide-react";

export default function PdfSplitter() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [isSplitting, setIsSplitting] = useState(false);
  const [rangeStr, setRangeStr] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type === "application/pdf") {
      setFile(selected);
      try {
        const fileBuffer = await selected.arrayBuffer();
        const pdfDoc = await PDFDocument.load(fileBuffer);
        setPageCount(pdfDoc.getPageCount());
        setRangeStr(`1-${pdfDoc.getPageCount()}`);
      } catch (error) {
        console.error(error);
        alert("Failed to read PDF. It might be encrypted.");
        setFile(null);
      }
    }
  };

  const splitPdf = async () => {
    if (!file || pageCount === 0) return;
    setIsSplitting(true);
    
    try {
      // Parse range
      const ranges = rangeStr.split(",").map(r => r.trim());
      const pagesToKeep = new Set<number>();
      
      for (const r of ranges) {
        if (r.includes("-")) {
          const [start, end] = r.split("-").map(n => parseInt(n, 10));
          if (!isNaN(start) && !isNaN(end) && start > 0 && end <= pageCount && start <= end) {
            for (let i = start; i <= end; i++) {
              pagesToKeep.add(i - 1); // 0-indexed
            }
          }
        } else {
          const page = parseInt(r, 10);
          if (!isNaN(page) && page > 0 && page <= pageCount) {
            pagesToKeep.add(page - 1);
          }
        }
      }

      const indices = Array.from(pagesToKeep).sort((a, b) => a - b);
      if (indices.length === 0) {
        alert("Invalid page range.");
        setIsSplitting(false);
        return;
      }

      const fileBuffer = await file.arrayBuffer();
      const pdfToSplit = await PDFDocument.load(fileBuffer);
      const newPdf = await PDFDocument.create();
      
      const copiedPages = await newPdf.copyPages(pdfToSplit, indices);
      copiedPages.forEach((page) => newPdf.addPage(page));

      const newPdfBytes = await newPdf.save();
      const blob = new Blob([newPdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `split_${file.name}`;
      link.click();
    } catch (error) {
      console.error(error);
      alert("Failed to split PDF.");
    } finally {
      setIsSplitting(false);
    }
  };

  return (
    <div className="space-y-6">
      {!file ? (
        <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-10 h-10 mb-3 text-gray-400" />
            <p className="text-sm text-gray-500 font-medium">Upload PDF to split</p>
          </div>
          <input type="file" accept="application/pdf" className="hidden" onChange={handleFileChange} />
        </label>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <FileText className="w-8 h-8 text-red-500" />
            <div>
              <p className="font-medium truncate max-w-sm">{file.name}</p>
              <p className="text-xs text-gray-500">{pageCount} pages total</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Pages to Extract
            </label>
            <input
              type="text"
              value={rangeStr}
              onChange={(e) => setRangeStr(e.target.value)}
              placeholder="e.g., 1-5, 8, 11-13"
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-2">Example: 1-5, 8, 11-13</p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => { setFile(null); setPageCount(0); setRangeStr(""); }}
              className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 font-medium rounded-lg transition-colors"
            >
              Start Over
            </button>
            <button
              onClick={splitPdf}
              disabled={isSplitting || !rangeStr}
              className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSplitting ? "Processing..." : "Extract Pages"} <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
