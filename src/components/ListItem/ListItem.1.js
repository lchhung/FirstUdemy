import React from 'react';
import {StyleSheet,Text, View, Touchable} from 'react-native';


const listItem =(props)=>(
    <Touchable>
     <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
     </View>
    </Touchable>
);
const styles = StyleSheet.create({
    listItem:{
        width: '100%',
        marginBottom: 5,
        padding:10,
        backgroundColor: "grey"
    }
});

export default listItem;
