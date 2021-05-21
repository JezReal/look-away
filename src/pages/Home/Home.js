import {Link} from "react-router-dom";
import Timer from "../../components/Timer/Timer";
import "./Home.css"

const Home = () => {
    return (
        <div id="app-container">
            <h1>Look away</h1>
            <hr/>

            <Timer/>

            <div id="footer">
                <Link to="/information" target="_blank" rel="noreferrer">Why do I need to look away?</Link>
            </div>
        </div>
    )
}

export default Home