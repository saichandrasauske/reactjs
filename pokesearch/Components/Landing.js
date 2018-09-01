import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground
} from 'react-native';
import {Button} from 'native-base';

var myBackground =  require('../assets/landing.jpg')

export default class Landing extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={myBackground} style={{width: '100%', height: '100%'}}>
          <View style={styles.viewStyle}>
             <Text style={styles.titleStyle}>Welcome to pokeSearch</Text>
             <Button
               block
               style = {styles.buttonStyle}
               onPress ={()=>this.props.switchScreen("Search")}
               >
               <Text style ={styles.buttonText}>Start searching</Text>
             </Button>
             </View>
          </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginTop: Platform.OS  === "andriod" ?24:30,
    },
    viewStyle: {
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleStyle:{
      fontSize: 30,
      color:"#000",
      alignItems: 'center',
    },
    buttonStyle:{
      margin:15,

    },
    buttonText:{
      color:'#fff',
      fontSize:20,
    }
});
