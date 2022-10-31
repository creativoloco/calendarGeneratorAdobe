import AnchorSelector from "./AnchorSelector";
import './Previewer.css';

type propType = {
  children: JSX.Element
}
const Previewer = ( { children }:propType ) => {
  const style = {
    width: "100px",
    height: "100px"
  }
  return (
      <div className="preview">
        <div style={ style } className="preview-container-elements">
          { children }
          <AnchorSelector width={100} height={100}/>
        </div>
      </div>
  )
}

export default Previewer;
