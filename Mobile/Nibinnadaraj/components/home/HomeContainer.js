import React, { Component } from "react";
import HomeView from "./HomeView";
import { connect } from "react-redux";
import * as loginActions from "../../src/actions/loginActions";

import * as profileActions from "../../src/actions/profileActions";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeView {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    userInfo :state.loginReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {

    refreshToken : (params) => dispatch(loginActions.refreshToken(params)),
    getProfileData : (token, refresh_token) => dispatch(profileActions.profileDataRequest(token, refresh_token)),
   
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);