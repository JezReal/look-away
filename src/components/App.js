import './App.css';
import Timer from "./Timer/Timer";

function App() {

    //set style depending on status (work or look  away)


    return (
        <div id="app-container">
            <h1>Look away</h1>
            <hr/>

            <Timer/>

            <div id="footer">
                <a href="https://www.google.com" target="_blank" rel="noreferrer">Why do I need to look away?</a>
            </div>
        </div>
    )
}

export default App;
