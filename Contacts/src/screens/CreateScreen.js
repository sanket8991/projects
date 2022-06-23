import React, {useContext, useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import { Context } from '../context/ContactContext';
import Form from '../components/Form';
import {addContact,editContact,deleteContact} from '../redux/contactSlice';
import { useSelector,useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

const CreateScreen = function({navigation}){
    const dispatch = useDispatch();

    return(
        <Form onSubmit = {(name,contact,email) => {
            dispatch(addContact({id:nanoid(), name:name, contact:contact,email:email}))
        }}/>
 
    )
};


const styles = StyleSheet.create({});

export default CreateScreen;

// () => navigation.navigate('Index')