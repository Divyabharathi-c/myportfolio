import React from 'react';
import './Footerr.css';
import { themeContext } from '../Context';
import { useContext } from 'react';

const Footerr = () => {

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="footer" style={{ background: darkMode ? 'rgb(26,26,26)':''}}>
      <p style={{color:darkMode ? 'white':''}}>&#169; Designed & built by Divyabharathi,2024 </p>
    </div>
  )
}

export default Footerr