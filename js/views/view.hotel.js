"use strict";
import Core_View from "./../core/core.spa-view.js?v=0.1";

export default class HotelView extends Core_View{
    constructor(slug, template){
        super(slug, template);
        this.hotel = undefined;
    }

    init(){
        super.init();
        //Here comes view specific javascript
        if(window.Core.utils.isEmpty(window.Core.getParams["id"]) || window.Core.model.getHotel(window.Core.getParams["id"]) == false)
            window.location.hash = "/";
        else{
            let self = this;
            window.Core.model.getHotel(window.Core.getParams["id"]).then(function(response){
                self.hotel = response;
                self.renderHotelDetail(self.hotel);
            });
        }
    }

    async renderHotelDetail(){
        $("#hotel_description").html(this.hotel.getSingleMarkup());
    }
}