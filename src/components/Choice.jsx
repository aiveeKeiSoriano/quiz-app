import { useState } from 'react';
import Confetti from 'react-dom-confetti';


export default function Choice(props) {
    let [background, setBackground] = useState('transparent')
    let [confetti, setConfetti] = useState(false)

    let clicked = () => {
        if (props.answered) return
        else {    
            console.log('clicked')
            props.click(props.index)
            if (props.answer) {
                setBackground('green')
                setConfetti(true)
            }
            else {
                setBackground('red')
            }
        }
    }

    return (
        <div className='choice'>
            <button onClick={() => clicked()} style={{ backgroundColor: background }}>{props.text}</button>
            <Confetti active={confetti}/>
        </div>
    )
}