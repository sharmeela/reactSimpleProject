import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./home";
import ExchangeRates from "./exchangeRates";
import LesseeTaxRates from "./lesseeTaxRates";
 
class Main extends Component {
  render() {
    return (
		<HashRouter>
        <div>
          <h1>Settings</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>			
			<li><NavLink to="/lesseeTaxRates">Tax Rates</NavLink></li>
			<li><NavLink to="/exchangeRates">Exchange Rates</NavLink></li>
          </ul>
          <div className="content">
			  <Route exact path="/" component={Home}/>
			  <Route path="/lesseeTaxRates" component={LesseeTaxRates}/>
			  <Route path="/exchangeRates" component={ExchangeRates}/>
		  </div>
        </div>
		</HashRouter>
    );
  }
}
 
export default Main;