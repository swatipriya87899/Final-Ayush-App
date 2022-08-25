import React from 'react';
import {View} from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Searchbox from '../components/Searchbox';
import Slot from '../components/Slot';

const AvailableSlot = () => {
  const slots = [
    {
      timing: '10.30 AM',
    },
    {
      timing: '11.30 AM',
    },
    {
      timing: '12.30 AM',
    },
    {
      timing: '10.30 AM',
    },
  ];
  return (
    <View>
      <Header />
      <Searchbox />
      <Heading title="Available Slots"></Heading>
      <Slot slots={slots} date="Monday, 26 Aug 2022"></Slot>
      <Slot slots={slots} date="Monday, 26 Aug 2022"></Slot>
      {/* Button For Schedule Appointment */}
      <Button
        title="Schedule Appointment"
        button_style={{
          backgroundColor: 'rgba(249, 208, 38, 0.98)',
          width: '80%',
        }}></Button>
    </View>
  );
};

export default AvailableSlot;
