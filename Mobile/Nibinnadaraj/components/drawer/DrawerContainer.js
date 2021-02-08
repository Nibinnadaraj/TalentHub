import React, { Component } from "react";
import {DrawerView} from "./DrawerView";
import { connect } from "react-redux";
import * as loginActions from "../../src/actions/loginActions";

class DrawerContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DrawerView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    userInfo :state.loginReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onLogout: (params) => dispatch(loginActions.logoutUser()),
   
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContainer);