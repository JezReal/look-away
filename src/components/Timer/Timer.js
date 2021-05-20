import StatusBar from "../StatusBar/StatusBar";
import Button from "../Button/Button";
import {useEffect, useRef, useState} from "react";
import "./Timer.css"
import {format} from "../../util/TimeFormatter";

const Timer = () => {
    const [status, setStatus] = useState("work")
    const [buttonText, setButtonText] = useState("Stop")
    const [timerCount, setTimerCount] = useState(8000)
    const [paused, setPaused] = useState(false)
    const [over, setOver] = useState(false)

    const tick = () => {
        if (paused || over) {
            return
        }

        if (timerCount === 0) {
            setStatus("look-away")
            setTimerCount(20000)
            setOver(true)
        } else {
            setTimerCount(timerCount => timerCount - 1000)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => tick(), 1000)
        return () => clearInterval(timer)
    })

    const handleButtonClick = () => {
        setPaused(!paused)

        if (buttonText === "Start") {
            setButtonText("Stop")
        } else {
            setButtonText("Start")
        }
    }

    return (
        <>
            <StatusBar status={status}/>

            <div id="timer">
                <h3 id="timer-text">
                    {format(timerCount).minutes}:{format(timerCount).seconds}
                </h3>
            </div>

            <Button text={buttonText} onClick={
                handleButtonClick
            }/>
        </>
    )
}

export default Timer