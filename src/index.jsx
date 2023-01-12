import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import './style.css'
import Courses from './components/courses';

function App() {
  const [theme,setTheme]=useState("white");
   

  const changeTheme= () => {
    const themeSwitcher= theme =="white" ? "black": "white"
    setTheme(themeSwitcher);
  
  }

  return (
    <div style={{background:theme}}>
      <button onClick={changeTheme}>Change theme</button> 

<Courses/>

     

    </div>
  )
}



ReactDOM.render(<Courses />, document.getElementById("root"))