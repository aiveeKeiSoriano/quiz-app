import { useState } from 'react'
import { useHistory } from 'react-router'
import Question from './Question'

export default function QuizApp(props) {
    let history = useHistory()
    let questions = [
        {
            question: "Is this is the first question?",
            choices: ['Yes', 'No', 'Noer', 'Noest'],
            answer: 0
        },
        {
            question: 'Given the second question, what is the second answer?',
            choices: ["No", "Not this one", "This is the answer", "Too far"],
            answer: 2
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
    let [selected, setSelected] = useState(null)
    let [answers, setAnswers] = useState([])

    setTimeout(() => {
        if (qNum !== questions.length - 1) {
            setQNum(++qNum)
            setSelected(null)
            setWidth(100)
        }
        else {
            history.push({
                pathname: '/result',
                state: {
                    score: score,
                    questions: questions,
                    answers: answers
                }
            })
        }
    }, 5000)

    let checkAnswer = (answer) => {
        if (selected === null) {
            if (answer === questions[qNum].answer) {
                setScore(++score)
            }
            setSelected(answer)
            let copy = answers.slice()
            copy.push(answer)
            setAnswers(copy)
            return true
        }
        return false
    }
    let [width, setWidth] = useState(100)
    // setInterval(() => {
    //     console.log(width)
    //     if (width > 0) setWidth(width - 2)
    //     else setWidth(100)
    // }, 500)

    return (
        <div className="quiz-app">
            <div className="score">Score: {score}</div>
            <Question question={questions[qNum].question} choices={questions[qNum].choices} click={checkAnswer} answer={questions[qNum].answer} key={qNum} qNum={qNum}/>
            <div className="timer" style={{width: width + '%'}}></div>
        </div>
    )
}