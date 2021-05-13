const Button = props => {
    const startButton = {
        backgroundColor: "white",
        color: "#5DC0DB",
    }

    const stopButton = {
        backgroundColor: "#5DC0DB",
        color: "white"
    }

    if (props.text === "Start") {
        return (
            <button onClick={props.onClick} style={startButton}>
                {props.text}
            </button>
        )
    }

    return (
        <button onClick={props.onClick} style={stopButton}>
            Stop
        </button>
    )
}

export default Button