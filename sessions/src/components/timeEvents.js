
const TimeLeft = ({counter, classes}) => {
    const seconds = counter % 60;
    const minutes = Math.floor(counter / 60)
    return (
        <>
            <h1 className={classes}>
                {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
            </h1>
        </>
    )
}

export const Study = (props) => {

    return (
        <>
            <TimeLeft counter={props.study} classes={"time-box"}/>
        </>
    )
}
export const Break = (props) => {
    return (
        <>
            <TimeLeft counter={props.break} classes={"time-box t-box-break"}/>
        </>
    )
}
export const TotalStudy = ({totalSeconds}) => {

    const total = Math.floor((totalSeconds / 60))

    return (
        <>
            <div className="t-box-study text-center">
                <h3>Session Complete</h3>
                <p>Total Study Time: {total} Minutes</p>
            </div>

        </>
    )
}
