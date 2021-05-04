import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Choice from './Choice'

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
    let [answered, setAnswered] = useState(false)
    let [answers, setAnswers] = useState(new Array(questions.length).fill(false))
    let [first, setFirst] = useState(true)
    let [color, setColor] = useState('#68E32B')
    let [start, setStart] = useState(false)

    let checkAnswer = (answer) => {
        if (!answered) {
            setAnswered(true)
            let copy = answers.slice()
            copy[qNum] = answer
            setAnswers(copy)
            if (answer === questions[qNum].answer) {
                setScore(++score)
            }
        }
    }

    let nextQuestion = () => {
        if (qNum !== questions.length - 1) {
            setQNum(++qNum)
            setWidth(100)
            setColor('#68E32B')
        }
        else goToResult()
    }

    let goToResult = () => {
        console.log(answers)
        history.push({
            pathname: '/result',
            state: {
                score: score,
                questions: questions,
                answers: answers
            }
        })
    }

    let [width, setWidth] = useState(100)

    useEffect(() => {
        setAnswered(false)
    }, [qNum])

    useEffect(() => {
        if (!first) {
            setTimeout(() => nextQuestion(), 1500)
        }
        else setFirst(false)
        // eslint-disable-next-line
    }, [answers])

    useEffect(() => {
        let timer = setInterval(() => {
            if (start && !answered) setWidth((p) => --p)
        }, 60)
        return () => clearInterval(timer)
        // eslint-disable-next-line
    }, [qNum, start, answered])

    useEffect(() => {
        if (width < 0) nextQuestion()
        else if (width < 25) setColor('#E82725')
        else if (width < 45) setColor('#FF862B')
        else if (width < 65) setColor('#FEE645')
        else if (width < 80) setColor('#BFFD30')
        // eslint-disable-next-line
    }, [width])

    return (
        <div className='home'>
            {start &&
                <div className="quiz-app">
                    <div className="score">Score: {score}</div>
                    <div className="questionCard">
                        <div className="question">{questions[qNum].question}</div>
                        <div className="choices">
                            {questions[qNum].choices.map((el, i) => questions[qNum].answer === i ? <Choice text={el} click={checkAnswer} index={i} answered={answered} answer={true} key={i + '' + qNum} /> : <Choice text={el} click={checkAnswer} answered={answered} index={i} answer={false} key={i + '' + qNum} />)}
                        </div>
                    </div>
                    <div className="timer" key={qNum + 'timer'}>
                        <div className="upper"></div>
                        <div className="middle" style={{ width: width + '%', backgroundColor: color }}></div>
                        <div className="lower"></div>
                    </div>
                </div>}
            {!start &&
                <button className='start' onClick={() => setStart(true)}>Start Quiz</button>}
        </div>
    )
}