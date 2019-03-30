import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component {
  state ={
    placeName:'',
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
  placeSubmitHandler=()=>{
    if (this.state.placeName.trim()===""){
      return;// This return will not allow user to enter an empry space
    }
    this.props.onPlaceAdded (this.state.placeName);
  }; 
  /////////////////////
  
  /////////////////
    render(){
             return(
                <View style={styles.inputContainer}>
                <TextInput 
                  style={{borderColor: 'black',borderWidth: 5}}
                  placeholder ="Nhập tên"
                  value={this.state.placeName} 
                  onChangeText={this.placeNameChangeHandler}
                  style ={styles.placeInput}
                />
                <Button 
                  title ="Add" 
                  style={styles.placeButton} 
                  onPress={this.placeSubmitHandler}
                  />
                </View>
             );             
    }
}

///////////////////////////////////

////////////////////////////////////
const styles= StyleSheet.create({
    inputContainer:{
        //flex:1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      } ,
      placeInput:{
        width: '80%'
      },
      placeButton:{
        width:'30%'
      }
});
export default PlaceInput;