"use strict";

import Core_App from "./core.app.js";

/*******************************************************
 *     Hash-based Routes for Single Page Applications.
 *     Routes can are treated like Views. Each Route is
 *     therefore bound to one single (unique) View.
 *
 *     Neuwersch - 2020-03-25
 *******************************************************/
const app = document.getElementById("core_app");
export default class Core_View{
    constructor(slug, template){
        this.slug = slug;
        this.template = template;
        //einfach mal hinnehmen :)
        window.addEventListener("templateChanged", this.listen.bind(this));
    }

    //erstmal einfach so hinnehmen :)
    listen(e){
        if(e.detail.slug == this.slug) //muss ich nicht verstehen
            this.init();
    }

    init(){
        if(window.Core.debugmode){
            console.log("View loaded: "+this.slug);
        }
    }

    isActive(){
        //Ist ein Get-Parameter vorhanden?
        if(window.Core.utils.isEmpty(Core_View.getGetParameters())) // Kein Fragezeichen, keine Get-Parameter!
            return (window.location.hash.substr(1).replace('#','') === this.slug);
        else{
            let index = window.location.hash.substr(1).indexOf("?");
            return (window.location.hash.substr(1,index).replace('#','') === this.slug);
        }
    };


    renderMarkup(){
        Core_View.useTemplate(window.Core.system.webRoot+window.Core.system.templatesPath + "/" + this.template + ".tpl",
            app,
            this.slug);
    }

    //übersetzt auf die Standardsprache und erzeugt die Template Ausgaben
    static useTemplate(templatePath, container, slug){
        $.get(templatePath, function(tpl) {
            let marker = /<%>/gi, //maskierung suchen
                result,
                indices = [];

            //Step 1
            //Searching for all occurences of marker in String tpl
            //push all indices into array indices
            while((result = marker.exec(tpl))){
                //marker ist das Zeichen, Methode exec sucht im tpl nach dem Zeichen und gibt index zurück
                indices.push(result.index);
            }

            //Step 2
            for(let i = 0; i < indices.length; i+=2){
                //das ist jetzt der substring mit dem zu übersetzenden Parameter
                // vom ersten ÖffnungsTag+3 (wegen <%>) bis zum ersten Schließtag
                let translationParameter = tpl.substring((indices[i]+3), (indices[i+1]));
                //das Wort ist jetzt übersetzt
                let translatedWord = window.Core.t(translationParameter);
                let translationParameterWithMarker = tpl.substring(indices[i], (indices[i+1]+3));
                if(translationParameterWithMarker.length > translatedWord.length) {
                    let difference = translationParameterWithMarker.length - translatedWord.length;
                    for(let j = 0; j < indices.length; j++) {
                        indices[j] -= difference;
                    }
                }
                else if(translationParameterWithMarker.length < translatedWord.length) {
                    let difference = translatedWord.length - translationParameterWithMarker.length;
                    for(let j = 0; j < indices.length; j++) {
                        indices[j] += difference;
                    }
                }

                tpl = tpl.replace(translationParameterWithMarker, translatedWord);
            }
            container.innerHTML = tpl;
            window.Core.getParams = Core_View.getGetParameters();
            window.dispatchEvent(new CustomEvent("templateChanged", {detail: {slug: slug}}));
        });
    }

    static getGetParameters(){
        let index = window.location.hash.substr(1).indexOf("?");
        if(index != -1){
            let parameters = window.location.hash.substr(index+2);
            let result = parameters.split("&").reduce(function(result, item){
                let parts = item.split("=");
                result[parts[0]] = parts[1];
                return result;
            }, {});
            return(result);
        }else
            return {};
    }
}