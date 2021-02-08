import React from 'react';
import { Provider as PaperProvider, ActivityIndicator } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from '../src/store/configureStore';
const { persistor, store } = configureStore();

import {
  View,
  Text,
  Image
} from 'react-native';

import NavigationRoot from './navigation';

function ActivityLoader (){
  return(
    <View style={{flex:1, alignItems:"center",justifyContent:'center'}}>
    <ActivityIndicator/>
    </View>
 
  );
}

export default class AppRoot extends React.Component {


  render() {
    return (
      <ReduxProvider store={store}>
        <PersistGate
          loading={<ActivityLoader/>}
          persistor={persistor}
        >
          <PaperProvider>
           <NavigationRoot/>
          </PaperProvider>
        </PersistGate>
      </ReduxProvider>

    );
  }



}
