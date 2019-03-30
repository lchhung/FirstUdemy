/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, Button, View} from 'react-native';


export default class App extends Component{
  state ={
    placeName:'',
    places: []
  }
  // constructor(props){
  //   super(props);
  //   this.state={
  //     placeName:''
  //   }
  // }
  //Change something in the text
  placeNameChangeHandler =(val) => {
    this.setState({placeName: val
    });
  };
  //This function will allow user to add any input text
  placeSubmitHandler=()=>{
    if (this.state.placeName.trim()===""){
      return;// This return will not allow user to enter an empry space
    }
    this.setState(prevState =>{
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };   
  render() {
   const placesOutput = this.state.places.map((place, i) =>(
        <Text key={i}> {place}</Text>
   ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput 
        style={{borderColor: 'black',borderWidth: 1}}
        placeholder ="Nhập tên"
        value={this.state.placeName} 
        onChangeText={this.placeNameChangeHandler}
        />
        <Button 
          title ="Add" 
          style={styles.placeButton} 
          onPress={this.placeSubmitHandler}
          />
        </View>
        <View>
        {placesOutput}
        </View>  
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  inputContainer:{
    flex:1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  } ,
  placeInput:{
    width: '70%'
  },
  placeButton:{
    width:'30%'
  }
});
