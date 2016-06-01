import dispatcher from "./dispatcher";

export function login(pseudo, password) {
  dispatcher.dispatch({
    type: "login",
    pseudo,
    password,
  });
}
export function showOnDashboard(name) {
  dispatcher.dispatch({
    type: "showOnDashboard",
    name,
  });
}
export function logout() {
  dispatcher.dispatch({
    type: "logout",
  });
}
export function sendMessage(message) {
  dispatcher.dispatch({
    type: "sendMessage",
    message,
  });
}
