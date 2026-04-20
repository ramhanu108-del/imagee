import { X, ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ToolSEOContent } from "../lib/seoContent";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  relatedTools?: any[];
  onSelectTool?: (tool: any) => void;
  t?: any;
  seo?: ToolSEOContent;
}

export function Modal({ isOpen, onClose, title, children, relatedTools = [], onSelectTool, t, seo }: ModalProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Fallback SEO content if specific data is missing
  const effectiveSeo = seo || {
    h1: `${title} Online Free - Smart Productivity Tool`,
    introduction: `Simplify your workflow with our **${title}**. This high-performance online tool is designed to be fast, secure, and intuitive, allowing you to get the job done directly in your browser without any software installation.`,
    howToUse: [
      "Open the tool from the collection hub.",
      "Input your text, data, or upload your file.",
      "Click the process button to get instant results.",
      "Download, copy, or share your output as needed."
    ],
    features: [
      "Real-time processing and feedback",
      "No limit on daily usage",
      "100% browser-based security",
      "Compatible with all modern devices",
      "Clean, distraction-free interface"
    ],
    benefits: [
      "Boost your daily productivity",
      "Keep your sensitive data private and local",
      "Zero costs - always free to use",
      "No registration or accounts needed",
      "Get professional results in seconds"
    ],
    faqs: [
      {
        question: `How do I use the ${title}?`,
        answer: `Our ${title} is designed for simplicity. Just enter your data or upload your file, and the tool will handle the rest instantly.`
      },
      {
        question: `Is the ${title} safe to use?`,
        answer: "Absolutely. All processing occurs locally on your machine. We never see or store your private data."
      }
    ]
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[95vh]"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sticky top-0 z-10">
              <h1 className="text-xl font-semibold truncate pr-4">{effectiveSeo.h1}</h1>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <div className="mb-8">
                {children}
              </div>

              {/* SEO Content Section */}
              <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700 space-y-10">
                <section aria-labelledby="tool-intro">
                  <h2 id="tool-intro" className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What is {title}?</h2>
                  <div className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-4 prose dark:prose-invert max-w-none" 
                       dangerouslySetInnerHTML={{ __html: effectiveSeo.introduction.replace(/\*\*(.*?)\*\*/g, '<strong class="text-blue-600 dark:text-blue-400">$1</strong>') }} />
                </section>

                {effectiveSeo.howToUse.length > 0 && (
                  <section aria-labelledby="tool-howto">
                    <h2 id="tool-howto" className="text-xl font-bold mb-4 text-gray-900 dark:text-white">How to Use the {title} Tool</h2>
                    <ol className="list-decimal pl-5 space-y-3 text-gray-600 dark:text-gray-400">
                      {effectiveSeo.howToUse.map((step, idx) => (
                        <li key={idx} className="pl-2">{step}</li>
                      ))}
                    </ol>
                  </section>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {effectiveSeo.features.length > 0 && (
                    <section aria-labelledby="tool-features">
                      <h2 id="tool-features" className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Key Features</h2>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                        {effectiveSeo.features.map((feature, idx) => (
                          <li key={idx} className="pl-2">{feature}</li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {effectiveSeo.benefits.length > 0 && (
                    <section aria-labelledby="tool-benefits">
                      <h2 id="tool-benefits" className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Benefits for Users</h2>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                        {effectiveSeo.benefits.map((benefit, idx) => (
                          <li key={idx} className="pl-2">{benefit}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>

                {effectiveSeo.faqs.length > 0 && (
                  <section aria-labelledby="tool-faq">
                    <h2 id="tool-faq" className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                      {effectiveSeo.faqs.map((faq, idx) => (
                        <div key={idx} className="border border-gray-100 dark:border-gray-700 rounded-xl overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                          >
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{faq.question}</span>
                            {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                          <AnimatePresence>
                            {openFaq === idx && (
                              <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: "auto" }}
                                exit={{ height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="p-4 pt-0 text-gray-600 dark:text-gray-400 border-t border-gray-100 dark:border-gray-700">
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Related Tools Section */}
              {relatedTools.length > 0 && t && (
                <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
                    {t.lang === 'hi' ? 'संबंधित टूल्स' : 'Related Tools'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedTools.map(tool => {
                      const Icon = tool.icon;
                      const toolName = t.tools[tool.nameKey as keyof typeof t.tools];
                      return (
                        <button
                          key={tool.id}
                          onClick={() => onSelectTool?.(tool)}
                          className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all text-left group"
                        >
                          <div className="p-2 bg-gray-50 dark:bg-gray-900 rounded-lg text-gray-400 group-hover:text-blue-500 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="font-bold text-sm">{toolName}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
