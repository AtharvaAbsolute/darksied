import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'http://quantilus.com/wp-content/uploads/2018/01/react.png'
    };
    return (
      <View>
        <Image source={pic} style={{width: 150, height: 150,marginLeft: 105}}/>
        <Text style={styles.text}>Idealution</Text>
        <Text style={stysles.text}>The Solution To Every Problem</Text>
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9987B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#656565',
    fontSize: 20,
    
    fontFamily: 'monospace'
    
    
    
    
  }
});
