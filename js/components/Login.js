import React from "react";
import ReactDOM from "react-dom";
import * as action from "../static/Action";
import store from "../static/Store";

export default class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {pseudo: "demo", password: "demo"};
  }
  HandleInputChange(event){
    if(event.target.placeholder == "Nom de compte"){
      this.setState({pseudo: event.target.value});
    }else{
      this.setState({password: event.target.value});
    }
  }


  render() {
    return (
      <div id="login_module">
          <form>
              <div className="groupbox">
                  <i className="fa fa-user" aria-hidden="true"></i>
                  <input type="text" onChange={this.HandleInputChange.bind(this)} defaultValue={this.state.pseudo} placeholder="Nom de compte"/>
              </div>
              <div className="groupbox">
                  <i className="fa fa-unlock-alt" aria-hidden="true"></i>
                  <input type="password" onChange={this.HandleInputChange.bind(this)} defaultValue={this.state.password} placeholder="Votre mot de passe ..."/>
              </div>


              <button type="button" onClick={action.login.bind(null, this.state.pseudo, this.state.password)}>Connexion </button>
          </form>
      </div>
    );
  }
}
