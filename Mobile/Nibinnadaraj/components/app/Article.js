import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';
import { styles } from '../styles/Styles';



export default class Article extends React.Component{



  render(){

    const {id,title,description,image} = this.props.route.params;
    return(
      <View style={styles.Body}>
        <View style={styles.container}>

    <Text style={styles.HeadingCenter}>{title}</Text>

        </View>

        <ScrollView style={{height:'85%'}} showsVerticalScrollIndicator={false}>


        <View style={styles.fullImageCOntainer}>
        <Image
        source={image}
        style={{flex:1, width: '100%', height: '100%', resizeMode:'cover' }}
      />
        </View>

        <View style={styles.container}>

          <Text style={styles.Paragraph}>
            {description}
          </Text>
        </View>

        </ScrollView>
        

     
      </View>
    );
  }



}
