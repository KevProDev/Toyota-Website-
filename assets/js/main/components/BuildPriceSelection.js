import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { buildCar } from "../redux/actions";
import { Capitalize, CarPriceToString, CreateAsShownPriceRandomly, Miles } from "../functions/Functions.js";

import Footer from "./Footer";

class BuildPriceSelection extends React.Component {

  //renders each car taking in props from our redux store
  renderCars() {

    return this.props.allCars.map(car => {
      const regEx = car.img.replace(/sidefront/g, "side");
      const carLink = `/build/${car.model}`

      return(       
        <Link to={carLink} key={car.model} className="build_price-renderBox" onClick={()=>{
          return this.props.buildCar(car);
          }}> 

          <img src={regEx} className="build_price-img" alt="car"/>
          <div className="build_price-asShown">
            <div>{ CarPriceToString(CreateAsShownPriceRandomly(car.price)) } as shown</div>
          </div>
          <div className="build_price-info">
            <div className="build_price-info--flex">
              <div className="build_price-info--year">  2019 &nbsp;</div>
              <div className="build_price-info--title"> {Capitalize(car.model)}</div>
            </div>
            <div className="build_price-info--starting">{ CarPriceToString(car.price) } starting<sup>1</sup></div>
            <div className="build_price-info--miles">{ Miles(car.model) } est mpg<sup>5</sup></div>
          </div>
        </Link>
      )
    });
  }

  render(){
    console.log("carselectionstate",this.state)
    console.log("carselection", this.props)
    return(
      <div className="build_price">
        <div className="build_price-header">Build Your Toyota</div>
        <div className="build_price-text">Customize your own Toyota car, truck, SUV, crossover, hybrid or minivan by selecting the below models to get started.</div>
      
        <div className="build_price-carLinks">
          <button className="build_price-carLinks--cars">Cars</button>
        </div>
        
        <div className="build_price-contain">
          {this.renderCars()}
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    allCars: state.allCars
  }
};
export default connect(mapStateToProps,{
  buildCar
})(BuildPriceSelection);