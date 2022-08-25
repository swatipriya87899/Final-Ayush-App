import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import DoctorDetails from '../components/DoctorDetails';
import Header from '../components/Header';
import Searchbox from '../components/Searchbox';

const ChoseDoctor = () => {
  const doctor_details = [
    {
      name: 'Dr. S Ramanathan',
      specialist: 'Cardiologist',
    },
    {
      name: 'Dr. S Ramanathan',
      specialist: 'Urologist',
    },
    {
      name: 'Dr. S Ramanathan',
      specialist: 'Cardiologist',
    },
    {
      name: 'Dr. S Ramanathan',
      specialist: 'Cardiologist',
    },
  ];

  return (
    <View>
      <Header></Header>
      <Searchbox></Searchbox>
      <Text style={styles.heading}>Select a Doctor</Text>

      {/* Doctor Details */}
      <FlatList
        contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        data={doctor_details}
        renderItem={({item}) => (
          <DoctorDetails
            name={item.name}
            specialist={item.specialist}
            showMore="false"></DoctorDetails>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: '#064635',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 30,
  },
});

export default ChoseDoctor;
