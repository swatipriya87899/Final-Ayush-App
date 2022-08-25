import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Card from './Card';
import config from '../../config';
import { useSelector, useDispatch } from 'react-redux';
import {getNearbyHospitals} from './../redux/action'

const Card_Group = (props) => {

  const dispatch = useDispatch();

  const [hospitalsData, setHospitalsData] = useState([]);
  const [data, setData] = useState([])

  const {nearByHospital} = useSelector((store) => store.datas);

  useEffect(() => {
    fetch(`${config.Base_API_URL}/hospital/getNearbyHospitals`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "latitude": props.location.latitude,
        "longitude": props.location.longitude,
        "radius": 500,
        "mode": "D"
      })
    }).then((response) => {
      return response.json()
    }).then((data) => dispatch(getNearbyHospitals(data)))
  }, [props.location])

  const renderItem = ({ item }) => <Card name={item.details.hospitalName} image={ item.details.images[0]} city={item.details.contactInfo.address.city} status={item.status} distance={parseInt(item.location.distance) / 1000} id={item.details._id} phone={ item.details.phoneNumber} latitude={item.latitude} longitude={item.longitude}></Card>;

  return (
    <View>{console.log(nearByHospital)}{nearByHospital && <View><FlatList
      data={nearByHospital}
      renderItem={renderItem}
      keyExtractor={item => item.name}></FlatList>{console.log(nearByHospital,"nearby")}</View>}
      </View>
  );
};

const styles = StyleSheet.create({
});

export default Card_Group;
