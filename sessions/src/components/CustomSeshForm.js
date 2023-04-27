import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

export default function CustomSeshForm({defineSessionTimes}) {

  const navigate = useNavigate();

  const [study, setStudy] = useState(25);
  const [breakTime, setBreak] = useState(5);
  const [cycle, setCycle] = useState(3);

  const handleStudyChange = (event) => {
    const value = event.target.value;
    setStudy(value);
  }
  const handleBreakChange = (event) => {
    const value = event.target.value;
    setBreak(value);
  }
  const handleCycleChange = (event) => {
    const value = event.target.value;
    setCycle(value);
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    defineSessionTimes(study, breakTime, cycle);
    navigate("/sessions/focus")
  }


  return (
      <>

        <form onSubmit={handleSubmit} className="container mb-5">

          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-7 col-sm-10">
                <div className="row justify-content-between">
                  <h3 className="t-box-study col-8">New Session</h3>
                  <NavLink to="/" className=" col-2 btn navigation-button me-3">X</NavLink>
                </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-7 col-sm-10">
              <label className="color-graded" htmlFor="studytimeinmin">Study Time</label>
              <input maxLength="4" value={study} onChange={handleStudyChange} id="studytimeinmin" type="number" className="form-control bg-dark" placeholder="Min"/>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-7 col-sm-10">
              <label className="color-graded" htmlFor="breaktimeinmin">Break Time</label>
              <input value={breakTime} onChange={handleBreakChange} id="breaktimeinmin" type="number" className="form-control bg-dark" placeholder="Min"/>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-7 col-sm-10">
              <label className="color-graded" htmlFor="cyclecount">Cycles</label>
              <input value={cycle} onChange={handleCycleChange} id="cyclecount" type="number" className="form-control bg-dark" placeholder="#"/>
            </div>
          </div>

            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-7 col-sm-10">
                <button type="submit" className="w-100 btn navigation-button mb-2 mt-3">Start a session</button>
              </div>
            </div>

        </form>
        </>
  )
}
