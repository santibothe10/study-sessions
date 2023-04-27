

const Tutorial = () => {
  return (
    <>
      <button className="w-100 btn navigation-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Tutorial</button>

      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h3 id="offcanvasRightLabel">Sessions Tutorial</h3>
          <button className="btn navigation-button" data-bs-dismiss="offcanvas">X</button>
        </div>
        <div className="offcanvas-body">
          <br/>
          <h3>Clock:</h3>
          <p>Free yourself from distractions by filling your screen with a digital clock designed for both asthetic quality and productivity.</p>
          <br/>
          <h3>Sessions:</h3>
          <p>Input your study time, break time and study cycles
          to craft your own personal study session! When you hear the tone,
           make sure to take a break! unless of course you
           are on break. In that case, its time to study!</p>
          <p>The default study times follow a classic pomodoro,
          25min study, 5min breaks, and three study cycles! I have not included the final 20min break at the end. So if that's your jam, remember to take that long break at the end.</p>
          <br/>
          <h3>Navigation</h3>
          <p>To navigate simply click on either the large clock or the rotating picture.</p>
          <br/>
          <h3>Thank you</h3>
          <p>Your feedback is always welcome! Send any concerns, feedback, or problems to santiagobothe@outlook.com and I will try to get the problem fixed as fast as possible!</p>
        </div>
      </div>
    </>
  )
}
export default Tutorial;
