import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {deleteContact} from '../redux/contactSlice';
import { useSelector,useDispatch } from 'react-redux';
import searchBar from '../components/searchBar';

const indexScreen= function({navigation}) {
    const value = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    return(
        <View>
            <FlatList
                data= {value}
                keyExtrator = {(contact) => contact.id}

                renderItem = {({item}) => {
                    return(
                        <TouchableOpacity onPress = {() => navigation.navigate('Show', {id: item.id})}>
                            <View style ={styles.row}>
                                <Text style = {styles.title}> {item.name}</Text>
                                <TouchableOpacity onPress ={() => dispatch(deleteContact(item.id))}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}

            />
        </View>
    )
}

indexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name = 'plus' size = {30}/>
            </TouchableOpacity>
        ),

    }
};



const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'grey'


    },

    title:{
        fontSize:18
    },
    icon:
    {
        fontSize:20
    }
});


export default indexScreen;

