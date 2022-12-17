import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1F1E25',
        
        flexDirection:'row',
        width:'100%',
        borderRadius:5,
        alignItems: 'center',
        marginBottom: 10
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText:{
        fontSize:24,
        color:'#fff'
      },
      name:{
        flex:1,
        fontSize:16,
        color:'#fff',
        marginLeft: 16
      }
})