export const format = (timeToFormat) => {
    const minuteToMillis = 60000
    const secondToMillis = 1000

    let minutes = Math.floor(timeToFormat / minuteToMillis)
    let seconds = (timeToFormat % minuteToMillis) / secondToMillis

    if (minutes < 10) {
        minutes = `0${minutes}`
    }

    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    let time = {
        "minutes": minutes,
        "seconds": seconds
    }

    return time
}