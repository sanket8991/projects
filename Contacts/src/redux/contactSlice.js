import { createSlice } from '@reduxjs/toolkit';
const initialState = [{id: Math.floor(Math.random() * 99999),name:'john doe',contact:'123456789',email:'john@email.com'}]

const contactSlice = createSlice({
    name:'contacts',
    initialState: initialState,
    reducers:
    {
        addContact: (state,action) => {
            state.push({id:action.payload.id, name:action.payload.name, contact: action.payload.contact, email:action.payload.email})
        },
        deleteContact: (state,action) => {
            return state.filter((contact) => contact.id !== action.payload);
        },
        editContact: (state,action) => {
            for (const obj of state){
                if (obj.id === action.payload.id){
                    obj.name = action.payload.name;
                    obj.contact = action.payload.contact;
                    obj.email = action.payload.email;
                    break
                }
            }
        }

    }
});

export const {addContact,editContact,deleteContact} = contactSlice.actions;

export default contactSlice.reducer;
