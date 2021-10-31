import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MyButton from '../shared/MyButton';

export default function Home({ navigation }) {
  const questionPageDefaultParams = {
    questionText: "Default question text",
    answerOptions: {
      a: "default answer a",
      b: "default answer b",
      c: "default answer c",
      d: "default answer d"
    }
  }
  const pressHandlerGoToAbout = () => {
    console.log("Button pressed to go to About")
    navigation.navigate("TestPage")
  }

  const pressHandlerGoBack = () => {
    console.log("Button pressed to go back")
    navigation.goBack()
  }

  const pressHandlerGoToAllQuestions = () => {
    console.log("Button pressed to go to Questions screen")
    navigation.navigate("QuestionsScreen")
  }

  const pressHandlerGoToQuestion = () => {
    navigation.navigate("QuestionPage", questionPageDefaultParams)
  }

  return (
    <View style={styles.homeView}>
      <Text>The Home Screen!</Text>
      <MyButton 
        title="Go to About page" 
        pressHandler={pressHandlerGoToAbout} 
        backgroundColor="royalblue" 
      />
      
      <MyButton title="Go Back" pressHandler={pressHandlerGoBack} backgroundColor="steelblue" />

      <MyButton 
        title="Go to Question page" 
        pressHandler={pressHandlerGoToQuestion} 
        backgroundColor="royalblue" 
      />
      
      <MyButton 
        title="Go to All Questions Screen" 
        pressHandler={pressHandlerGoToAllQuestions} 
        backgroundColor="royalblue" 
      />
    </View>
  )
}

const styles = StyleSheet.create({
    homeView: {
        backgroundColor: "#FCA843",
        flexDirection: "column",
        flex: 1
    }
})