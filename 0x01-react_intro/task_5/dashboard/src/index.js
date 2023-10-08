import React, {StrictMode} from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import Notifications from "./Notifications/Notifications";

ReactDOM.render(
  <StrictMode>
    <div id="root-notifications">
      <Notifications />
    </div>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
