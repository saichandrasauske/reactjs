import React from 'react';
import { StyleSheet, Text, View ,Platform,ImageBackground,Dimensions} from 'react-native';

import Landing from './Components/Landing';
import Search from './Components/Search';

export default class App extends React.Component {
switchScreen = (currentScreen)=>{
  this.setState({currentScreen});
}
  constructor(props){
    super(props);
    this.state = {
      currentScreen:"Landing"
    };
  }
  renderScreen = ()=>{
    if(this.state.currentScreen === "Landing"){
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }
    if(this.state.currentScreen === "Search"){
      return(
        <Search/>

      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
      {this.renderScreen()}
			</View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  })
