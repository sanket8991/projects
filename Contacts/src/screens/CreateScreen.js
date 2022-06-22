import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { Context } from '../context/ContactContext';
import Form from '../components/Form';

const CreateScreen = function({navigation}){
    const {addContact} = useContext(Context);
    return(
        <Form onSubmit = {(name,contact,email) => {
            addContact(name,contact,email, () => navigation.navigate('Index'))
        }}/>
 
    )
};


const styles = StyleSheet.create({});

export default CreateScreen;

