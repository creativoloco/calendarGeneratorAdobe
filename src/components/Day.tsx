import './Day.css'

const Day = ()=>{
  const dayStyle:React.CSSProperties = {
    width: "100px",
    height: "100px",
    border: "1px solid black",
    backgroundColor: "white"
  }
  const dayBoxStyle:React.CSSProperties = {
    width: "20px",
    height:"20px",
    border: "1px solid black",
    padding: "1px"
  }
  const dayNumber:React.CSSProperties = {
    textAlign: "right"
  }

  return (
    <div className="day-container">
      <div style={dayStyle}    className="day"></div>
      <div style={dayBoxStyle} className="day-box"> </div>
      <p   style={dayNumber}  >2</p>
    </div>
  )
}

export default Day;
