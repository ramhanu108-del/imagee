import { PDFDocument } from "pdf-lib";
import React, { useState } from "react";
import { Download, FileText, Upload, X } from "lucide-react";

export default function PdfMerger() {
  const [files, setFiles] = useState<File[]>([]);
  const [isMerging, setIsMerging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = (Array.from(e.target.files) as File[]).filter((f) => f.type === "application/pdf");
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const mergePdfs = async () => {
    if (files.length < 2) return;
    setIsMerging(true);
    
    try {
      const mergedPdf = await PDFDocument.create();

      for (const file of files) {
        const fileBuffer = await file.arrayBuffer();
        const pdf = await PDFDocument.load(fileBuffer);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const mergedPdfFile = await mergedPdf.save();
      
      const blob = new Blob([mergedPdfFile], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "merged.pdf";
      link.click();
    } catch (error) {
      console.error("Error merging PDFs:", error);
      alert("Failed to merge PDFs. Ensure they are not encrypted/password protected.");
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <div className="space-y-6">
      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transition-colors">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <Upload className="w-8 h-8 mb-2 text-gray-400" />
          <p className="text-sm text-gray-500 font-medium">Click to upload PDFs</p>
        </div>
        <input type="file" accept="application/pdf" multiple className="hidden" onChange={handleFileChange} />
      </label>

      {files.length > 0 && (
        <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 overflow-hidden">
                <FileText className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm font-medium truncate shrink">{file.name}</span>
              </div>
              <button onClick={() => removeFile(index)} className="p-1 hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-400 hover:text-red-500 rounded transition-colors flex-shrink-0">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {files.length > 0 && (
        <div className="flex gap-3 pt-4 border-t dark:border-gray-700">
          <button
            onClick={() => setFiles([])}
            className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 font-medium rounded-lg transition-colors"
          >
            Clear All
          </button>
          <button
            onClick={mergePdfs}
            disabled={files.length < 2 || isMerging}
            className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isMerging ? "Merging..." : "Merge PDFs"} <Download className="w-4 h-4" />
          </button>
        </div>
      )}
      
      {files.length === 1 && (
        <p className="text-xs text-center text-amber-600 dark:text-amber-400">Please add at least one more PDF to merge.</p>
      )}
    </div>
  );
}
