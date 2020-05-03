"use strict";

let Core_Language = {};
export default class Core_Translator {
    constructor(...languages) {
        this.allowedLanguages = languages;

        //clickhandler for the language Menu
        $(document).on("click", "#languages", function () {
            let selectedLanguageValue = $(this).val();
            window.Core.utils.setCookie("language", selectedLanguageValue, 365);
        });
        this.currentLanguage = window.Core.utils.getCookie("language") || window.Core.system.defaultLanguage;
        window.dispatchEvent(new HashChangeEvent("hashchange"));
    }

    t(key, language = this.currentLanguage) {
        //TODO: Using disallowed Language? Bonuspunkte für Abgabe
        return (typeof Core_Language[language][key] === "undefined" ? "-- missing translation: " + key + " --"
            : Core_Language[language][key]);
    }
}
Core_Language.en = {
    logout: "logout",
    login: "login",
    username: "username",
    password: "password",
    welcome: "Welcome at C-Holidays!",
    chooseLanguage: "Choose a language: ",
    impressum: "impressum | privacy policy | ©C-Holidays",
    logoutheading: "logout:",
    loginheading: "login"

    //CITIES

};
Core_Language.de = {
    logout: "Abmelden",
    login: "Anmelden",
    username: "Benutzername",
    password: "Passwort",
    welcome: "Willkommen bei C-Holidays!",
    chooseLanguage: "Wählen Sie eine Sprache: ",
    impressum: "Impressum | Datenschutz | ©C-Holidays",
    logoutheading: "Anmelden:",
    loginheading: "Abmelden"

    //CITIES

};
Core_Language.fr = {
    logout: "Se déconnecter"
};