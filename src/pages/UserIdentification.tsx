import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Button } from '../components/Button';

export function UserIdentification() {

    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();


    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleSubmit() {
        navigation.navigate("Confirmation");
    }

    function handleInputChange(value: string) {
        setIsFocused(!!value);
        setName(value);
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <SafeAreaView style={styles.container}>

                    <View style={styles.content}>

                        <View style={styles.form}>
                            <Text style={styles.emoji}>
                                {isFilled ? '😄' : '😃'}
                            </Text>

                            <Text style={styles.title}>
                                Como podemos{'\n'} chamar você?
                    </Text>
                            <TextInput
                                placeholder="Digite um nome"
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.green }
                                ]}
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange} />

                            <View style={styles.footer}>
                                <Button title="Confirmar" onPress={handleSubmit} />
                            </View>

                        </View>


                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44
    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.grey,
        color: colors.heading,
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
        width: '100%'
    },

    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20
    },

    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20

    }


});