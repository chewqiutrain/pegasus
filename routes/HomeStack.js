import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import TestPage from '../screens/TestPage';
import QuestionPrototype from '../screens/QuestionPrototype';
import QuestionsScreen from '../screens/QuestionsScreen';

const questionPageDefaultParams = { 
  activeQuestionId: 0,
  allQuestions: [
    {
      id: 0,
      questionText: "Default question text",
      answerOptions: {
        a: "default answer a",
        b: "default answer b",
        c: "default answer c",
        d: "default answer d"
      }
    }
  ]
}


const Stack = createNativeStackNavigator();
export default function Navigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="TestPage" component={TestPage}/>
        <Stack.Screen name="QuestionPage" component={QuestionPrototype} 
          initialParams={questionPageDefaultParams}/>
        <Stack.Screen name="QuestionsScreen" component={QuestionsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// export default createAppContainer(HomeStack);