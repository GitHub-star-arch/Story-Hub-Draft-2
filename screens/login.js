import React from 'react';
import {Text, View, StyleSheet, KeyboardAvoidingView, ToastAndroid, Image, TextInput} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import db from '../config.js';
import * as firebase from 'firebase';
export default class Login extends React.Component {
    render(){
        return(
            <View style={stylez.Searchsty}>
                <h1>Stoy Hub</h1>
                    <Text>Story Title</Text>
                <TextInput value="Story Name"/>
                    <Text>Author</Text>
                <TextInput value="Name"/>
                    <Text>Story</Text>
                <TextInput value="Story"/>
            </View>
        )
    }
}
const stylez = StyleSheet.create({
    Searchsty:{
        justifyContent:'center',
        backgroundColor:'green',
        alignText:'center',
        Textsize:'10',
        fontWeight:'5',
        Textcolor:'Red',
    }
})