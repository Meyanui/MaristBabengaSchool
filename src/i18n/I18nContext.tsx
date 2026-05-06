import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Language, TranslationKey } from "./translations";

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const getDefaultLanguage = (): Language => {
  if (typeof window !== "undefined") {
    const storedLanguage = window.localStorage.getItem("language");
    if (storedLanguage && storedLanguage in translations) {
      return storedLanguage as Language;
    }
    const browserLanguage = navigator.language.slice(0, 2) as Language;
    if (browserLanguage in translations) {
      return browserLanguage;
    }
  }
  return "en";
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getDefaultLanguage());

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", language);
    }
  }, [language]);

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};