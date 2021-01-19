import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    picker: {
        height: 50,
        width: 151,
        fontSize:20,
        color: 'black',
        borderRadius: 5,
        borderBottomWidth: 1,
        borderColor: 'black',
        
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center', 
        alignItems: 'center',
        paddingTop:50,

    },
    textStyle: {
        color: "black",
        fontSize: 20,  
    },
    textStyle1: {
        color: "black",
        fontSize: 20,
        borderRadius: 4,
        borderBottomWidth: 1,
        height: 30, 
        borderBottomColor: 'gray',        
    },
    textStyle2: {
        color: "black",
        fontSize: 20,
        borderRadius: 4,
        borderBottomWidth: 1,
        height: 30, 
        borderBottomColor: 'gray',        
    },
    contentsContainer: {
    flexDirection: "row",
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 60,

    },
    container: {
    justifyContent: 'center', 
    alignItems: 'center',
    paddingTop: 100,

    },
    space: {
    width: 20, // or whatever size you need
    height: 20,
    },
});
export default styles;