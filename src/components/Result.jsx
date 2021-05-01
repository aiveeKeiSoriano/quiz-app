// import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import Table from './Table'

export default function Result(props) {
    let history = useHistory()
    console.log(history.location.state.answers, 'here')
    return (
        <div className="resultPage">
            <div className="score">Total Score: {history.location.state.score}</div>
            <div className="result">
                <div style={{ fontWeight: '600', letterSpacing: '2px', backgroundColor: 'rgba(0, 0, 0, .1)' }} className="resultQ">
                    <p>Questions</p>
                    <p>Correct Answers</p>
                    <p>Your Answers</p>
                </div>
                {history.location.state.questions.map((el, i) => <Table question={el.question} correct={el.choices[el.answer]} answer={el.choices[history.location.state.answers[i]]} />)}
            </div>
        </div>
    )
}