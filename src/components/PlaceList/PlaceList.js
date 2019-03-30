import React from 'react';
import {ScrollView, FlatList, StyleSheet } from 'react-native';
import ListItem from '../ListItem/ListItem';


const placeList =props => {
    //const placesOutput = props.places.map((places, i) =>(// This does not need for FlastList
       
    return(
        <FlatList
        style={styles.listContainer}
// places is defined at data here because custom compornent at App is receiving places
        data ={props.places}
        renderItem ={(info)=>(
        <ListItem 
           placeName={info.item.name}
           placeImage={info.item.image} 
           //onItemPressed={()=> props.onItemDeleted(info.item.key)} // This is for delete an Item
           onItemPressed={()=> props.onItemSelected(info.item.key)}
            />   
        )}
        />
    );
};
    const styles =StyleSheet.create ({
        listContainer: {
            width: '100%'
        }
    });

export default placeList;