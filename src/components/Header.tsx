import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import colors from '../../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import profile_file from '../../assets/profile_file.jpg';
import fonts from '../../styles/fonts';

export function Header() {

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>Wesley</Text>

            </View>


            <Image resizeMethod="scale" style={styles.profileImage} source={profile_file} />
           

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight()
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    greeting: {
        fontSize: 32,
        fontFamily: fonts.text,
        color: colors.heading
    },

    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 40
    }
})