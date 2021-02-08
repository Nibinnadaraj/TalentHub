import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    
    body:{
        flex:1,
        
    },
    container:{
        flex:1,
        paddingVertical:10,
        paddingHorizontal:20,
        justifyContent:'center'
       
       
    },
    scrollView:{
        flex:1

    },
    Heading:{
        fontSize:25,
        fontFamily:'LeagueGothic-Regular',
        paddingBottom:5,
        
    },
    HeadingCenter:{
        fontSize:30,
        fontFamily:'LeagueGothic-Regular',
        textAlign:'center',
        paddingBottom:10,
        
    },
    Body:{
        backgroundColor:'#ede8e8'
    },
    loginContainer:{
       
        
    },
    clearfix:{
        paddingVertical:0,
        
    },
    Divider:{
        backgroundColor:'#F79943',
        marginBottom:0,

    },

    loginButton:{
        backgroundColor:'#F79943',
        width:120
    },
    buttonContainer:{
        alignItems:'center'
    },
    buttonHorizontalContainer:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-around',
        paddingVertical:10
    },
    smallButton:{
        width:100,
        height:40,
        //backgroundColor:'#078ce3',
        alignItems:'center',
        justifyContent:'center',
       // elevation:0.3
    },
    smallButtonText:{
        fontSize:14,
        color:'#005E9B'
    },

    infoContainer:{
        flexDirection:"row",
        paddingBottom:30,
    },
    infoText:{
        fontSize:15,
        fontFamily:'JosefinSans-Light',
    },
    infoTextBold:{
        paddingHorizontal:5,
        fontSize:18,
        lineHeight:23,
        fontFamily:'JosefinSans-Light',
        fontWeight:"bold"

    },
    textInput:{
        height:60,
    },
    formContainer:{
        paddingTop:40
    }

    
});