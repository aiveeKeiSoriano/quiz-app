import Choice from './Choice'

export default function Question(props) {
    return (
        <div className="questionCard">
            <div className="question">{props.question}</div>
            <div className="choices">
                {props.choices.map((el, i) => props.answer === i ? <Choice text={el} click={props.click} index={i} answer={true} key={i + '' + props.qNum} /> : <Choice text={el} click={props.click} index={i} answer={false} key={i + '' + props.qNum}/>)}
            </div>
        </div>
    )
}