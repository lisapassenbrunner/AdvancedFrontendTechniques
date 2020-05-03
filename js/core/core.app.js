"use strict";
import Core_SPA_Router from "./core.spa-router.js?v=0.1";
import Core_Translator from "./core.translator.js?v=0.1";
import Core_View from "./core.spa-view.js?v=0.1";
import Core_Utils from "./core.utils.js?v=0.1";
import Core_Model from "./core.model.js?v=0.1";
/**********************************************************************
 *     Class-Bundle for Web-Apps.
 *     App-Shell needs an ID "#core_app".
 *
 *     @param:
 *     webRoot - Give me the root-URL of your App
 *     templatesPath - Give me the Path to your templates
 *       relative to your webRoot.
 *     routes - Give me an Object with "slug" : "template" Routes
 *     ...languages - Give me all languages you want your App to support.
 *
 *     Neuwersch - 2020-03-25
 **********************************************************************/

export default class Core_App{
    constructor(webRoot, templatesPath, routes, ...languages){
        window.Core = this; //auf window draufhängen
        this.system = {
            webRoot : webRoot, //root url of the App
            templatesPath : templatesPath, //Path to folder container of our templates
            debugmode : true, //man möchte debug ausgaben haben
            defaultLanguage : 'de'
        };
        this.utils = new Core_Utils();
        this.translator = languages.length ? new Core_Translator(languages) : new Core_Translator(this.system.defaultLanguage);
        this.getParams = {};
        this.model = new Core_Model();
        this.initPagemarkup();
        this.router = new Core_SPA_Router(routes);
    }

    t(key){
        return(this.translator.t(key));
    }

    //einzelne Templates werden erzeugt
    initPagemarkup(){
        this.initHeader();
        this.initFooter();
    }

    initHeader(){
        let header = document.getElementById("header");
        Core_View.useTemplate(this.system.webRoot + this.system.templatesPath + "/header.tpl", header,"/header");
    }

    initFooter(){
        let header = document.getElementById("footer");
        Core_View.useTemplate(this.system.webRoot + this.system.templatesPath + "/footer.tpl", footer,"/footer");
    }
}
