import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {styles} from '../styles/Styles';
import { Divider , IconButton, List} from 'react-native-paper';


export default class HospitalList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      sectionValue:1,
    };
  }



  setValue = (value) => {
    this.setState({
      sectionValue: value
    });


  }

  render(){
    return(
      <View style={styles.body}>


        <View showsVerticalScrollIndicator={false}>
       

        <View style={styles.container}> 
        <Text style={styles.HeadingCenter}>Hospitals & Info</Text>

        <View style={styles.sectionCategory}>


        <TouchableOpacity onPress={() => this.setValue(1)}  style={styles.sectionButtons}>
          
          <IconButton
          icon="hospital-building"
          color="#fff"
          style={this.state.sectionValue == 1 ? styles.backgroundBlue : styles.backgroundGrey}
          size={40}
          />
               <Text style={styles.sectionText}>Hostpital</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.setValue(2)}   style={styles.sectionButtons} >
          <IconButton
          icon="stethoscope"
          color="#fff"
          style={this.state.sectionValue == 2 ? styles.backgroundBlue : styles.backgroundGrey}
          size={40}
          />
         
          <Text style={styles.sectionText}>Clinic</Text>


          </TouchableOpacity >

          <TouchableOpacity onPress={() => this.setValue(3)} style={styles.sectionButtons}>

          <IconButton
          icon="microscope"
          color="#fff"
          style={this.state.sectionValue == 3 ? styles.backgroundBlue : styles.backgroundGrey}
          size={40}
          />
         
          <Text style={styles.sectionText}>Lab</Text>
          </TouchableOpacity>

          
        </View>


          </View> 
          <Divider style={styles.Divider} />

          <View style={styles.container}>

           



        <List.Section titleStyle={styles.Heading}  title={this.state.sectionValue == 1? "Hospitals" : this.state.sectionValue == 2 ? "Clinic's" : "Lab's"}>
       

        <ScrollView style={{height:'70%'}} showsHorizontalScrollIndicator={false}>

        <List.Accordion
        titleStyle={styles.ListHeading}
        title={this.state.sectionValue == 1? "Hospitals" : this.state.sectionValue == 2 ? "Clinic's" : "Lab's"}
        left={props => <List.Icon {...props} color="#005E9B" size={25} icon={this.state.sectionValue == 1? "hospital-building" : this.state.sectionValue == 2 ? "stethoscope" : "microscope"} />}>
        
        <List.Item 
         titleStyle={styles.ListHeading}
        title="Title For The Item" description={props => <Text style={styles.Paragraph}>Our chain of aesthetically designed retail branches boasts of the</Text> } >
          
        </List.Item>
        
      </List.Accordion>

      <List.Accordion
        titleStyle={styles.ListHeading}
        title={this.state.sectionValue == 1? "Hospitals" : this.state.sectionValue == 2 ? "Clinic's" : "Lab's"}
        left={props => <List.Icon {...props} color="#005E9B" size={25} icon={this.state.sectionValue == 1? "hospital-building" : this.state.sectionValue == 2 ? "stethoscope" : "microscope"} />}>
        
        <List.Item 
         titleStyle={styles.ListHeading}
        title="Title For The Item" description={props => <Text style={styles.Paragraph}>Our chain of aesthetically designed retail branches boasts of the</Text> } >
          
        </List.Item>
       
        
      </List.Accordion>

      <List.Accordion
        titleStyle={styles.ListHeading}
        title={this.state.sectionValue == 1? "Hospitals" : this.state.sectionValue == 2 ? "Clinic's" : "Lab's"}
        left={props => <List.Icon {...props} color="#005E9B" size={25} icon={this.state.sectionValue == 1? "hospital-building" : this.state.sectionValue == 2 ? "stethoscope" : "microscope"} />}>
        
        <List.Item 
         titleStyle={styles.ListHeading}
        title="Title For The Item" description={props => <Text style={styles.Paragraph}>Our chain of aesthetically designed retail branches boasts of the</Text> } >
          
        </List.Item>
        
      </List.Accordion>

      <List.Accordion
        titleStyle={styles.ListHeading}
        title={this.state.sectionValue == 1? "Hospitals" : this.state.sectionValue == 2 ? "Clinic's" : "Lab's"}
        left={props => <List.Icon {...props} color="#005E9B" size={25} icon={this.state.sectionValue == 1? "hospital-building" : this.state.sectionValue == 2 ? "stethoscope" : "microscope"} />}>
        
        <List.Item 
         titleStyle={styles.ListHeading}
        title="Title For The Item" description={props => <Text style={styles.Paragraph}>Our chain of aesthetically designed retail branches boasts of the</Text> } >
          
        </List.Item>
        
      </List.Accordion>

      </ScrollView>

      
    </List.Section>




          </View>


        </View>


      </View>
    );
  }



}
