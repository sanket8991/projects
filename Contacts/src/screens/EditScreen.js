import React, {useContext, useState} from 'react';

import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

import { Context } from '../context/ContactContext';

import Form from '../components/Form';

const EditScreen = function({navigation}) {

    const id = navigation.getParam('id');

    const {state, editContact} = useContext(Context);

    const data = state.find((contact) => contact.id === navigation.getParam('id'));

    return(
        <Form 
        initialValues = {{name: data.name, contact: data.contact, email:data.email}}
        
        onSubmit = {(name,contact,email) => {
            editContact(id, name,contact,email, () => navigation.pop());

        }}
        />
    )

};


/*const styles = StyleSheet.create({
    label:{
        fontSize:20,
        marginBottom:10,
        marginLeft:5
    },

    input:{
        fontSize:18,
        borderWidth:1,
        borderColor: 'black',
        marginBottom:15,
        padding:5,
        margin:5

    }
});
*/
export default EditScreen;