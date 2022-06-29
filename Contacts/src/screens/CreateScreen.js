import React from 'react';
import { Alert, StyleSheet} from 'react-native';
import Form from '../components/Form';
import {addContact} from '../redux/contactSlice';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';

const CreateScreen = function({}){
    const dispatch = useDispatch();

    return(
        <Form onSubmit = {(name,contact,email) => {
            if (!name || !contact){
                Alert.alert('Alert','the name and contact fields cannot be empty');

            }else if (!Number.isInteger(Number(contact)) || Number(contact) < 0){
                Alert.alert('Alert','the contact should contain only numbers')

            }else{
                dispatch(addContact({id:nanoid(), name:name, contact:String(Number(contact)),email:email}));
                Alert.alert('Alert','the contact was saved successfully.')
            }
        
        }}/>

    )
};

const styles = StyleSheet.create({});

export default CreateScreen;
