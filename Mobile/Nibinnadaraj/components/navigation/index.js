import React from 'react';

import {View, Text } from 'react-native';

/* Screens */
import HomeDrawer from './NavigationDrawer';
import {LoginStack} from './NavigationStack';
/* Screens End */

import { NavigationContainer } from '@react-navigation/native';

import { navigationRef, isReadyRef } from './RootNavigation';


import { connect } from "react-redux";

 class NavigationRoot extends React.Component{


  constructor(props){
    super(props);

    this.state = {
        isLoading:'true',

    }
}


  componentDidMount(){
    setTimeout(() => {
       this.setState({isLoading:false});
       }, 2000);
}


  render(){
   

    if(this.props.isLoggedIn){
                   
      return(
       
        <NavigationContainer  
        ref={navigationRef}
        onReady={() => {
          isReadyRef.current = true;
        }}>

        <HomeDrawer {...this.props} />
                
         </NavigationContainer>

      )
      }else{
    return(

      <NavigationContainer 
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
      >

      <LoginStack {...this.props} />
              
       </NavigationContainer>
     
  
    );
      }
  }



}


function mapStateToProps(state) {
  return {

    isLoggedIn:state.loginReducer.isLoggedIn,
  };
}
function mapDispatchToProps(dispatch) {
  return {
   
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationRoot);