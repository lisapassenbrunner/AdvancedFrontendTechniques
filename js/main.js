"use strict"; //verbietet definieren ohne let
import Core_App from "./core/core.app.js?v=0.1";
import LoginView from "./views/view.login.js?v=0.1"
import StartpageView from "./views/view.startpage.js?v=0.1";
import CityView from "./views/view.city.js?v=0.1";
import HotelView from "./views/view.hotel.js?=0.1";


//first route is startpage
let routes = [
    new StartpageView("/", "startpage"),
    new LoginView("/login", "login"),
    new CityView("/city", "city"),
    new HotelView("/hotel", "hotel")
];

const C_Holidays_App = new Core_App("http://localhost/C-Holidays/", "templates", routes, "de", "en");
