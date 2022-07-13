import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import {deleteContact} from '../redux/contactSlice';
import { useSelector,useDispatch } from 'react-redux';
import SearchBar from '../components/searchBar';

const indexScreen= function({navigation}) {
    const value = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const [term,setTerm] = useState("");
    const [filteredValue, setFilteredValue] = useState([...value]);

    const searchFilter = (text) =>{
        setTerm(text);
        if (term !==""){
            const result = value.filter((item) => {
                return item.name.toLowerCase().includes(term.toLowerCase())
            });
            setFilteredValue(result);

        }else if (term === ""){
            setFilteredValue([...value]);
        }
        
    }

    return(
        <View>
            <SearchBar
                term= {term}
                onTermChange = {newTerm => searchFilter(newTerm)}
            />
            <Text>{term}</Text>
            <FlatList
                data= {term.length < 1 ? value:filteredValue}
                keyExtrator = {(contact) => contact.id}

                renderItem = {({item}) => {
                    return(
                        <TouchableOpacity onPress = {() => navigation.navigate('Show', {id: item.id})}>
                            <View style ={styles.row}>
                                <Text style = {styles.title}> {item.name}</Text>
                                <TouchableOpacity onPress ={() => dispatch(deleteContact(item.id))} testID="deleteIcon">
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

