
const FullScreenToggle = () => {

  const my_page = document.documentElement;

  const handleClick = () => {

      if (!document.fullscreenElement) {
          if (my_page.requestFullscreen) {
            my_page.requestFullscreen();
          } else if (my_page.webkitRequestFullscreen) {
            my_page.webkitRequestFullscreen();
          } else if (my_page.msRequestFullscreen) {
            my_page.msRequestFullscreen();
          }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
  }
  return (
    <button className="w-100 btn navigation-button" onClick={handleClick}>Toggle Fullscreen</button>
  )
}
export default FullScreenToggle;
