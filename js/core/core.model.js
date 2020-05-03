"use strict";
import City from "../classes/class.city.js";
import Hotel from "../classes/class.hotel.js";
const cities_json = "./cities.json";
const hotels_json = "./hotels.json";

export default class Core_Model {
    constructor() {

    }

    getCities() {
        return new Promise(resolve => {
            $.getJSON(cities_json, function (data) {
                let cities = [];
                for(let city of data) {
                    cities.push(new City(city));
                }
                resolve(cities);
            });
        });
    }

    getCityBy(key, value) {
        return new Promise(resolve => {
            $.getJSON(cities_json, function (data) {
                let cities = [];
                for (let city of data) {
                    if (city[key] == value)
                        resolve(new City(city));
                }
            });
        });
    }

    async getCity(id) {
        return(await this.getCityBy("_id", id));
    }

    getHotels() {
        return new Promise(resolve => {
            $.getJSON(hotels_json, function (data) {
                let hotels = [];
                for(let hotel of data) {
                    hotels.push(new Hotel(hotel));
                }
                resolve(hotels);
            });
        });
    }

    getHotelBy(key, value) {
        return new Promise(resolve => {
            $.getJSON(hotels_json, function (data) {
                let hotels = [];
                for (let hotel of data) {
                    if (hotel[key] == value)
                        resolve(new Hotel(hotel));
                }
            });
        });
    }

    getHotelOfCity() {

    }

    async getHotel(id) {
        return(await this.getHotelBy("_id", id));
    }
}