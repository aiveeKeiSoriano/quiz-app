import { useState } from 'react';
import Confetti from 'react-dom-confetti';


export default function Choice(props) {
    let [background, setBackground] = useState('transparent')
    let [confetti, setConfetti] = useState(false)
    let clicked = () => {
        if (props.click(props.index)) {
            if (props.answer) {
                setBackground('green')
                setConfetti(true)
            }
            else setBackground('red')
        }
    }

    return (
        <div>
            <button onClick={clicked} style={{ backgroundColor: background }}>{props.text}</button>
            <Confetti active={confetti}/>
        </div>
    )
}