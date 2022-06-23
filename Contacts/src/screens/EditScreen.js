import React, {useContext, useState} from 'react';

import {View, StyleSheet, Text, TextInput, Button} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import { editContact } from '../redux/contactSlice';
import Form from '../components/Form';

const EditScreen = function({navigation}) {

    const id = navigation.getParam('id');
    const value = useSelector((state) => state.contacts);
    const data = value.find((contact) => contact.id === navigation.getParam('id'));
    const dispatch = useDispatch();
    return(
        <Form 
        initialValues = {{name: data.name, contact: data.contact, email:data.email}}
        
        onSubmit = {(name,contact,email) => {
            dispatch(editContact({id, name,contact,email}));

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