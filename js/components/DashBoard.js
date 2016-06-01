import React from "react";
import store from "../static/Store";
import * as action from "../static/Action";


export default class DashBoard extends React.Component {
  constructor() {
    super();
    this.state = {showSettings: true, computer:[
      {
        id: 1,
        name: "StreadPC",
        icon: "fa fa-linux"
      },
      {
        id: 2,
        name: "vps279868",
        icon: "fa fa-windows"
      },
    ]}

  }

  showSettings(){
    this.setState({showSettings : !this.state.showSettings});
  }
  render() {
    var results = this.state.computer;
    return (

      <div id="menu">
        <nav id="navTop">
          <ul>
            <li className="brand">
              <a href="#"><i className="fa fa-plug" aria-hidden="true"></i> Sheepy</a>
            </li>
            <li className="brand_powered"><a href="#">Powered by SheepDev</a></li>
          </ul>
        </nav>

        <nav id="navLeft">
          <ul className="navleft_main" >
            <li><a href="#"><i className="fa fa-circle-o-notch fa-spin fa-fw"></i> Computer Online<span className="badge">{this.state.computer.length}</span></a></li>
            <ul className="navleft_sub">
              {results.map(function(result) {

                return(
                  <li key={result.id}><a><i className={result.icon}></i> {result.name}</a></li>
                )
              })}
            </ul>
            <li><a href="#"><i className="fa fa-database" aria-hidden="true"></i> Computer Offline <span className="badge">0</span></a></li>
            <li onClick={this.showSettings.bind(this)}><a href="#"><i className="fa fa-cog"></i> Settings <span className="badge">3</span></a></li>

            {(() => {
              if(this.state.showSettings == true){
                return(
                  <ul className="navleft_sub">
                    <li onClick={action.showOnDashboard.bind(null, "Settings_Account")}><a href="#"><i className="fa fa-user" aria-hidden="true"></i> Account</a></li>
                    <li><a href="#"><i className="fa fa-download" aria-hidden="true"></i> Download App</a></li>
                    <li id="logout" onClick={action.logout.bind(null)}><a href="#"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
                  </ul>
                )
              }


            })()}

          </ul>
        </nav>
      </div>
    );
  }
}
