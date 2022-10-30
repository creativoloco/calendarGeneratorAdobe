import {ChangeEvent, useState} from 'react';

import Day from './components/Day';
import './App.css';


interface fData{
  year: Number
}


function App():JSX.Element {
  const [formData, setFormData ] = useState<fData>({
    year: new Date().getFullYear()
  });

  console.log("App rendered")

  const handleChange = (e:ChangeEvent<HTMLInputElement>):void =>{
    const {name, value}=e.target;
    setFormData(prevData=>{
      return {...prevData, [name]:value}
    });
    console.log("form updated");
  }


  return (
    <div id="app">
      <div id="navigate-bar">
        <div>Back</div>
        <div>Day</div>
      </div>
      <div className="preview">
        <Day/>
      </div>
      <div className="config">
        <label htmlFor="year" >Year </label>
        <input type="number"  name="year" id="year"
          value={formData.year.toString()} onChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
