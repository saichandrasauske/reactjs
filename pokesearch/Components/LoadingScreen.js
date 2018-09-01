import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{uri:"https://media.tenor.com/images/39d6060576a516f1dd437eafccafbdb1/tenor.gif"}}
          style={styles.imgloader}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgloader:{
    width:400,
    height:400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
