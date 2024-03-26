import React from 'react';
import './Homepage.css';
import { themeContext } from '../Context';
import { useContext } from 'react';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';


const Homepage = () => {

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  const textRef=useRef();
  useEffect(()=>{
    init(textRef.current, { showCursor: false, strings: ['Full Stack Developer'], startDelay: 500, backDelay:  1500, autoStart:true,
    loop:true})
  },[])

  return (
    <div className="homepage" id="home" style={{ background: darkMode ? 'rgb(23, 23, 23)':''}}>
        <div className="homepage-content">
            <div className="homepage-content-left">
                <div style={{color:darkMode ? 'white':''}}>Hi! I am</div>
                <div className='divyabharathi'>Divyabharathi.C</div>
                <div ref={textRef} style={{color:darkMode ? 'white':''}}></div>
                <a href="#contact"><button className="button homepage-hireme-btn">Hire Me</button></a>
            </div>



            <div className="homepage-content-right">
                <div className='background-circle'>
                    <img className='mypic' src="assets/animation women.jpg" alt="" /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage