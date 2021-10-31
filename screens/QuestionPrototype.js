import React from 'react';
import { Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// TODO: Does it make sense for button to be shared ? If so, how to best organise? 
function BottomBarButton({ onPress, title }) {
  const buttonStyles = StyleSheet.create({
    button: {
      borderRadius: 8,
      backgroundColor: "#FF8900",
      width: "20%",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: "2%",
      marginHorizontal: "1%"
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold"
    }
  })
  
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onPress}>
      <Text style={buttonStyles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default function QuestionPrototype({ route, navigation }) {
  
  const { activeQuestionId, allQuestions } = route.params 
  
  const currentQuestion = allQuestions.find(q => q.id === activeQuestionId)
  
  const { id, questionText, answerOptions } = currentQuestion 

  const isLastQuestion = activeQuestionId === allQuestions.length - 1 
  const isFirstQuestion = activeQuestionId === 0 

  
  
  const renderOption = (text) => { 
    return (
      <View style={styles.optionBox}>
        <Text style={styles.optionText}>{text}</Text>
      </View>
    );
  }

  const previousQuestionPress = () => {
    console.log(`Pressed go to previous question!`)
    navigation.navigate("QuestionPage", { activeQuestionId: activeQuestionId - 1, allQuestions })
  }

  const nextQuestionPress = () => {
    console.log(`Pressed go to next question!`)
    navigation.navigate("QuestionPage", { activeQuestionId: activeQuestionId + 1, allQuestions })
  }

  const clearOptionsSelectedPress = () => {
    console.log(`Clearing selected options!`)
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Question: {questionText}</Text>
      </View>

      <View style={styles.allOptionsBox}>
        {renderOption(answerOptions["a"])}
        {renderOption(answerOptions["b"])}
        {renderOption(answerOptions["c"])}
        {renderOption(answerOptions["d"])}
      </View>

      <View style={styles.bottomBar}>
        {!isFirstQuestion && BottomBarButton({ onPress: previousQuestionPress, title: "Previous Question" })}
        {BottomBarButton({ onPress: clearOptionsSelectedPress, title: "Clear Selected" })}
        {!isLastQuestion && BottomBarButton({ onPress: nextQuestionPress, title: "Next Question" })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#303F9F",
    flexDirection: "column",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  questionBox: {
    backgroundColor: "#5D00FF",
    width: "100%",
    padding: "1%",
    alignItems: "flex-start",
    flex: 6
  },
  questionText: {
    fontSize: 22
  },
  allOptionsBox: {
    backgroundColor: "#2B9CBF",
    flex: 6,
    flexDirection: "column",
    justifyContent: "space-around",
    width: "100%"
  },
  optionBox: {
    backgroundColor: "#008DFF",
    margin: "1%",
    height: "20%"
  },
  optionText: {
    fontSize: 18
  },
  bottomBar: {
    backgroundColor: "#BF3C2B",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
})