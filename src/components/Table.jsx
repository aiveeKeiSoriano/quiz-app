export default function Table(props) {
    return (
        <div className="resultQ">
            <p>{props.question}</p>
            <p>{props.correct}</p>
            <p style={{backgroundColor: props.correct === props.answer ? 'green' : 'red'}}>{props.answer}</p>
        </div>
    )
}