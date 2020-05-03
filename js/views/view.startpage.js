"use strict";
import Core_View from "./../core/core.spa-view.js?v=0.1";

export default class StartpageView extends Core_View{
    constructor(slug, template){
        super(slug, template);
    }

    init(){
        //overriding
        super.init();
        //Here comes view specific javascript
        $("#logout").unbind("click").on("click", function(e){
            e.preventDefault();
            window.location.hash = "/login";
        });
        this.renderCities().then(function(){
            if(window.Core.system.debugmode)
                console.log("cities succesfully rendered");
        });
    }

    //kann dauern, deswegen async
    async renderCities(){
        let cities = await window.Core.model.getCities();
        for(let city of cities){
            $("#startpageContent").append(city.getListMarkup());
        }
    }
}