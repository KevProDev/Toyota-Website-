import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import AppRouter from './routers/AppRouter';
import reducers from "./redux/reducers";

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
<Provider store={store}>
  <AppRouter /> 
</Provider>,
document.getElementById('app'));






// import React, { Component} from 'react'
// import ReactDOM from 'react-dom'
// import App from './App.js'
// import "bootstrap/scss/bootstrap.scss"   
// import '../../sass/main.scss'



// const app = document.getElementById('app')

// ReactDOM.render(<App />, app)
