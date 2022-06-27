import React from 'react';
import { StyleSheet} from 'react-native';
import Form from '../components/Form';
import {addContact} from '../redux/contactSlice';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';

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
