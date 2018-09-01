import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {Header,Item,Icon,Input,Button} from 'native-base';
import LoadingScreen from './LoadingScreen';
import SearchBody from './SearchBody';
import axios from 'axios';
// http://pokeapi.co/api/v2/
export default class MyComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokeSearch:"",
      onCall:true,
      data:{

      }
    };
  }
  searchPoke =()=>{
    this.setState({onCall:true});
    var self = this;
    axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
    .then((res)=>{
      console.log(res.data);
      self.setState({data:res.data});
      self.setState({onCall:false});
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  loadingScreen = ()=>{
    if(this.state.onCall){
      return(
        <LoadingScreen/>
      )
    }
    else{
      return(
        <SearchBody data = {this.state.data}/>
      )
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          searchBar
          rounded
          >
          <Item>
            <Icon name="ios-search" onPress={this.searchPoke}/>
              <Input
                value = {this.state.pokeSearch}
                placeholder="Search pokemon"
                onChangeText = {(pokeSearch)=>this.setState({pokeSearch})}
                />
          </Item>
        </Header>
        {this.loadingScreen()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
