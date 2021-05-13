export const format = (timeToFormat) => {
    const minuteToMillis = 60000
    const secondToMillis = 1000

    let minutes = Math.floor(timeToFormat / minuteToMillis)
    let seconds = (timeToFormat % minuteToMillis) / secondToMillis

    //TODO: pad single digits with zeros

    let time = {
        "minutes": minutes,
        "seconds": seconds
    }

    return time
}