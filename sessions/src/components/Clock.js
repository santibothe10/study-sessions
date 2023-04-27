import { useState } from "react";
import Menu from "./Menu";


export default function Clock() {
    const currentTime = new Date().toLocaleTimeString("it", {hour: '2-digit', minute: '2-digit'})
    const [time, setTime] = useState(currentTime);

    const changeTime = () => {
        const currentTime = new Date().toLocaleTimeString("it", {hour: '2-digit', minute: '2-digit'})
        setTime(currentTime)
    }

    setInterval(changeTime, 1000)

    return (
        <>
            <Menu />
            <div type="button" data-bs-toggle="modal" data-bs-target="#menuModal" className="time-frame">
                <h1 className="time-box clock">{time}</h1>
            </div>

        </>
    )
}
