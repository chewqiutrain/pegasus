import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text, StyleSheet, Button, FlatList } from 'react-native';
import MyButton from '../shared/MyButton';
import getData from '../api/ExercisesData';
import QuestionListItem from '../shared/QuestionListItem';


/* TODO:
    - Refresh button to pull data again
    - Resize list items on screen rotation
 */
export default function QuestionsScreen({ route, navigation }) {

  const [allQuestions, setAllQuestions] = useState([])

  const g = () => getData()
    .then(success => {
      setAllQuestions(success);
      console.log(`Data pulled success: ${success.length}`);
    })
    .catch(error => console.log(`An error occurred while retrieving questions`))


  useEffect(() => {
    if (allQuestions.length === 0) {
      g();
      console.log(`Data was pulled!`)
    }
  });


  const renderFlatListItem = ({ item }) => (<QuestionListItem questionObj={item} allQuestions={allQuestions} navigation={navigation}/>);

  
  return (
    <View style={style.container}>
      <FlatList
        data={allQuestions}
        renderItem={renderFlatListItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: 'maroon',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})