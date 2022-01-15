import React from "react"
import "../css/about.css"
import "../css/home.css"
import logo from "../images/get.gif"
export default function About(){
    return(
        <div className="body">
           <div className="data-div">
                  <img className="globe" src={logo}></img>
                  <p className="state">Covidpedia is a web based application which provides detailed information regarding the condition of a country with respect to their covid 19 cases.This includes the number of confirmed cases critical cases as well as the number of people recovered.The api used for this application is updated regugarly giving you proper and updated information at all times</p>
            </div>
            <div className="WHO_statement">
              <p class="state">"I think the critical thing to remember here in relation to the SARS episode in 2002-2003, with what we've recently been witnessing with the Chinese government and several cities involved in the outbreak in China, is that many years have passed, we've had many advancements in surveillance and manay global advancements in information sharing have been made since then."</p>
              <p class="quote_by">- Dr Stephen L. Roberts</p>
         </div>
        </div>

    )
}