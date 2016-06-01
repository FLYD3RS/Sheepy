import React from "react";
import * as action from "../static/Action";
import store from "../static/Store";

export default class Settings_Account extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container" id="settings_account">
        <a className="dashBoardTitle">Account Settings</a>
        <div className="padx5">
          <div className="textboxLine"><a>Pseudo: {store.pseudo}</a></div>
          <div className="textboxLine"><a>Email: {store.email}</a></div>
          <div className="textboxLine"><a>Password: &nbsp; </a><input size="12" type="password" defaultValue="Your password"/> <button type="button">change</button></div>
          <button type="button">Currently in building ...</button>
        </div>
      </div>
    );
  }
}
