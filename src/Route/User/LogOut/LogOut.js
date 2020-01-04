//Reactjs Library
import React from "react";
//ThirdParty Library
import { withRouter } from "react-router-dom";

const LogOut = props => {
  localStorage.setItem("LoggedIn", false);
  localStorage.setItem("userId", "");
  props.history.goBack();
  return <div>LogOut</div>;
};

export default withRouter(LogOut);
