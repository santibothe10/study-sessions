import { NavLink } from "react-router-dom";
import Tutorial from "./Tutorial";
import FullScreenToggle from "./FullScreenToggle";


const SessionComplete = () => {
  return (
    <>

      <div className="container mb-5">


        <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-7 col-sm-10">
                <div className="card-body">
                  <NavLink to="/" className="w-100 btn navigation-button">Home</NavLink>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-7 col-sm-10">
                <div className="card-body">
                    <Tutorial />
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-7 col-sm-10">
                <div className="card-body">
                    <FullScreenToggle />
                </div>
            </div>
        </div>
    </div>

    </>
  )
}


export default SessionComplete;
