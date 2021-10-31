import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from '../shared/MyButton';
import Tile from '../shared/Tile';
import axios from 'axios';

export default function TestPage() {
  const endpoint = "http://127.0.0.1:5000/get_payload"

  const [backEndData, setBackEndData] = useState({});
  
  const getData = () => {
    axios.get(endpoint)
      .then(res => {
        console.log(res.data);
        setBackEndData(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch backend data!");
      })
  }

  const checkBackEndData = () => {
    const isEmpty = Object.keys(backEndData).length === 0
    if (isEmpty) {
      console.log('backEndData empty')
    } else {
      console.log(`backEndData: ${JSON.stringify(backEndData)}`)
    }
  }

  const clearBackEndData = () => {
    setBackEndData({})
  }



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyButton
        pressHandler={getData}
        title="Get Backend Data"
        backgroundColor="green"
      />
      <MyButton
        pressHandler={checkBackEndData}
        title="Check Backend Data"
        backgroundColor="salmon"
      />
      <MyButton
        pressHandler={clearBackEndData}
        title="Clear Backend Data"
        backgroundColor="red"
      />
      <Tile
        first_name={backEndData.first_name}
        last_name={backEndData.last_name}
        age={backEndData.age}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
