import React, {useState} from 'react'
import './AnchorSelector.css'

type propType= {
  width: number,
  height:number,
}

const smallPointSize = "5px";
const smallPointColor = "red"
const hoverColor = "#F005" // ONLY HEX VALES ARE ALLOWED
  
const AnchorSelector = (props:propType)=>{

  const [ style, setStyle ] = useState<React.CSSProperties>( {
    width: props.width + 'px',
    height: props.height + 'px',
    background: "radial-gradient(circle at center, blue 10px,transparent 10px)"
  });

  /**
   * Adds a red point to style
   */
  const addIndicator = ()=>{
    const firstColor  = `${smallPointColor} ${smallPointSize}`,
          secondColor = `${hoverColor} ${smallPointSize}`,
          smallPoint  = `radial-gradient(circle at center, ${firstColor}, ${secondColor})`;
    setStyle( prevStyle =>{
      const background = `${smallPoint}, ${prevStyle.background}`
      return { ...prevStyle, background }
    })
  }

  /**
   * Remove the first gradient in background if has 2 gradients
   */
  const removeIndicator = () => {
    setStyle( prevStyle => {
      let background = prevStyle.background + "";
      const gradients = background.match(/radial-gradient\([a-z0-9 ,#]+\)/ig);
      if( gradients && gradients.length > 1 ) background = gradients[1];
      return {...prevStyle, background}
    })
  }
   /**
    * Move indicator acording mouse position
    * @param event 
    */
  const moveIndicator = ( event:React.MouseEvent<HTMLDivElement> )=>{
    setStyle( prevStyle => {
      let background = prevStyle.background + "";
      background = background.replace(/(?<=at )[^,]+(?=,)/i, getRelativePosition(event) );
      return {...prevStyle, background}
    });
  }

 /**
  * Set position of anchor to current position of indicator
  * @param event 
  */
  const setAnchorPointer = ( event:React.MouseEvent<HTMLDivElement> )=>{
    setStyle( prevStyle => {
      let background = prevStyle.background + "";
      const matches = background.match(/[a-z-]+\([^()]+\)/gi);
      if( matches && matches.length > 1 ){
        matches[1] = matches[1].replace( /(?<=at )[^,]+(?=,)/,getRelativePosition(event))
        return {...prevStyle, background: matches.join(",")}
      }
      return prevStyle
    });
  }

  /**
   * Calculate position of mouse over element
   * @param event
   */
  const getRelativePosition = ( event:React.MouseEvent<HTMLDivElement> )=>{
      let position = "";
      if(event.target instanceof Element){

        const target       = event.target,
              bounds       = target.getBoundingClientRect(),
              sectorWidth  = bounds.width/3,
              sectorHeight = bounds.height/3;
              
        // bottom top
        if( event.clientY > bounds.bottom - sectorHeight ) {
          position = "bottom"
        }else if( event.clientY < bounds.top + sectorHeight ){
          position = "top"
        }

        // right left center
        if( event.clientX > bounds.right - sectorWidth ){
          position += " right"; 
        }else if( event.clientX < bounds.left + sectorWidth ){
          position += " left" ;
        }else{
          position = position || "center" ;
        }
      }
      return position;
  }

  return (
    <div className="anchor-selector" style={style} onClick={setAnchorPointer}
      onMouseMove={moveIndicator} onMouseEnter={addIndicator} onMouseLeave={removeIndicator}
    ></div>
  )
}


export default AnchorSelector;
