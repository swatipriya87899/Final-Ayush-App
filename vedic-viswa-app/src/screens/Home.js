import React, { useState,useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';
import Card_Group from '../components/Card_Group';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';
import GetLocationModal from '../components/GetLocationModal';
import { useSelector, useDispatch } from 'react-redux';
import GetLocation from 'react-native-get-location';
import DropdownComponent from '../components/DropdownComponent';

const Home = () => {
  

  const [location, setLocation] = useState({ "latitude":25.5941, "longitude": 85.1376 })

  const fetchLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setLocation({ "latitude": location.latitude, "longitude": location.longitude });
      })
      .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
      })
  }

  useEffect(() => {
    fetchLocation();
  }, [])

  const [modalVisible, setModalVisible] = useState(false);

  //Change Location Modal
  const changeLocationHandler = () => {
    setModalVisible(true);
  };

  //function to set modalVisible false
  const closeTheModal = () => {
    setModalVisible(false);
  }

  //Carousel Image Of Home Page
  const carouselImages = [
    {
      image: require('./../assests/images/Carousel1.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: require('./../assests/images/Carousel2.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
    {
      image: require('./../assests/images/Carousel1.png'),
      desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
  ];
  
  return (
    <View style={styles.home}>
      <Header location={location} changeLocation={changeLocationHandler}></Header>
      <ScrollView>
        <View style={styles.margin}>
          <Searchbox></Searchbox>
        </View>
        <Carousel
          image={carouselImages}
          component={<Preview />}
          width={300}></Carousel>

           {/* Filter Hospitals */}
           <DropdownComponent></DropdownComponent>
        <View style={[styles.card_group, { paddingBottom: 150 }]}>
          <Card_Group location={location}/>
        </View>
      </ScrollView>
      <GetLocationModal fetchLocation={fetchLocation} setModalVisible={setModalVisible} setLocation={setLocation} closeModal={closeTheModal} visibility={modalVisible} ></GetLocationModal>
    </View>
  );
};

const styles = StyleSheet.create({
  home:{
    backgroundColor:"#ffffff"
  },
  card_group: {
    alignItems: 'center',
  },
  margin: {
    marginTop: 20,
  },
});

export default Home;
