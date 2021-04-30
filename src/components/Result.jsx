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
                {history.location.state.questions.map((el, i) => <Table question={el.question} correct={el.choices[el.answer]} answer={el.choices[history.location.state.answers[i]]} />)}
            </div>
        </div>
    )
}