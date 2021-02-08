import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
   
    Paragraph:{
        fontSize:18,
        fontFamily:'JosefinSans-Light',
        lineHeight:18,
        paddingBottom:5,
        paddingLeft:10
    },
    HeadingCenter:{
        fontSize:22,
        fontFamily:'LeagueGothic-Regular',
        textAlign:'center',
        paddingBottom:10,
        
    },
    Body:{
        backgroundColor:'#ede8e8'
    },
   
    Divider:{
        backgroundColor:'#F79943',
        flex:1,

    },
    DividerBlue:{
        backgroundColor:'#005E9B',

    },

     container:{
        paddingVertical:10,
        paddingHorizontal:10,
    },
    profilePic:{
        height:150,
        width:150,
        borderRadius:75,
        borderColor:"#ccc",
        borderWidth:2
    },
    imageCOntainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20
    },
    profileItem:{
        flexDirection:'row',
        paddingVertical:10
    }

    
});