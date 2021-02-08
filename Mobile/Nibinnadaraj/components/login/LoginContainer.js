import React, { Component } from "react";
import LoginView from "./LoginView";
import { connect } from "react-redux";
import * as loginActions from "../../src/actions/loginActions";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <LoginView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.loadingReducer.isLoading,
  };
}
function mapDispatchToProps(dispatch) {
  return {

    onLogin: (params) => dispatch(loginActions.loginRequest(params)),
    skipToHome: (params) => dispatch(loginActions.loginResponse(params))
   
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);