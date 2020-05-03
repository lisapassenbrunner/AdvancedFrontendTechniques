"use strict"; //mit router ohne reload arbeiten, nimmt alles nach #, und wenn sich url ändert reagiert er
/*******************************************************
 *     Hash-based router for Single Page Applications.
 *     Handles Routes behind a '/#/' to your convenience.
 *     First Route will be handled as homeRoute.
 *     Second Route will be handled as 404Route;
 *
 *     Neuwersch - 2020-03-25
 *******************************************************/
export default class Core_SPA_Router{
    constructor(routes, route404 = undefined){
        if(window.Core.system.debugmode)
            //console.log(routes);
        this.routes = routes;
        this.route404 = route404;
        this.homeRoute = routes[0];
        this.init();
    }

    init(){
        window.removeEventListener('hashchange', this.hasChanged);
        window.addEventListener('hashchange', this.hasChanged.bind(this));
        //bind führt funktion aus, wenn this verwendet wird, dann ist es this in der klammer
        this.hasChanged();
    }

    //url auslesen, speichern, verändert?
    hasChanged(){
        if(window.location.hash.length > 2){
            for(const route of this.routes){
                if(route.isActive()){
                    route.renderMarkup();
                    return;
                }
            }
            if(this.route404){
                window.location.hash = this.route404.slug;
                // this.route404.renderMarkup();
            }

            else {
                if (window.Core.system.debugmode)
                    console.log("Did not find page " + window.location + ", but hey, taste some startpage!");
                window.location.hash = this.homeRoute.slug;
                // this.homeRoute.renderMarkup();
            }
        } else{
            window.location.hash = this.homeRoute.slug;
            this.homeRoute.renderMarkup();
        }
    }
}

