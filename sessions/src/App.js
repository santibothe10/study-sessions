import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState } from 'react';
import Navigation from './components/Navigation';
import Clock from './components/Clock';
import Timer from './components/Timer';
import CustomSeshForm from './components/CustomSeshForm';
import Blank from "./components/Blank.mp4"
import { HashRouter } from 'react-router-dom';

function App() {

  const [customStudy, setCustomStudy] = useState(25)
  const [customBreak, setCustomBreak] = useState(5)
  const [customCycle, setCustomCycle] = useState(3)
  const defineSessionTimes = (studyM, breakM, cycleNum) => {
    setCustomStudy(Math.round(studyM * 10) / 10)
    setCustomBreak(Math.round(breakM * 10) / 10)
    setCustomCycle(Math.floor(cycleNum))
  }

  return (
      <HashRouter>

        <div className="App" id="App">
        <video autoPlay muted className="video" width="1" height="1" controls id="myVideo" loop="true">
            <source src={Blank} type="video/mp4" />
        </video>
         <Routes>

          <Route path="/">

            <Route path="" element={<Navigation />}/>

            <Route path="sessions/">
                <Route path="" element={<CustomSeshForm defineSessionTimes={defineSessionTimes}/>} />
                <Route path="focus/" element={
                <Timer
                  studyMin={customStudy}
                  breakMin={customBreak}
                  cycles={customCycle}
                  defineSessionTimes={defineSessionTimes}
                />
                  } />
            </Route>

          </Route>

          <Route path="clock/" element={<Clock />} />

         </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
