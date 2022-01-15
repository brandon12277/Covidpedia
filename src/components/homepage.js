import React from "react";
import CovidCarousel from "./covid_carosouel";
import Navbar from "./navbar";
import "../css/home.css"
import Total from "./total_cases_denote";
import Footer from "./footer";

export default function Home(){
  return(
      <div class="home_page">
         <CovidCarousel/>
         <Total/>

         <div className="WHO_statement">
              <p class="state">"It is not yet clear whether Omicron is more transmissible (e.g., more easily spread from person to person) compared to other variants, including Delta. The number of people testing positive has risen in areas of South Africa affected by this variant, but epidemiologic studies are underway to understand if it is because of Omicron or other factors."</p>
              <p class="quote_by">-WHO,26th November 2021</p>
         </div>

         
      </div>
  )
}