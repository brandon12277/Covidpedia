import {React,useState} from "react";
import "../css/country.css"
import logo from "../images/get.gif"
import logo2 from "../images/rotating-globe-slow.gif"
import Country from "./country_data";
import logo3 from "../images/covid_globe2.gif"


export default function CountryData(){

    function getCountryData(){
        try{
        var country=document.getElementById("country").value;
        var url="https://covid-19-data.p.rapidapi.com/country?name="+country;
        fetch(url, {
     "method": "GET",
     "headers": {
         "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
         "x-rapidapi-key": "89f8b579ccmsh1571070507e71a6p1498f7jsnd41787f13e0a"
     }
    })
    .then(response => response.json())
    .then(data=>{
        setData(data[0]);
        setCountry(country);
        console.log(data[0]);
    })
    .catch(err => {
     console.error(err);
    });
        }
        catch(err){
            console.log(err);
        }
    
     }
    var [data,setData]=useState("");
    var [country,setCountry]=useState("");
    if(!data){
    return(
        <div className="cont">
            <div className="search">
            <div className="search_engine">
            <form  className="search_engine" id="data" onSubmit={function(e){
                e.preventDefault();
                getCountryData();
            }}>
            <input type="text" class="form-control" placeholder="Search Country's Name" aria-label="Recipient's username" aria-describedby="basic-addon2" id="country" />
               <button  className="search_button btn"><i id="glass" class="fas fa-search-location"></i></button>
            </form>
           
            </div>
            </div>
            <div className="globe_div">
                  <img style={{width:"100%"}} src={logo3}></img>
                  
            </div>   
            <div className="WHO_statement">
           
              <p class="state">"Preliminary evidence suggests there may be an increased risk of reinfection with Omicron (ie, people who have previously had COVID-19 could become reinfected more easily with Omicron), as compared to other variants of concern, but information is limited. More information on this will become available in the coming days and weeks."</p>
              <p class="quote_by">Effectiveness of prior SARS-CoV-2 infection </p>
              
         </div>

        </div>
    )
            }
            else
            {
                return(
                    <div className="cont">
                    <div className="search">
                    <div className="search_engine">
                    <form  className="search_engine" id="data" onSubmit={function(e){
                e.preventDefault();
                getCountryData();
            }}>
                    <input type="text" class="form-control" placeholder="Search Country's Name" aria-label="Recipient's username" aria-describedby="basic-addon2" id="country" />
                       <button className="search_button btn"><i id="glass" class="fas fa-search-location"></i></button>
                       </form>
                    </div>
                    </div>
                    <div className="country">
                    <Country
                           data={data}
                           country={country}
                         />
                    </div>
                         
                    <div className="WHO_statement">
                   
                      <p class="state">"Preliminary evidence suggests there may be an increased risk of reinfection with Omicron (ie, people who have previously had COVID-19 could become reinfected more easily with Omicron), as compared to other variants of concern, but information is limited. More information on this will become available in the coming days and weeks."</p>
                      <p class="quote_by">Effectiveness of prior SARS-CoV-2 infection </p>
                      
                 </div>
        
                </div>
                )
            }
}