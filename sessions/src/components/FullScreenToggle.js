
const FullScreenToggle = () => {

  const my_page = document.documentElement;

  const handleClick = () => {

      if (!document.fullscreenElement) {
          my_page.requestFullscreen()
          my_page.webkitRequestFullScreen();
      } else {
          document.exitFullscreen()
          document.webkitCancelFullScreen();
      }
  }
  return (
    <button className="w-100 btn navigation-button" onClick={handleClick}>Toggle Fullscreen</button>
  )
}
export default FullScreenToggle;
