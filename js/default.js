import React from "react";
import ReactDOM from "react-dom";
import store from "./static/Store";
// components
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import Settings_Account from "./components/Settings_Account";
import HomeDashBoard from "./components/HomeDashBoard";


store.on("logged", function(){
  ReactDOM.render(<div><DashBoard></DashBoard><HomeDashBoard></HomeDashBoard></div>, document.getElementById('example'));
});

store.on("showOnDashboard", function(e){
  if(e == "Settings_Account"){
    ReactDOM.render(<div><DashBoard></DashBoard><Settings_Account></Settings_Account></div>, document.getElementById('example'));
  }
});
store.on("logout", function(){
  ReactDOM.render(<Login></Login>, document.getElementById('example'));
});
ReactDOM.render(<Login></Login>, document.getElementById('example'));
