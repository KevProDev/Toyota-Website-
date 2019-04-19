import React from "react";
import { NavLink,Link } from "react-router-dom";

import WHTChild from "./WHTChild";

import img1 from "../../../images/media/img1.1483bc09.jpg";
import img2 from "../../../images/media/img2.98845bd7.jpg";
import img3 from "../../../images/media/img3.926d2c32.jpg";
import img4 from "../../../images/media/img4.5991f637.jpg";
import img5 from "../../../images/media/img5-long.4720ddcc.jpg";
import img6 from "../../../images/media/img6.1213deaa.jpg";
import img7 from "../../../images/media/img7.05e49390.jpg";
import img8 from "../../../images/media/img8.79c2cde8.jpg";

const WHTParent = () => {

  return(

    <div className="whtP">

      <div className="whtP-header--main">What's happening in Toyota</div>

      <div className="whtP-container">
        <div className="whtP-contain">
          <Link to="/toyota-newsroom/supra" title="This link HAS content. Click to See!">
          {/* <a href="supra.html" target="_blank"> */}
            <WHTChild 
              image={img1}
              callToAction="Latest News"
              header="One incredible ride"
              header2="Two important causes"
              body="Barrett-Jackson will auction the first globally produced all-new toyota Supra, with all proceeds going to charity."
            />
            {/* </a>  */}
          </Link>
          <Link to="/toyota/404" title="**This link has no content**">
            <WHTChild 
              image={img2}
              callToAction="Latest News"
              header="Safety recall information"
              header2=""
              body="Get information on open safety recalls and service campaigns."
            />
          </Link>
          <Link to="/toyota/404" title="**This link has no content**">
            <WHTChild 
              image={img3}
              callToAction="Latest News"
              header="Audio/Multimedia"
              header2=""
              body="Entune™ and Entune™ 3.0 App Suite capable vehicles are being updated 11/13/18 to no longer include Pandora®, OpenTable® and Facebook Places functionality."
            />
          </Link>
        </div>

     

        <div className="whtP-contain middle">
          <Link to="/toyota-concept-vehicles/supra/xfinity-series" title="This link HAS content. Click to See!">
            <WHTChild
              image={img4}
              callToAction="Latest News"
              header="The 2019 Supra Xfinity"
              header2="Series Race Car"
              body="The al-new Supra race car joins the NASCAR Xfinity Series and is set to make its racing debut in 2019."
            />
          </Link>
          <Link to="/toyota/404" title="**This link has no content**">
            <WHTChild
              image={img5}
              callToAction="Latest News"
              header="Toyota Safety Sense (TSS)"
              header2=""
              body="Wherever you are going in life, Toyota's newly developed safety system helps get you there safely."
              className="middle"
            />
          </Link>
        </div>
        <div className="whtP-contain">
          <NavLink to="/toyota-care" title="This link HAS content. Click to See!">
            <WHTChild 
              image={img6}
              callToAction="Latest News"
              header="Toyota Care"
              header2=""
              body="Toyota includes a no cost maintenance plan 24 and 24-hour roadside assistance with the purchase or lease of every new Toyota."
              className="middle"
            />
          </NavLink>
          <Link to="/toyota/404" title="**this link has no content**">
            <WHTChild 
              image={img7}
              callToAction="Latest News"
              header="Our American Journey"
              header2=""
              body="From north to south, east to west, we’re hundreds of thousands of team members strong – all dedicated to helping you go places."
            />
            </Link>
          <Link to="/toyota/404" title="**This link has no content**">
            <WHTChild 
              image={img8}
              callToAction="Latest News"
              header="The versatiel 2018 Prius"
              header2=""
              body="Whether you're going camping, to the farmers' market or the dog park, Prius has everything you need. Let the fun begin."
            />
          </Link>
        </div>
      </div>  

    </div>
  )
}

export default WHTParent;