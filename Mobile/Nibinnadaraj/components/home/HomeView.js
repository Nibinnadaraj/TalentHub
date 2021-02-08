import React from 'react';
import {
  View,
  Dimensions,
  Linking,
  ScrollView,
  Text,
  ActivityIndicator,
  Image
} from 'react-native';

import { Divider } from 'react-native-paper';
import { styles } from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class HomeView extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        isLoading:true,
        slideImage:[],
        homeText:null,

    }
}




componentDidMount(){
this.__getProfile();
console.log(this.props.userInfo.profileData.picture)
}


__getProfile = async() =>{
  if(this.props.userInfo.profileData.length <= 0){
    this.props.getProfileData(this.props.userInfo.access_token, this.props.userInfo.refresh_token)

  }



}





  render(){

    if(this.props.userInfo.profileData.length <= 0){
      return(

        <>
        
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator color={"red"} size={"large"}/>

      </View>
        </>
      )
    }
    return(
        <ScrollView style={styles.Body} showsVerticalScrollIndicator={false}>

        

              

              <View style={styles.container}>

                <View style={styles.imageCOntainer}>


                  <Image 
                     style={styles.profilePic}
                     source={{
                      uri: this.props.userInfo.profileData.picture,
                     }}
                  />
                </View>

                      
                    <Text style={styles.HeadingCenter}>{`${this.props.userInfo.profileData.name}`}</Text>
                    <Text style={styles.HeadingCenter}>{`( ${this.props.userInfo.profileData.nickname} )`}</Text>
                    <Divider style ={styles.Divider}/>

                    <View style={styles.profileItem}> 
                    <Icon name="envelope" size={18} color="#3F80A0" />

                    <Text style={styles.Paragraph}>{this.props.userInfo.profileData.email}</Text>

                    {this.props.userInfo.profileData.email_verified &&
                    
                    <Icon name="check-circle" size={15} color="#598DF3" style={{paddingHorizontal:5}} />
                    }

                    </View>

                  

                    
              
              </View>
              

             

              </ScrollView>

                  
    );
  }

}