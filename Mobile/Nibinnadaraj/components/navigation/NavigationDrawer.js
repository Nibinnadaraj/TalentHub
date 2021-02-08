import React from 'react';

/* Screens */
import { HomeStack } from './NavigationStack';
/* Screens End */

import DrawerContainer from '../drawer'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();




export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      drawerType={'back'}
      drawerContent={props => <DrawerContainer {...props} />} >
      <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>


  );
}