import React from "react";
import XfinityModal from "./XfinityModal";
import Footer from "../Footer";

import mainImage from "../../../../images/media/xfinity.63b1c5a5.jpg";

import x0 from "../../../../images/media/x0.cc4f4ed6.jpg";
import x1 from "../../../../images/media/x1.d0c25ad3.jpg";
import x2 from "../../../../images/media/x2.c9bffd81.jpg";
import x3 from "../../../../images/media/x3.c3342d7b.jpg";
import x4 from "../../../../images/media/x4.48e6148d.jpg";
import x5 from "../../../../images/media/x5.27ece7d3.jpg";
import x6 from "../../../../images/media/x6.46d7d2ba.jpg";
import x7 from "../../../../images/media/x7.b00cecdc.jpg";

import racingConcept from "../../../../images/media/racingConcept.180836ca.jpg";


class Xfinity extends React.Component {

  state = {
    xfinityModal: false,
    selectedImage: null,
  
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }


  openModal = (e) => {
 
    const image = parseInt(e.target.getAttribute("data-type"));
    this.setState({ selectedImage: image })
    setTimeout(() => {
      this.setState({ xfinityModal: !this.state.xfinityModal })
    },100);
    // e.persist();
    // console.log(e.target.getAttribute("data-type"))
  }


  render(){

    // console.log("xfinitystate", this.state);


    return(
      <div>   
        <div className="xfinity">
          <div className="xfinity-imgContainer">
            <div>
              <img className="xfinity-imgContainer--img" src={mainImage} alt="2019 Supra Xfinity Series Race Car" />
            </div>
          
            <div className="xfinity-button">
              <button className="xfinity-button--main"></button>
              <div className="xfinity-button--text">Get Updates</div>
            </div>
        
          </div>
          <div className="xfinity-series">
            <div className="xfinity-blurp">OUR 200-MPH THUNDERSTORM.</div>
            <div className="xfinity-title">The 2019 Supra Xfinity Series Race Car</div>
            <p className="xfinity-body">The racetrack is where we live. It's where we prove our commitment to making ever-better cars. That's why we're proud to announce our latest creation for the racetrack: the 2019 Supra Xfinity Series Race Car. With its ability to produce over 700 horsepower, and unleash a roar that literally makes the earth quake, this purpose-built race car really gets our minds racing. Our teams at Calty Design and Toyota Racing Development worked hand-in-hand with NASCAR <sup>24</sup> to ensure the iconic race car shape was safe, powerful, and ready to take this car to speeds in excess of 200 mph. It's set to shake up racing when it makes its on-track debut at the NASCAR Xfinity Series on February 16, 2019.</p>
            <br/>
            <div className="xfinity-press">Check out the Supra Xfinity Series Race Car press release</div>
            <br/>
            <div className="xfinity-download">Download All Wallpapers (29MB)</div>
          </div>

          <div className="xfinity-gallery">
            <div className="xfinity-gallery--flex">
              <div className="xfinity-gallery--contain" onClick={this.openModal}>
                <img className="xfinity-gallery--img" src={"/"+x0} alt="2019 Supra Xfinity Sereis Race Car" data-type="0" />
                <div className="xfinity-gallery--contain-youtubePlayButton"></div>
                <i className="fab fa-youtube xfinity-gallery--contain-youtubeBG" aria-hidden="true" data-type="0"></i>
              </div>
            </div>
            <div className="xfinity-gallery--flex" onClick={this.openModal} >
              <div className="xfinity-gallery--contain">
                <img className="xfinity-gallery--img" src={"/"+ x1} alt="2019 Supra Xfinity Sereis Race Car" data-type="1" />
                <div className="xfinity-gallery--contain-youtubePlayButton"></div>
                <i className="fab fa-youtube xfinity-gallery--contain-youtubeBG" aria-hidden="true" data-type="1"></i>
              </div>
            </div>
            <div className="xfinity-gallery--flex">
              <div className="xfinity-gallery--contain">
                <img className="xfinity-gallery--img" src={"/"+x2} alt="2019 Supra Xfinity Sereis Race Car"  data-type="2" onClick={this.openModal}/>
              </div>
            </div>
            <div className="xfinity-gallery--flex">
              <div className="xfinity-gallery--contain">
                <img className="xfinity-gallery--img" src={"/"+x3} alt="2019 Supra Xfinity Sereis Race Car"  data-type="3" onClick={this.openModal}/>
              </div>
            </div>
            <div className="xfinity-gallery--flex">
              <div className="xfinity-gallery--contain">
                <img className="xfinity-gallery--img" src={"/"+x4} alt="2019 Supra Xfinity Sereis Race Car"  data-type="4" onClick={this.openModal}/>
              </div>
            </div>
            <div className="xfinity-gallery--flex">
              <div className="xfinity-gallery--contain">
                <img className="xfinity-gallery--img" src={"/"+x5} alt="2019 Supra Xfinity Sereis Race Car"  data-type="5" onClick={this.openModal}/>
              </div>
            </div>
            <div className="xfinity-gallery--flex">
              <div className="xfinity-gallery--contain">
                <img className="xfinity-gallery--img" src={"/"+x6} alt="2019 Supra Xfinity Sereis Race Car"  data-type="6" onClick={this.openModal}/>
              </div>
            </div>
            <div className="xfinity-gallery--flex">
              <div className="xfinity-gallery--contain">
                <img className="xfinity-gallery--img" src={"/"+x7} alt="2019 Supra Xfinity Sereis Race Car"  data-type="7" onClick={this.openModal}/>
              </div>
            </div>
          </div>

          <XfinityModal openModal={this.openModal} xfinityModal={this.state.xfinityModal} x0={x0} x1={x1} x2={x2} x3={x3} x4={x4} x5={x5} x6={x6} x7={x7} selectedImage={this.state.selectedImage}/>





          <form action="#" className="xfinity-form">
            <div className="xfinity-flex">
              <div className="xfinity-header">
              Sign Up for Supra Xfinity Series Race Car Updates
              </div>
            </div>

            <div className="xfinity-flex">
                <input type="text" className="xfinity-input" placeholder="Name" id="name" required />
                <label htmlFor="name" className="xfinity-label">Name</label>
            </div>

            <div className="xfinity-flex">
                <input type="email" className="xfinity-input" placeholder="Email Address" id="email" required />
                <label htmlFor="email" className="xfinity-label">Email address</label>
            </div>


            <div className="xfinity-form-button">
              <input type="submit" value="" className="xfinity-form-button--main"/>
              <div className="xfinity-form-button--text">Submit</div>
            </div>
          </form>
      

      
          <div className="xfinity-concept">
            <img className="xfinity-concept--img" src={racingConcept} alt="xfinity racing concept" />    
            <div className="xfinity-concept--text">
              GR Supra Racing Concept
            </div>
          </div>
    
          <Footer />

        </div>

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      </div>
    )
  }
  
};

export default Xfinity;

