import React from 'react'

interface QuestionCardTypes {
    question: string
    a: string
    b: string
    c: string
    d: string
    answer: string
}

interface QuestionCardProps {
    quizQuestions: QuestionCardTypes[]
    currentQuestion: number
    getSelected: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    checkAnswer: React.MouseEventHandler<HTMLButtonElement>
}

const QuestionCard = ({ quizQuestions, currentQuestion, getSelected, checkAnswer }: QuestionCardProps) => {

  return (
    <div className='questionCard'>
        <h2>{quizQuestions[currentQuestion].question}</h2>
        <div className="question">
            <input 
            id={quizQuestions[currentQuestion].a} 
            type="radio" 
            name='answer' 
            value={quizQuestions[currentQuestion].a} 
            onClick={(e) => getSelected(e)}
            />
            <label htmlFor="">
                {quizQuestions[currentQuestion].a}
            </label>
        </div>
        <div className="question">
            <input 
            id={quizQuestions[currentQuestion].b} 
            type="radio" 
            name='answer' 
            value={quizQuestions[currentQuestion].b}
            onClick={(e) => getSelected(e)} 
            />
            <label htmlFor="">
                {quizQuestions[currentQuestion].b}
            </label>
        </div>
        <div className="question">
            <input 
            id={quizQuestions[currentQuestion].c} 
            type="radio" 
            name='answer' 
            value={quizQuestions[currentQuestion].c}
            onClick={(e) => getSelected(e)}
            />
            <label htmlFor="">
                {quizQuestions[currentQuestion].c}
            </label>
        </div>
        <div className="question">
            <input 
            id={quizQuestions[currentQuestion].d} 
            type="radio" 
            name='answer' 
            value={quizQuestions[currentQuestion].d}
            onClick={(e) => getSelected(e)}
            />
            <label htmlFor="">
                {quizQuestions[currentQuestion].d}
            </label>
        </div>
        <div className="nextQuestion">
            <button onClick={checkAnswer}>Next</button>
        </div>
    </div>
  )
}

export default QuestionCard