import Box from './Box';
/*
enum Anchor {
  TOPLEFT,    TOP,    TOPRIGHT,
  LEFT,       CENTER, RIGHT,
  BOTTOMLEFT, BOTTOM, BOTTOMRIGTH
}
 */

const Day = ()=>{
  const dayStyle = {
    width: "100px",
    height: "100px",
    border: "1px solid black",
    backgroundColor: "white"
  }
  const dayBoxStyle = {
    width: "20px",
    height:"20px",
    border: "1px solid black",
    padding: "1px",
    textAling: "right"
  }

  return (
      <div style={dayStyle} className="day">
        <Box width={100} height={100}/>
        <div style={dayBoxStyle} className="day-box">
          2
        </div>
      </div>
    )
}

export default Day;
