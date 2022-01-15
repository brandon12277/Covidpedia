import React,{Component,useState,componentWillMount, Suspense} from "react"
import "../css/total_cases.css"
import globe from "../images/rotating-globe-slow.gif"

export default class Total extends Component{
   
    constructor(){
        super()
        this.state={total:{}}
    }

   componentWillMount(){
    fetch("https://covid-19-data.p.rapidapi.com/report/totals?date=2020-07-21",{
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "89f8b579ccmsh1571070507e71a6p1498f7jsnd41787f13e0a"
        }
    })
    .then(response => response.json())
    .then((result)=>{
        this.setState({total:result[0]})
    })
    .catch(err => {
        console.error(err);
    });
   }

  render(){
      if(this.state.total)
      {    var denom=this.state.total.confirmed+1000000;
          var value1=((this.state.total.confirmed)/denom)*100;
          console.log(value1);
          var value2=((this.state.total.critical)/denom)*100;
          console.log(value2);
          var value3=((this.state.total.recovered)/denom)*100;
          var value4=((this.state.total.deaths)/denom)*100;
      return(
       <div className="total_card">
           <h4 style={{marginLeft:"5%",textDecoration:"underline"}}>TOTAL COVID-19 CASES ANALYSIS FOR TODAY</h4>
           <div className="data-card">
           <div className="data">
               <div className="conf">
                  <h5>Confirmed </h5>
                  <div class="progress">
                      <div style={{ width: value1+"%"}}class="value"></div>
                  </div>
                  {this.state.total.confirmed}
               </div>
               <div className="conf">
                  <h5>Critical </h5>
                  <div class="progress">
                      <div style={{ width: value2+"%"}} class="value"></div>
                  </div>
                  {this.state.total.critical}
               </div>
               <div className="conf">
                  <h5>Recovered </h5>
                  <div class="progress">
                      <div style={{ width: value3+"%"}} class="value"></div>
                  </div>
                  {this.state.total.recovered}
               </div>
               <div className="conf">
                  <h5>Deaths </h5>
                  <div class="progress">
                      <div style={{ width: value4+"%"}} class="value"></div>
                  </div>
                  {this.state.total.deaths}
               </div>
                 
           </div>
           <img style={{width:"200px",height:"auto"}} src={globe}/>
           </div>
         
      </div>
      );
      }
      else{
        return(
            <div>
           </div>
           );
      }
  }
   
      

}