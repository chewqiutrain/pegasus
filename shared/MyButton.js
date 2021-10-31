import React from 'react';
import { Button, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function MyButton({ pressHandler, title, backgroundColor }) {
    const styles = StyleSheet.create({
        view: {
            backgroundColor: backgroundColor,
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 25,
            elevation: 8,
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 10,
            marginHorizontal: 5,
            marginVertical: 5
        },
        text: {
            fontSize: 18,
            fontWeight: "bold",
            color: "black"
        }
    })

    return (
        <TouchableOpacity  style={styles.view} onPress={pressHandler}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
     
}

