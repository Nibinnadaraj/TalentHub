import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    
    drawerContent: {
        flex: 1,
      },
      userInfoSection: {
        paddingLeft: 20,
      },
      title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        fontFamily:'LeagueGothic-Regular',
      },
      caption: {
        fontSize: 14,
        lineHeight: 14,
      },
      row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      },
      paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
      },
      drawerSection: {
        marginTop: 15,
      },
      bottomDrawerSection: {
          marginBottom: 15,
          borderTopColor: '#f4f4f4',
          borderTopWidth: 1
      },
      preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      Divider:{
        backgroundColor:'#F79943',
        marginTop:5

    },

    infoContainer:{
      justifyContent:"center",
      alignItems:'center',
      flex:1,
  },
  infoText:{
      fontSize:15,
      fontFamily:'JosefinSans-Light',
      
  },
  infoTextBold:{
      paddingHorizontal:5,
      fontSize:18,
      lineHeight:20,
      fontFamily:'JosefinSans-Light',
      fontWeight:"bold",
      paddingVertical:10
      

  },

    
});