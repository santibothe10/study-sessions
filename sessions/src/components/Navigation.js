import { NavLink } from "react-router-dom";
import Tutorial from "./Tutorial";
import FullScreenToggle from "./FullScreenToggle";


export default function Navigation() {

    return (
        <>

    <div className="container mb-5">

        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
              <div className="card-body text-center m-0 p-0">
                  <h1 className="app-title m-0 p-0">SESSIONS</h1>
              </div>
          </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-10">
                <div className="card-body">
                    <NavLink to="/clock/" className="w-100 btn navigation-button">Clock</NavLink>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-10">
                <div className="card-body">
                    <NavLink to="/sessions/" className="w-100 btn navigation-button">Sessions</NavLink>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-10">
                <div className="card-body">
                    <Tutorial />
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-7 col-sm-10">
                <div className="card-body">
                    <FullScreenToggle />
                </div>
            </div>
        </div>
    </div>


        </>
    )
}
