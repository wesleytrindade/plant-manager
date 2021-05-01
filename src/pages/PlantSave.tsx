import React from 'react';
import { 
    View,
    StyleSheet,
    Alert,
    Text,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity 
} 
from 'react-native';
import { SvgFromUri } from 'react-native-svg';

export function SavePlant(){

    return(
       <>
       <ScrollView style = {styles.container}>
        <SvgFromUri
            uri=""
            height={150}
            width = {150} />

            <Text style ={styles.plantName}> </Text>
            <Text style = {styles.plantAbout}></Text>
       </ScrollView>

       <View style = {styles.controller}>
           <View style = {styles.tipContainer}>
               
           </View>
       </View>
       </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    plantName:{},
    plantAbout:{}
})