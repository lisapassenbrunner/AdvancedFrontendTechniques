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
"use strict";

export default class Hotel{
    constructor(hotel) {
        Object.assign(this, hotel);
    }

    //returns markup for list view of cities
    getListMarkup(){
        let markup =  "<div class='hotelCards'><a href='#/hotel?id="+this["_id"]+"' class='hotel' data-id='"+this.id+"'>";
        markup += "<p><b>"+this.name+"</b></p>";
        markup += "<p><b>City: </b>"+this.city+"</p>";
        markup += "<p><b>Address: </b>"+this.address+"</p>";
        markup += "<img width='250' src='"+this.images[0]+"' alt='"+this.name+"' />";
        markup += "</a></div>";
        return markup;
    }

    //returns markup for single item view
    getSingleMarkup(){
        let markup =  "<h2>"+this.name+"</h2><div class='hotelCardsBig'>";
        markup += "<img class='hotelImage' src='"+this.images[0]+"' width='250'  alt='"+this.name+"' />";
        markup += "<p class='hotelDescription'>"+this.description+"</p>";
        markup += "<div class='hotelDetails'><div class='hotelInfos'><p><b>City: </b>"+this.city+"</p>";
        markup += "<p><b>Country: </b>"+this.country+"</p>";
        markup += "<p><b>Address: </b>"+this.address+"</p>";
        markup += "<p><b>E-Mail: </b>"+this.email+"</p>";
        markup += "<p><b>Phone: </b>"+this.phone+"</p>";
        markup += "<p><b>Website: </b>"+this.website+"</p>";
        markup += "<p><b>Price: </b>"+this.price+"€</p>";
        markup += "<p><b>Stars: </b>"+this.stars+"</p></div>";

        markup += "<div class='hotelAmenities'>";
        markup += this.renderAmenities("Wifi", this.amenities.wifi);
        markup += this.renderAmenities("Pool", this.amenities.pool);
        markup += this.renderAmenities("Spa", this.amenities.spa);
        markup += this.renderAmenities("Parking", this.amenities.parking);
        markup += this.renderAmenities("AC", this.amenities.ac);
        markup += this.renderAmenities("Restaurant", this.amenities.restaturant);
        markup += this.renderAmenities("Bar", this.amenities.bar);
        markup += this.renderAmenities("Gym", this.amenities.gym)+"</div></div><div class='hotelImages'>";

        for(let i = 1; i < this.images.length; i++){
            markup += "<img class='singleHotelImage' src='"+this.images[i]+"' width='250'  alt='"+this.name+"' />";
        }
        markup += "</div></div>";
        return markup;
    }

    renderAmenities(word, currentAmenity){
        if(currentAmenity == false)
            return "<p><b>"+word+" </b>: Nein</p>";
        else
            return "<p><b>"+word+" </b>: Ja</p>";
    }
}