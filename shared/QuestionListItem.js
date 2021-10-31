import React, { Component, useState } from 'react';
import { Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function QuestionListItem({ questionObj, allQuestions, navigation }) {

  const activeQuestionId = questionObj.id 

  const pressHandler = () => {
    console.log(`Question ${questionObj.id} pressed!`)
    const questionPageParams = {activeQuestionId, allQuestions}
    console.log(`questionPageParams: ${JSON.stringify(questionPageParams)}`)
    navigation.navigate("QuestionPage", questionPageParams)
  }
    

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

