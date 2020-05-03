"use strict";
/***************************************************
 *  A Collectorclass for several useful functions.
 *  Contains functions that are general and usable
 *  in different apps.
 *
 *  Neuwersch, 2020-03-15
 ***************************************************/
// let languageMenu = document.getElementById("languages");
// languageMenu.addEventListener("change", function(){
//     console.log(languageMenu.value);
// });
export default class Core_Utils {

    setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            //ein Jahr hinzufügen
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    getCookie(name) {
        let nameEQ = name + "=";
        //document.Cookie aufspalten
        let ca = document.cookie.split(';');
        for(let i=0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0)==' '){
                c = c.substring(1,c.length);
            }
            //Cookie wurde gefunden
            if (c.indexOf(nameEQ) == 0) {
                return c.substring(nameEQ.length,c.length);
            }
        }
        return null;
    }

    deleteCookie(name) {
        document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    isEmpty(variable){
        if(Array.isArray(variable))
            return(variable.length == 0)
        else if(typeof variable === "object")
            return(Object.entries(variable).length === 0 && variable.constructor === Object);
        else
            return(typeof variable === "undefined" || variable == null || variable == "");
    }
}