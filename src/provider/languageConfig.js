import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import en from "../locales/en.json";
import ar from "../locales/ar.json"

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      // english
      en: {
        translation: en,
      },

      // arab
      ar: {
        translation: ar,
      },

      
      // Add more languages as needed
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
