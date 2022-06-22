import React, {useReducer} from 'react';
import createDataContext from './createDataContext';

const reducer = function(state, action){
    switch(action.type){
        case 'edit_contact':
            return state.map((contact) => {
                if (contact.id === action.payload.id){
                    return action.payload;
                } else{
                    return contact;
                }

            });

        case 'delete_contact':
            return state.filter((contact) => contact.id !== action.payload);

        case 'add_contact':
            return [...state, {id: Math.floor(Math.random() * 99999), name: action.payload.name, contact: action.payload.contact, email:action.payload.email}]
        
        default:
            return state;
    }

};

const addContact = function(dispatch){
    return (name, contact,email, callback) =>{
        dispatch({type: 'add_contact', payload: {name: name, contact:contact, email:email}});
        
        if (callback){
            callback();
        }

    }

};

const deleteContact = function(dispatch){
    return (id) => {dispatch({type: 'delete_contact', payload: id})}
}

const editContact = function(dispatch){
    return (id, name, contact,email, callback) =>
    {
        dispatch({type:'edit_contact', payload:{id: id, name: name, contact: contact,email:email}});
        
        if (callback){
            callback();
        }

    }
};

export const {Context, Provider} = createDataContext(
    reducer,
    {addContact:addContact, deleteContact:deleteContact, editContact:editContact}, 
    [{id: 1,name:"john doe", contact:"123456789", email:"john@email.com"}]
);


