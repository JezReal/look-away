import './App.css';
import {useState} from "react";
import StatusBar from "./StatusBar/StatusBar";
import Button from "./Button/Button";
import {format} from "../util/TimeFormatter";

function App() {

    //set style depending on status (work or look  away)
    const [status, setStatus] = useState("work")
    const [buttonText, setButtonText] = useState("Start")
    const [timerCount, setTimerCount] = useState(1200000)

    const changeText = () => {
        if (buttonText === "Start") {
            setButtonText("Stop")
        } else {
            setButtonText("Start")
        }
    }

    const startTimer = () => {
        setInterval(() => {
            setTimerCount(timerCount => timerCount - 1000)
        }, 1000)
    }

    return (
        <div id="app-container">
            <h1>Look away</h1>
            <hr/>

            <StatusBar status={status}/>

            <div id="timer">
                <h3 id="timer-text">
                    {format(timerCount).minutes}:{format(timerCount).seconds}
                </h3>
            </div>

            {/*TODO: implement pause functionality to timer*/}
            <Button onClick={() => {
                changeText()
                startTimer()
            }
            } text={buttonText}/>

            {/*TODO: move stuff to separate components*/}
            <div id="footer">
                <a href="https://www.google.com" target="_blank" rel="noreferrer">Why do I need to look away?</a>
            </div>
        </div>
    )
}

export default App;
