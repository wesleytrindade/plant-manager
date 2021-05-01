import React from 'react';
import { 
     Image,
     StyleSheet, 
     Text, 
     TouchableOpacity, 
     SafeAreaView,
     Dimensions } 
from 'react-native';
import {Feather} from '@expo/vector-icons';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import wateringTag from '../assets/watering.png';
import { useNavigation } from '@react-navigation/core';


export function Welcome() {

    const navigation = useNavigation();

    
    function handleStart(){
        navigation.navigate("UserIdentification");
    }
    return (
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.title}>Gerencie{'\n'} suas plantas{'\n'} de forma fácil</Text>
            <Image style = {styles.image} resizeMode='contain' source={wateringTag}></Image>
            <Text style = {styles.subtitle}>Não esqueça mais de regar suas plantas
            Nós cuidamos de lembrar você sempre que precisar.
             </Text>

            <TouchableOpacity style = {styles.button} activeOpacity = {0.7} onPress = {handleStart}> 
                <Text style = {styles.buttonText}>
                    <Feather style = {styles.buttonIcon} name = "chevron-right"></Feather>
                 </Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around'
    },

    title:{
        fontSize:32,
        fontWeight:'bold',
        textAlign:'center',
        color:colors.heading,
        fontFamily:fonts.heading,
        marginTop:38

    },

    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:20,
        color:colors.heading

    },
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignContent:'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        width:56

    },

    buttonText:{
        color:colors.white,
        fontSize:32,
        textAlign:'center'
    },

    image:{
        height:Dimensions.get('window').width*0.7
    },

    buttonIcon:{
        fontSize:32,
        color:colors.white
    }
});