import React,{useState} from 'react';
import { View, StyleSheet,TextInput,Text,Image } from 'react-native';
import  Icon from 'react-native-vector-icons/Ionicons';

const Searchbox = () => {
    const [input, setInput] = React.useState("");

    const onSearch = (value) => {
        setInput(value);
    }

  return (
    <View style={styles.searchboxContainer}>
        <TextInput style={styles.searchbox} placeholder="Search Hospitals, Treatments..." value={input} onChangeText={onSearch}></TextInput>
        <Icon name='ios-search-outline' size={30} color="rgba(0, 0, 0, 0.3)" style={styles.search_icon}/>
    </View>
  )
}

const styles = StyleSheet.create({
    searchboxContainer:{
        display:"flex",
        alignItems:"center"
    },

    searchbox:{
        backgroundColor: "rgba(221, 255, 188, 0.5)",
        textAlign:"center",
        justifyContent:'center',
        width:"85%",
        borderRadius: 8,
    },
    search_icon:{
        position:'absolute',
        right:60,
        top:6
    }
})

export default Searchbox