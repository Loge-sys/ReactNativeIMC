import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    formContext: {
      flex:1,
      backgroundColor: '#fff',
      alignItems:'center',
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      paddingTop:30
    },
    form: {
        width:'100%',
        height: 'auto',
        marginTop:10,
        padding:10
    },
    formLabel:{
        color: '#000',
        fontSize:18,
        paddingLeft:20

    },
    formInput:{
        width:'90%',
        borderRadius:50,
        backgroundColor:'#f6f6f6',
        height:40,
        margin:12,
        paddingLeft:10
    },
    buttonCalculator:{
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        width: '100%',
        backgroundColor:'#ff0043',
        paddingTop:14,
        paddingBottom:14,
        marginTop:15,
        marginBottom: 30
    },
    textButtonCalculator:{
        fontSize:20,
        color: "#fff"
    },
    errorMessage: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20
    },
    exhibitionResultImc:{
        width: '100%',
        height: '50%'
    },
    resultImcItem:{
        fontSize: 24,
        color: 'red',
        height:50,
        width: '100%'
    },
    textResultItemList:{
        fontSize: 18
    }
  });

export default styles;
  