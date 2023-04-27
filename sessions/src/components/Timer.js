import { useState, useEffect } from "react";
import { Study, Break, TotalStudy } from "./timeEvents";
import { useRef } from "react";
import alert from "./../alert.wav";
import SessionComplete from "./SessionComplete.js";
import Picture from "./Picture";
import Menu from "./Menu";

export default function Timer({studyMin, breakMin, cycles, defineSessionTimes}) {

    const goal = studyMin * 60
    const absoluteTotal = ((goal * cycles))
    const [focusMode, setFocusMode] = useState(true)
    const [studyTime, setStudyTime] = useState(studyMin * 60);
    const [breakTime, setBreakTime] = useState(breakMin * 60);
    const [cycle, setCycle] = useState(cycles)
    const [totalSeconds, setTotalSeconds] = useState(0)
    const [sessionProgress, setSessionProgress] = useState(0)
    const audio = useRef(null)

    const handleCounter = () => {
        if (cycle > 0) {
            if (studyTime > 0) {
                setTotalSeconds(totalSeconds + 1)
                setSessionProgress((totalSeconds /absoluteTotal) * 100)
                setStudyTime(studyTime - 1)
                if (studyTime === 1) {
                    audio.current.play()
                }
            }
            else if (breakTime > 0 && cycle > 1) {
                if (focusMode === true) {
                    setFocusMode(false)
                }
                setBreakTime(breakTime - 1)
                if (breakTime === 1) {
                    audio.current.play()
                }
            }
            else if (cycle > 1) {
                setStudyTime(studyMin * 60)
                setBreakTime(breakMin * 60)
                setCycle(cycle - 1)
                setFocusMode(true)
            } else {
                setStudyTime(0)
                setBreakTime(0)
                setCycle(0)
                setFocusMode(true)
            }
        }
    }

    useEffect(() => {
        setTimeout(() => handleCounter(), 1000)

    })

    const Category = () => {


        return (
            <>
                <div className="time-frame">
                    {focusMode ? <Study study={studyTime} totalSeconds={totalSeconds}/>: <Break break={breakTime} totalSeconds={totalSeconds}/>}
                </div>

                <div className="container progress-container">
                        <div className="row justify-content-center">
                            <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6">
                                <div className="d-block">
                                    <div className="progress color-graded">
                                                <div className={ focusMode ? "progress-bar" : "progress-bar-break"} role="progressbar" style={{width: `${sessionProgress}%`}} aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        )
    }


    return (
        <>
        <Menu />
            <div type="button" data-bs-toggle="modal" data-bs-target="#menuModal" className="time-frame">
                {cycle > 0 && <Picture focusMode={focusMode} />}
            </div>
            <audio ref={audio} src={alert}/>
            {cycle === 0 && <TotalStudy totalSeconds={totalSeconds} />}
            {cycle > 0 ? <Category focusMode={focusMode}/> : <SessionComplete />}
        </>
    )
}
