import './App.css'
import quizQuestions from './quizQuestions'
import QuestionCard from './QuestionCard'
import { useState } from 'react'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [score, setScore] = useState<number>(0)
  const [questionAnswered, setQuestionAnswered] = useState<boolean>(false)

  const getSelected = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    setSelectedAnswer((e.target as HTMLInputElement).value)
  }

  const checkAnswer = () => {
    // Check if the answer is not selected
    if(selectedAnswer == '' || selectedAnswer == null || selectedAnswer == undefined){
      // setQuestionAnswered to true
      setQuestionAnswered(true)
    }else{
      // setQuestionAnswered to false
      setQuestionAnswered(false)
      // Grab the correctAnswer from the quizQuestions
      let correctAnswer: string = quizQuestions[currentQuestion].answer

      // Check if selectedAnswer is equal to the correctAnswer
      if(selectedAnswer == correctAnswer){
      setScore(score + 1)
    }

      // Go to the next question
      setCurrentQuestion(currentQuestion + 1)

      // Grab all inputs
      const inputs = document.querySelectorAll('.question input')

      // Uncheck all the inputs
      inputs.forEach(item => item.checked = false)
    }
  }

  return (
    <div className='app'>
      {questionAnswered ? <h2 className='notAnswered'>Please Select an answer</h2> : ''}
      {currentQuestion <= 4 ? <QuestionCard quizQuestions={quizQuestions} currentQuestion={currentQuestion} getSelected={getSelected} checkAnswer={checkAnswer} /> : 
      <div className='finalScore'>
        <p>Final Score {score} / 5</p>
        <button onClick={() => location.reload()}>Restart</button>
      </div>}
    </div>
  )
}

export default App
