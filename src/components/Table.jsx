export default function Table(props) {
    console.log(props)
    return (
        <div className="resultQ">
            <p>{props.question}</p>
            <p>{props.correct}</p>
            <p>{props.answer}</p>
        </div>
    )
}