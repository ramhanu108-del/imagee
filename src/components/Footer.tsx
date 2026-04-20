import React from "react";
import { Language, TRANSLATIONS } from "../lib/i18n";

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang];
  
  return (
    <footer id="about" className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.ui.aboutTitle}</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.ui.aboutDesc}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.ui.quickLinks}</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">{t.navbar.home}</a></li>
              <li><a href="#tools" className="hover:text-blue-600 dark:hover:text-blue-400">{t.navbar.tools}</a></li>
              <li><a href="#privacy" className="hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-blue-600 dark:hover:text-blue-400">Terms of Use</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">{t.ui.contact}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {t.ui.contactDesc}
            </p>
            <a href="mailto:hello@smarttoolshub.com" className="text-blue-600 dark:text-blue-400 hover:underline">
              hello@smarttoolshub.com
            </a>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-gray-500 dark:text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {t.navbar.hubName}. {t.ui.rights}
        </div>
      </div>
    </footer>
  );
}
