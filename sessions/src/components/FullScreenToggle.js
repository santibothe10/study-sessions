
const FullScreenToggle = () => {

  const my_page = document.documentElement;

  const handleClick = () => {

      if (!document.fullscreenElement) {
          my_page.requestFullscreen()
      } else {
          document.exitFullscreen()
      }
  }
  return (
    <button className="w-100 btn navigation-button" onClick={handleClick}>Toggle Fullscreen</button>
  )
}
export default FullScreenToggle;
