import StatusBar from "../StatusBar/StatusBar";
import Button from "../Button/Button";
import {useEffect, useState} from "react";
import "./Timer.css"
import {format} from "../../util/TimeFormatter";

const Timer = () => {
    const [status, setStatus] = useState("work")
    const [buttonText, setButtonText] = useState("Stop")
    const [timerCount, setTimerCount] = useState(40000)
    const [paused, setPaused] = useState(false)
    const [over, setOver] = useState(false)

    const tick = () => {
        if (paused || over) {
            return
        }

        if (timerCount === 21000) {
            setStatus("look-away")
            setTimerCount(timerCount => timerCount - 1000)
        } else if (timerCount === 0) {
            setOver(true)
            setStatus("work")
            setTimerCount(40000)
            setOver(false)
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