import { useState } from 'react'
import Question from './Question'

export default function QuizApp(props) {
    let questions = [
        {
            question: "What if this is question 1?",
            choices: ["No", "Not this one", "This is the answer", "Too far"],
            answer: 2
        },
        {
            question: 'Given the second question, what is the second answer?',
            choices: ['Yes', 'No', 'Noer', 'Noest'],
            answer: 0
        },
        {
            question: "True or False, this is the third question",
            choices: ['No', 'Yes', 'Yes but red', 'Lava'],
            answer: 1
        },
        {
            question: "Choose the correct answer from the choices below",
            choices: ["correct answer", "corect answer", "correct anser", "crectansaurus rex"],
            answer: 0
        }
    ]

    let [qNum, setQNum] = useState(0)
    let [score, setScore] = useState(0)
    let [choiceSelected, setChoiceSelected] = useState(false)

    setTimeout(() => {
        if (qNum !== questions.length - 1) {
            setQNum(++qNum)
            setChoiceSelected(false)
        }
    }, 5000)

    let checkAnswer = (answer) => {
        if (!choiceSelected) {
            if (answer === questions[qNum].answer) {
                setScore(++score)
                setChoiceSelected(true)
                questions[qNum].selected = answer
            }
            return true
        }
        return false
    }

    return (
        <div className="quiz-app">
            <div className="score">Score: {score}</div>
            <Question question={questions[qNum].question} choices={questions[qNum].choices} click={checkAnswer} answer={questions[qNum].answer}/>
            <div className="timer"></div>
        </div>
    )
}