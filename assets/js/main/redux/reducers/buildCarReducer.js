const allCars = () => {
  return [
    { 
      model: "camry", 
      img: "/imgs/camry/sidefront/red.jpg",
      carAngle: 0,
      color:"red",
      engine: 0,
      price: 25000,
      miles: "29/32"
    },
    { 
      model: "86", 
      img: "/imgs/86/sidefront/white.jpg",
      carAngle: 0,
      color:"white",
      engine: 0,
      price: 30000,
      miles: "22/28"
    },
    { 
      model: "corolla", 
      img: "/imgs/corolla/sidefront/blue.jpg",
      carAngle: 0,
      color:"blue",
      engine: 0,
      price: 20000,
      miles: "28/35"
      
    },
    { 
      model: "avalon", 
      img: "/imgs/avalon/sidefront/black.jpg",
      carAngle: 0,
      color:"black",
      engine: 0,
      price: 35000,
      miles: "25/30"
    },
    { 
      model: "yaris", 
      img: "/imgs/yaris/sidefront/gray.jpg",
      carAngle: 0,
      color:"gray",
      engine: 0,
      price: 18000,
      miles: "30/35"
    }
  ]
};



const buildCarReducer = (selectedCar = {}, action) => {
  if(action.type === "BUILD_CAR"){
    return action.payload;
  } 
  return selectedCar;
};

export { allCars, buildCarReducer };