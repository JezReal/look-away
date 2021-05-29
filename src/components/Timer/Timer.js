import StatusBar from "../StatusBar/StatusBar";
import Button from "../Button/Button";
import {useEffect, useState} from "react";
import "./Timer.css"
import {format} from "../../util/TimeFormatter";

const Timer = () => {
    const twentyMinutes = 1200000
    const twentySeconds = 20000

    const [status, setStatus] = useState("work")
    const [buttonText, setButtonText] = useState("Start")
    const [timerCount, setTimerCount] = useState(twentyMinutes)
    const [paused, setPaused] = useState(true)
    const [over, setOver] = useState(false)

    const tick = () => {
        if (paused || over) {
            return
        }

        if (timerCount === 0 && status === "work") {
            setOver(true)
            setStatus("look-away")
            setTimerCount(twentySeconds)
            setOver(false)
        } else if (timerCount === 0 && status === "look-away") {
            setOver(true)
            setStatus("work")
            setTimerCount(twentyMinutes)
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