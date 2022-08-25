 import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';

  const data = [
    { label: 'Ayurveda', value: '1' },
    { label: 'Yoga', value: '2' },
    { label: 'Naturopathy', value: '3' },
    { label: 'Unani', value: '4' },
    { label: 'Siddha', value: '5' },
    { label: 'Homeopathy', value: '6' }
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    return (
      <View style={styles.container}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: '#064635' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Filter Hospitals..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });