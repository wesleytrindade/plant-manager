import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/core';

export function Confirmation() {
 
    const navigation = useNavigation();

    function handleConfirmation(){
        navigation.navigate('PlantSelect');
    }
 
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.content}>
                <Text style = {styles.emoji}>
                😄
                </Text>

                <Text style = {styles.title}>
                    Tudo certo!
                </Text>
                <Text style = {styles.subtitle}>
                    Agora vamos começar a cuidar das suas plantas!
                  
                </Text>

                <View style = {styles.footer}>
                <Button title="Começar" onPress = {handleConfirmation} />
            </View>
        </View>

           

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    title:{
        fontSize:22,
        fontFamily: fonts.heading,
        textAlign:'center',
        color: colors.heading,
        lineHeight:38,
        marginTop:15

    },

    subtitle:{
        fontSize:17,
        fontFamily: fonts.text,
        textAlign:'center',
        color: colors.heading,
        paddingHorizontal:10
 
    },
    content:{
        flex:1,
        justifyContent:'center',
        width:'100%',
        padding:30
    },

    emoji:{
        fontSize:78,
        textAlign:'center'
    },

    footer:{
        width: '100%',
        paddingHorizontal:50,
        marginTop:20
    }
})