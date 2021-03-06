import React from "react";
import { NavLink, Link } from "react-router-dom";

import SelectCars from "./SelectCars";

import Toyota from "../../../images/media/toyota-logo.png";

class Nav extends React.Component {


  state = {
    menu: false,
    selectVehicle: false, 
  };

  changeMenu = () => {
    this.setState(() => ({ menu: !this.state.menu, selectVehicle: true }), () => { this.props.getStateFromNav(this.state.menu)});
    console.log("closemenuafterclick")
  };

  closeMenuAfterClick = () => {
    if(this.state.menu === true){
      this.setState(() => ({ menu: false }), () => { this.props.getStateFromNav(this.state.menu)});
      console.log("closemenuafterclick")
    } else{
      return false;
    }
  };

  componentWillUnmount(){
    this.setState({ menu:false });
  };

  render(){


    return(
      <div>
          <div className={this.state.menu ? "nav-container--open" : "nav-container--closed"}>
            {/* <div></div> */}
            <div></div>
            <div className="nav-flex">
              <NavLink to="/" exact={true} activeClassName="is-active nav-link" className="nav-link" onClick={this.closeMenuAfterClick}>
                <div>Explore</div>
              </NavLink>
              <NavLink to="/search" activeClassName="is-active nav-link" className="nav-link" onClick={this.closeMenuAfterClick}>
                <div className="nav-search--flex" >
                  <div onClick={this.getNavLink}>Search</div>
                  <i className="fa fa-search nav-search-fa" aria-hidden="true" ></i>
                </div>
              </NavLink>
              <NavLink to="/select_toyota" activeClassName="is-active nav-link" className="nav-link" onClick={this.closeMenuAfterClick}>
              <div>Build & Price</div>
              </NavLink>
            </div>
            <div></div>
          </div>
        <div className={this.state.menu ? "nav-container2--open" : "nav-container2--closed"}>
          <div className="nav-container2--links">
            <div>
              <Link to="/">
                <img src={Toyota} className="nav-logo" alt="logo" onClick={this.closeMenuAfterClick}/>
              </Link>
              <div className="nav-logo-text">
                Proud Mobility Partner
              </div>
            </div> 
            <div className={this.state.menu ? "nav-flex nav-link--2 nav-link--2-active": "nav-flex nav-link--2 nav-link--2-inactive"} onClick={this.changeMenu}>
              <div>Select Vehicle &nbsp;</div>
              {this.state.menu ? <i className="fa fa-arrow-up" aria-hidden="true"></i> : <i className="fa fa-arrow-down" aria-hidden="true"></i>}
            </div>  
          </div>   
          {/* <div></div> */}
          <SelectCars menu={this.state.menu} closeMenu={this.closeMenuAfterClick}/> 
        </div> 
      
    
  
  
      </div>
    )
  }
}

export default Nav;
