const Picture = ({focusMode}) => {

  const studyClass = "App-logo study-pic"
  const breakClass = "App-logo break-pic"

  return (
    <>
      <img src={require("./logo1.gif")}
        className={focusMode ? studyClass : breakClass}
        alt="logo"
      />
    </>
  )
}

export default Picture;
