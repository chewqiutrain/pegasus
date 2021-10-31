import React, { Component, useState } from 'react';
import { Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function QuestionListItem({ questionObj, navigation }) {

  const initialWidth = Dimensions.get('window').width;
  const initialHeight = Dimensions.get('window').height;

  const [windowDimensions, setWindowDimensions] = useState({windowWidth: initialWidth, windowHeight: initialHeight});

  const pressHandler = () => {
    console.log(`Question ${questionObj.id} pressed!`)
    navigation.navigate("QuestionPage", questionObj)
  }
    
  // useEffect(() => {
  //   const { width, height } = Dimensions.get('window');
  //   setWindowDimensions({ windowWidth: width, windowHeight: height});
  // })

  const WINDOW_WIDTH_OFFSET = 50;
  const MARGIN_WIDTH = windowDimensions.windowWidth - WINDOW_WIDTH_OFFSET

  const styles = StyleSheet.create({
      container: {
          flexDirection: "row",
          backgroundColor: "lightblue",
          marginVertical: "1%",
          marginHorizontal: "1%",
          width: 750,
          height: 50,
          alignItems: "center",
          justifyContent: "flex-start",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 5
      },
      text: {
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "auto"
      }
  })


  return (
    <TouchableOpacity style={styles.container} onPress={pressHandler}>
      <Text style={styles.text}>
        Question: {questionObj.questionText}
      </Text> 
    </TouchableOpacity>
  )
}

