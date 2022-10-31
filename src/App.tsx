import {useEffect, useReducer} from 'react';
import './App.css';
import Day from './components/Day';
import Previewer from './components/Previewer';

enum ANCHOR {
  TOPLEFT,    TOP,    TOPRIGHT,
  LEFT,       CENTER, RIGHT,
  BOTTOMLEFT, BOTTOM, BOTTOMRIGTH
}

interface stateType{
  year: Number
  day: {
    width: Number,
    height: Number,
    anchor: ANCHOR
  },
  editComponent: React.FC
}

enum ACTIONTYPE{
  setYear,
  editComponent,
  setDayAnchor
}

type ACTION = 
  {type: ACTIONTYPE.setYear,       payload: number }
| {type: ACTIONTYPE.editComponent, payload: React.FC }
| {type: ACTIONTYPE.setDayAnchor,  payload: ANCHOR }

const initialState:stateType = {
  year: new Date().getFullYear(),
  day: {
    width: 100,
    height: 100,
    anchor: ANCHOR.TOPRIGHT
  },
  editComponent: Day 
}

const dataReducer = ( prevState:typeof initialState, action:ACTION ) => {
  const newState = { ...prevState };
  switch( action.type ){
    case ACTIONTYPE.setYear:
      newState.year = action.payload;
      return newState;
    case ACTIONTYPE.editComponent:
      newState.editComponent = action.payload;
      return newState;
    case ACTIONTYPE.setDayAnchor:
      newState.day.anchor = action.payload
      return newState;
  }
}


const App = ()=> {
  const [ state, dispatch ] = useReducer( dataReducer, initialState );

  //console.log("App rendered")
  console.log( Day)
  //console.log(state.editComponent === Day)
  
  /*
      <div id="navigate-bar">
        <div>Back</div>
        <div>Day</div>
      </div>
  */

  // testOnly: checking editComponent function 
  useEffect(()=>{
    console.log( state.editComponent === Day )
  },[])

  return (
    <div id="app">
      <Previewer>
        { 
          // @TODO create element dinamicaly, an pass the appropiate props
          <Day/>
        }
      </Previewer>
      <div className="config">
        <label htmlFor="year" >Year </label>
        <input
          type = "number"  name="year" id="year"
          value = { state.year.toString() }
          onChange = { e => dispatch({
            type: ACTIONTYPE.setYear,
            payload: +e.target.value})} 
        />
      </div>
    </div>
  );
}

export default App;
