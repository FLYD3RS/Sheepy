import React from "react";
import * as action from "../static/Action";
import store from "../static/Store";

export default class HomeDashBoard extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="container">
        <a className="dashBoardTitle">Welcome back {store.pseudo}</a>
      </div>
    );
  }
}
