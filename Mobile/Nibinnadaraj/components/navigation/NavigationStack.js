import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { Appbar } from 'react-native-paper';
import {styles} from '../styles/Styles';

/* Screens */
import HomeContainer from '../home';
import LoginContainer from '../login';
/* Screens End */

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export function HomeStack(){
  return(
    <Stack.Navigator
    initialRouteName={'Home'}
    >
        <Stack.Screen
          name="Home"

          component={HomeContainer}
         /* options={{
            animationEnabled: false,
            }} */
           
            options={({ navigation, route }) => ({
              headerStyle: {
                height:50,
              },
              headerTitle: () =>  null,
              headerLeft: () =>   <Appbar.Action icon="menu" color={'#005E9B'}  size={45} onPress={() => navigation.openDrawer()} style={{paddingLeft:0,marginLeft:0}}/>,
              // headerRight: () =>   null,

            })}
           
        />

        
    </Stack.Navigator>
  );

}




// /*Login STack */

export function LoginStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    initialRouteName={'Login'}
    >

<Stack.Screen
          name="Login"
          component={LoginContainer}
         /* options={{
            animationEnabled: false,
            }} */
           
            options={({ navigation, route }) => ({
              headerStyle: {
                height:50,
              },
              headerTitle: () =>   null,
  
            })}
           
        />

        


        
    </Stack.Navigator>
  );

}

