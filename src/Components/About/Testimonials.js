import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../../styles/Testimonial.css'
export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/test1.png" alt="women test" />
          <div className="myCarousel">
            <h3>Dorothy Szczepanski</h3>
            <h4>Realtor</h4>
            <p>
            It has been a delight to work with TRCS and the staff.The people at TRCS have been SO great with communication - keeping me advised of the progress of my purchase and answering any question I had.
            </p>
          </div>
        </div>

        <div>
          <img src="/test2.png" alt= "test2 man" />
          <div className="myCarousel">
            <h3>Bob Curtin</h3>
            <h4>Realtor</h4>
            <p>
            Thanks so much for your help with this closing. I would have no hesitation in recommending your services to anyone looking for assistance. It has been a very painless and straightforward experience for me. 
            </p>
          </div>
        </div>

        <div>
          <img src="/test3.png" alt="test3 man" />
          <div className="myCarousel">
            <h3>Roger Axe</h3>
            <h4>Realtor</h4>
            <p>
            Organizing a Timeshare closing from Australia filled me with horror but TRS Inc handled it all with very little input from me and told me step by step what was happening.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}