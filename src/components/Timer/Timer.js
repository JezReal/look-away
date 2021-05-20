import StatusBar from "../StatusBar/StatusBar";
import {format} from "../../util/TimeFormatter";
import Button from "../Button/Button";
import {useState} from "react";
import "./Timer.css"

const Timer = () => {
    const [status, setStatus] = useState("work")
    const [buttonText, setButtonText] = useState("Start")
    const [timerCount, setTimerCount] = useState(1200000)
    const [isTimerRunning, setIsTimerRunning] = useState(false)

    const changeText = () => {
        if (buttonText === "Start") {
            setButtonText("Stop")
        } else {
            setButtonText("Start")
        }
    }

    const toggleTimer = () => {
        let timer

        // if (!isTimerRunning) {
        //     timer = setInterval(() => {
        //         if (timerCount > 0) {
        //             setTimerCount(timerCount => timerCount - 1000)
        //         } else {
        //             clearInterval(timer)
        //             setTimerCount(0)
        //         }
        //     }, 1000)
        //     setIsTimerRunning(true)
        // } else {
        //     timer = null
        //     setTimerCount(1200000)
        //     setIsTimerRunning(false)
        // }
    }
    return (
        <>
            <StatusBar status={status}/>

            <div id="timer">
                <h3 id="timer-text">
                    {format(timerCount).minutes}:{format(timerCount).seconds}
                </h3>
            </div>

            <Button onClick={() => {
                changeText()
                toggleTimer()
            }
            } text={buttonText}/>
        </>
    )
}

export default Timer