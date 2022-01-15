import React from "react"
import "../css/navbar.css"
import logo from "../images/logo.png" 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

export default function Navbar(){

     return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
            <img src={logo} style={{height:"auto"},{width:"160px"}}></img>
        </a>
        <button type="button" class="navbar-toggle collapsed navbar-toggler" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 navbar-comp">
            <li className="nav-item active">
              <a className="nav-link" href="/" id="nav_button" >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About" id="nav_button">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="nav_button" href="/Contact">Contact</a>
            </li>
           
            <li className="nav-item ml-auto" >
              <button className="useApp"><a class=" nav-link ml-auto" id="link-to-app" href="/CountryWise"><span className="button" style={{color:"white",textDecoration:"none"}}>Use App</span></a></button>
            </li>
          </ul>
        </div>
      </nav>
     )
}