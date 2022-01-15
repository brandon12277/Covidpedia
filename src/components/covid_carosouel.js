import React from "react";
import covid2 from "../images/covid2.jpg"
import covid1 from "../images/covi.jpg"
import covid3 from "../images/covid3.jpg"

export default function CovidCarousel(){
    return(
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" id="indicators"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" id="indicators"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" id="indicators"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img id="img"  src={covid1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img id="img" src={covid2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img id="img" class="d-block w-100" src={covid3} alt="Third slide"/>
    </div>
  </div>
  <a  class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon"  aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
}