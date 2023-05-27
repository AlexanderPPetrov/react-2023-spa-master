import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import bg from './locales/bg'
const resources = {
  en,
  bg,
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'bg',
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
})

export default i18n
