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
  const { id, questionText,  answerOptions } = route.params;

  console.log(`questionText: ${questionText} | answerOptions: ${JSON.stringify(answerOptions)}`)
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const renderOption = (text) => { 
    return (
      <View style={styles.optionBox}>
        <Text style={styles.optionText}>{text}</Text>
      </View>
    );
  }

  const previousQuestionPress = () => {
    console.log(`Pressed go to previous question!`)
  }

  const nextQuestionPress = () => {
    console.log(`Pressed go to next question!`)
  }

  const clearOptionsSelectedPress = () => {
    console.log(`Clearing selected options!`)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>Question: {questionText}</Text>
      </View>
      {/* <Text>Option A: {answerOptions["a"]}</Text>
      <Text>Option B: {answerOptions["b"]}</Text>
      <Text>Option C: {answerOptions["c"]}</Text>
      <Text>Option D: {answerOptions["d"]}</Text> */}
      <View style={styles.allOptionsBox}>
        {renderOption(answerOptions["a"])}
        {renderOption(answerOptions["b"])}
        {renderOption(answerOptions["c"])}
        {renderOption(answerOptions["d"])}
      </View>

      <View style={styles.bottomBar}>
        {BottomBarButton({ onPress: previousQuestionPress, title: "Previous Question" })}
        {BottomBarButton({ onPress: clearOptionsSelectedPress, title: "Clear Selected" })}
        {BottomBarButton({ onPress: nextQuestionPress, title: "Next Question" })}
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