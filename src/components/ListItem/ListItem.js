import React from 'react';
import {StyleSheet,Text, View, TouchableOpacity, Image,
    TouchableWithoutFeedback} from 'react-native';


const listItem =(props)=>(
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.listItem} >
        <Image source={props.placeImage} style={styles.placeImage} />
         <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    listItem:{
        width: '100%',
        marginBottom: 5,
        padding:10,
        backgroundColor: 'grey',
        flexDirection: 'row',
        alignItems: 'center'
    },
    placeImage:{
        marginRight: 8,
        height: 60,
        width: 60,
    }
});

export default listItem;
