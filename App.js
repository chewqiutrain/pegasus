import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MyButton from './shared/MyButton';
import Tile from './shared/Tile';
import axios from 'axios';
import Navigator from './routes/HomeStack';


export default function App() {
  return (
    <View style={styles.view}>
      <Navigator/>
    </View>
  );
}

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    backgroundColor: "tomato",
    // alignItems: "center",
    flex: 1
  },
  text: {
    fontSize: 55,
    fontWeight: "bold",
    marginTop: 50,
    flex: 1,
    textShadowColor: "lime",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 1,
    shadowRadius: 1
  },
  view2: {
    backgroundColor: "mediumvioletred",
    flex: 1,
    paddingHorizontal: 20,
  },
  view3: {
    backgroundColor: "mediumslateblue",
    flex: 1
  },
  view4: {
    backgroundColor: "sienna",
    flex: 1
  }
});
