import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
//import placeImage from './src/assets/41C7MPSongL.jpg';
//import placeImage from './src/assets/Galway.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component{
  state ={
      places: [],
      selectedPlace: null
  };
   //This function will allow user to add any input text
  placeAddedHandler=placeName=>{  
    this.setState(prevState =>{
      return {
        places: prevState.places.concat({
          key: Math.random(), 
          //name: placeName, // Store placeName in name property
          //image: placeImage // Load image from local folder
          image: { // Load image from a website
          uri: 'https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/72721_10151548638648331_530310441_n.jpg?_nc_cat=101&_nc_ht=scontent-dub4-1.xx&oh=ad61c49fd9816ae5982fb1842e061629&oe=5D4E26EA'
          }
        })
      };
    });
  };
  //Create place Deleted Handler and dont need argument
  placeDeletedHandler =()=>{ 
    this.setState(prevState =>{
      return {
        places: prevState.places.filter(place => {
          return place.key !==prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };
modalClosedHandler =()=>{
    this.setState({
      selectedPlace: null
    });
  }
  //This is to store detail information to pass into <PlaceDetail> in view below
  placeSelectedHandler =  key =>{
    this.setState (prevState=> {
        return{
          selectedPlace: prevState.places.find(place =>{
            return place.key===key;
          })
        };
    })
  };  
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace ={this.state.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
          />
        <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList places={this.state.places} 
                // onItemDeleted ={this.placeDeletedHandler} // This is for delete an Item
                //onItemSelected ={this.placeDeletedHandler}// This is for delete an Item
                onItemSelected ={this.placeSelectedHandler}
      />
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
    backgroundColor: 'white',
  }
  
});
