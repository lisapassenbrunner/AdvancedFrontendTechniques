"use strict";

export default class City{
    constructor(city) {
        Object.assign(this, city);
    }

    //returns markup for list view of cities
    getListMarkup(){
        let markup =  "<div class='cityCards'><a href='#/city?id="+this["_id"]+"' class='city' data-id='"+this.id+"'>";
        markup += "<h2 class='cityHeadline'>"+this.name+"</h2>";
        markup += "<p><b>Country: </b>"+this.country+"</p>";
        markup += "<p><b>Nickname: </b>"+this.nickname+"</p>";
        markup += "<img width='250' src='"+this.image+"' alt='"+this.name+"' />";
        markup += "</a></div>";
        return markup;
    }

    //returns markup for single item view
    getSingleMarkup(){
        let markup =  "<h2>"+this.name+"</h2><div class='cityCardsBig'><a href='#/city?id="+this["_id"]+"' class='city' data-id='"+this.id+"'>";
        markup += "<img class='cityImage' src='"+this.image+"' alt='"+this.name+"' />";
        markup += "<p><b>Country: </b>"+this.country+"</p>";
        markup += "<p><b>Nickname: </b>"+this.nickname+"</p>";
        markup += "</a></div>";
        return markup;
    }
}