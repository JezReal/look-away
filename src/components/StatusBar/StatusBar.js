import "./StatusBar.css"

const StatusBar = props => {

    const defaultStatus = {
        color: "white"
    }

    const activeStatus = {
        backgroundColor: "white",
        color: "#5DC0DB"
    }

    if (props.status === "work") {
        return (
            <div id="status-container">
                <div id="work" style={activeStatus}>
                    <p>Work</p>
                </div>

                <div id="look-away" style={defaultStatus}>
                    <p>Look away</p>
                </div>
            </div>
        )
    }

    return <div id="status-container">
        <div id="work" style={defaultStatus}>
            <p>Work</p>
        </div>

        <div id="look-away" style={activeStatus}>
            <p>Look away</p>
        </div>
    </div>
}

export default StatusBar