import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Tile({ first_name, last_name, age }) {

  // Do not render if no data
  if (!first_name && !last_name && !age) {
    return null;
  }

  return (
        <View style={styles.container}>
            <Text style={styles.text}>
              First Name: {first_name}{"\n"}
              Last Name: {last_name}{"\n"}
              Age: {age}
            </Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        paddingVertical: 10
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
    }
})