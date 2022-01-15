import React,{Component,useState,componentWillMount, Suspense} from "react"
import "../css/total_cases.css"
import globe from "../images/rotating-globe-slow.gif"

export default function Country(props){
       var denom=props.data.confirmed*1.1;
       var value1=((props.data.confirmed)/denom)*100;
          console.log(value1);
          var value2=((props.data.critical)/denom)*100;
          console.log(value2);
          var value3=((props.data.recovered)/denom)*100;
          var value4=((props.data.deaths)/denom)*100;
   
  return(
       
      
       <div className="total_card">
           <h2 style={{marginLeft:"5%",textTransform:"uppercase",borderBottom:"2px black solid",width:"90%"}}>{props.country}</h2>
           <h5 style={{marginLeft:"5%"}}>Code : {props.data.code}</h5>
           <h5 style={{marginLeft:"5%"}}>Latitude: {props.data.latitude}</h5>
           <h5 style={{marginLeft:"5%"}}>Longitude: {props.data.longitude}</h5>
           <div className="data-card">
           <div className="data">
               <div className="conf">
                  <h5>Confirmed </h5>
                  <div class="progress">
                      <div style={{ width: value1+"%"}}class="value"></div>
                  </div>
                  {props.data.confirmed}
               </div>
               <div className="conf">
                  <h5>Critical </h5>
                  <div class="progress">
                      <div style={{ width: value2+"%"}} class="value"></div>
                  </div>
                  {props.data.critical}
               </div>
               <div className="conf">
                  <h5>Recovered </h5>
                  <div class="progress">
                      <div style={{ width: value3+"%"}} class="value"></div>
                  </div>
                  {props.data.recovered}
               </div>
               <div className="conf">
                  <h5>Deaths </h5>
                  <div class="progress">
                      <div style={{ width: value4+"%"}} class="value"></div>
                  </div>
                  {props.data.deaths}
               </div>
               <h5>Last Date Following Data Was Updated : {props.data.lastChange}</h5>
           </div>
           <img style={{width:"200px",height:"auto"}} src={globe}/>
           </div>
         
      </div>
  )
   
      

}