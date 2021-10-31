import axios from 'axios';

function createQuestion(id) {
  return {
    id: id,
    questionText: `Question ${id.toString()}`,
    answerOptions: {
      a: `Question ${id.toString()} answer a`,
      b: `Question ${id.toString()} answer b`,
      c: `Question ${id.toString()} answer c`,
      d: `Question ${id.toString()} answer d`,
    }
  }
}


export default async function getData() {

  const numQuestions = 10
  const allQuestions = [...Array(numQuestions).keys()].map(createQuestion)

  return new Promise((resolve, reject) => resolve(allQuestions)
  )
}