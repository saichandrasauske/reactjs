import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {ListItem, List} from 'native-base';

export default class SearchBody extends Component {
  render() {
    var pokemon = this.props.data;
    if(pokemon.detail === "Not found."){
      return(
        <Text style = {styles.error}>Hey please enter correct poke</Text>
      )
    }
    else{
    return (
      <ImageBackground
         style = {styles.imageBackground}
         source ={{uri:"http://pokemongolive.com/img/posts/raids_loading.png"}}>
      <ScrollView style={styles.container}>
        <Text style = {styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
        <View styele ={styles.viewStyle}>
          <Image
            source={{uri:pokemon.sprites.front_default}}
            style={styles.img}
            />
        </View>
        <ListItem itemDivider>
          <Text style = {{fontWeight:'bold'}}> Size</Text>
        </ListItem>
        <ListItem>
          <Text style = {{fontWeight:'bold'}}>Weight - {pokemon.weight}kg</Text>
        </ListItem>
         <ListItem>
            <Text style = {{fontWeight:'bold'}}>height - {pokemon.height/10}m</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text style = {{fontWeight:'bold'}}>Abilities</Text>
          </ListItem>
          <List
            dataArray={pokemon.abilities}
            renderRow={(item)=>
              <ListItem itemDivider>
                <Text>{item.ability.name}</Text>
               </ListItem>
             }
            >
          </List>
      </ScrollView>
    </ImageBackground>
    );
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error:{
    flex:1,
  },
  viewStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  img:{
    height:200,
    width:200,
    justifyContent: 'center',
    alignItems: "center",
    marginLeft: 100,
  },
  header:{
    fontSize: 30,
    color:"#e74c3c",
    textAlign: 'center',
  },
  imageBackground:{
    flex:1,
    height:Dimensions.get("window").height,
    width:Dimensions.get("window").width,
  }
});
