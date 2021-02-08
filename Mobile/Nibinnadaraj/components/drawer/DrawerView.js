import React from 'react';
import { View } from 'react-native';
import {
    useTheme,
    Drawer,
    Button,
    Dialog, 
    Portal,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './Styles';



function footerLogout(props, viewLogout){

    return(
        <>
         <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => viewLogout() }
                />
            </Drawer.Section>
        </>
    )

}


export function DrawerView(props) {
    console.log(props.userInfo.id)


    const paperTheme = useTheme();

    const [visible, setVisible] = React.useState(false);


    const hideLogout = () => setVisible(false);
    const viewLogout = () => setVisible(true);



    return(
        <View style={{flex:1}}>

         {/*Logout DIalog */}

         <Portal>
      <Dialog visible={visible} onDismiss={hideLogout} style={{paddingTop:30,paddingBottom:10,paddingHorizontal:10}}>
      <Dialog.Title style={[styles.title,{fontSize:25,fontWeight:'400',color:"#303030"}]}>Are You Sure Want to Logout</Dialog.Title>
 
        <Dialog.Actions>
          <Button 
          theme={{ colors: { primary: '#005E9B'}}}
          icon="cancel" onPress={() => hideLogout()}>Cancel</Button>
          <Button 
          theme={{ colors: { primary: '#005E9B'}}}
          icon="logout"  onPress={() => {
            props.navigation.closeDrawer();
            props.onLogout();

          }}>Logout</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>

    {/*Logout DIalog  End*/}

            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>

                    <Drawer.Section 
                    style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="poll" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Survey"
                            onPress={() => {props.navigation.navigate('Survey')}}
                        />

                      <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="map-search-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Survey History"
                            onPress={() => {props.navigation.navigate('Surveyhistory')}}
                        />

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="newspaper-variant-multiple" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Posts"
                            onPress={() => {props.navigation.navigate('Posts')}}
                        />


                        
                    </Drawer.Section>

    
                    
                </View>
            </DrawerContentScrollView>

            { footerLogout(props,viewLogout)}

            
        </View>
    );
}
