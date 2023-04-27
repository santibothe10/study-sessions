import { NavLink } from "react-router-dom";
import Tutorial from "./Tutorial";
import FullScreenToggle from "./FullScreenToggle";

const Menu = () => {

  return (
    <>
      <div className="modal fade" id="menuModal" tabIndex="-1" aria-labelledby="menuModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="menuModalLabel">Sessions</h5>
              <button type="button" className="btn navigation-button" data-bs-dismiss="modal" aria-label="Close">X</button>
            </div>
            <div className="modal-body" data-bs-dismiss="modal">
              <NavLink to="/" className="w-100 btn navigation-button">Home</NavLink>
            </div>
            <div className="modal-body">
              <Tutorial />
            </div>
            <div className="modal-footer">
              <FullScreenToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Menu
