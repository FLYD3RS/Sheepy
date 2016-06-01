
import { EventEmitter } from "events";

import dispatcher from "./dispatcher";

class store extends EventEmitter {

  constructor() {
    super();
    this.email = "admin@sheepy.ovh";
  }



  handleActions(action) {
    switch(action.type) {
      case "login": {
        if(action.pseudo != "" && action.password != ""){
          this.pseudo = action.pseudo;
          this.emit("logged");
        }else{
          alert("Information manquante (pseudo or password)");
        }
        break;
      }
      case "logout": {
        this.emit("logout");
        break;
      }
      case "showOnDashboard": {
        this.emit("showOnDashboard", action.name);
      }
    }
  }

}

const _store = new store;
dispatcher.register(_store.handleActions.bind(_store));
export default _store;
