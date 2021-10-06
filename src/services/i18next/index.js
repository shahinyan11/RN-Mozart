import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from './en'
import ge from './ge'
import { getInitLang } from "../helpers";

const language = getInitLang()

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        ge: {
            translation: ge
        }
    },
    lng: language,
    fallbackLng: language,

    interpolation: {
        escapeValue: false
    }
});

export default i18n
