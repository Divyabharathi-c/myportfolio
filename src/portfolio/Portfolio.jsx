import React from 'react';
import './Portfolio.css';
import { AiOutlineGithub,AiFillGithub,AiFillMail,AiOutlineMail,AiFillLinkedin,AiOutlineLinkedin
} from "react-icons/ai";
import {RiLiveLine} from "react-icons/ri"
import { CgWebsite } from "react-icons/cg";
import { themeContext } from '../Context';
import { useContext } from 'react';



const Portfolio = () => {
  
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

return (
    <div className="portfolio" id="proj" style={{ background: darkMode ? 'rgb(33,33,33)':''}}>
      <h2 style={{color:darkMode ? 'white':''}}>My <span>Portfolio</span> Section</h2>
      <div className="project-cards">
        
      <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/notes.jpg" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>Notes Taking Application</h3>
          <p>MERN Project</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>Technology: HTML, CSS, React.Js, Node.Js, Express, MongoDB, JavaScript
This app developed with the aim of enhancing the users to write their
thoughts and emotions on a digital platform
Users can able to create, view, edit, or delete their writings.</p>
          <div className="sourcecode-icons">
              <a href="https://github.com/Divyabharathi-c/Notes-Frontend" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://notes-taking-application-divyabharath.netlify.app/" target="_blank"><RiLiveLine style={{fontSize:'30px'}} className='ai-icon' /></a>
          </div>

        </div>

        <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/image.jpg" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>Diet Suggestion App</h3>
          <p>MERN Project</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>Develop a diet app with HTML, CSS, React.js, Node.js, Express, MongoDB, and JavaScript. Users track food intake, set goals, and monitor progress. React.js ensures an engaging interface, while Node.js manages server-side operations. MongoDB stores user data securely. The app facilitates easy diet management, motivation, and healthier choices.






.</p>
          <div className="sourcecode-icons">
              <a href="https://github.com/Divyabharathi-c/DietSuggestionApp-frontend-main" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://diet-suggestion-mern-app.netlify.app/" target="_blank"><RiLiveLine style={{fontSize:'30px'}} className='ai-icon' /></a>
              
          </div>
        
        </div>
        
        <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/blogpic.jpg" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>Blog Master App</h3>
          <p>MERN Project</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>Create a blog master app using MongoDB, Express.js, React.js, and Node.js (MERN stack). Users can create, view, edit, and delete blog posts. React.js ensures an interactive frontend, while Node.js and Express.js handle server-side tasks. MongoDB stores blog data efficiently. The app fosters easy content management, encouraging users to share their thoughts and experiences through engaging blog posts.





.</p>
          <div className="sourcecode-icons">
              <a href="https://github.com/Divyabharathi-c/blogmaster-back">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://blogmaster-creating.netlify.app/" target="_blank"><RiLiveLine style={{fontSize:'30px'}} className='ai-icon' /></a>

              
          </div>
        </div>

        <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/axios.png" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>Axios React-CRUD</h3>
          <p>React</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>Develop a React project implementing CRUD (Create, Read, Update, Delete) operations. Utilize components to create, display, edit, and delete items. Leverage React's state management for dynamic user interactions, and incorporate Axios or Fetch for HTTP requests to a backend server handling data persistence. This project enhances understanding of React's capabilities in managing data flow and user interactions within a web application. </p>
          <div className="sourcecode-icons">
              <a href="https://github.com/Divyabharathi-c/Axios-task" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://axios-crud-task.netlify.app/" target="_blank"><RiLiveLine style={{fontSize:'30px'}} className='ai-icon' /></a>
          </div>
            </div>

        <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/library.jpg" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>library Management</h3>
          <p>React</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>HTML, CSS, React.Js, Node.Js, Express, MongoDB, JavaScript
This app was developed to enable the users to store details of Books
and Author details.
Users can perform create, read, update, and delete actions on Author
and Books </p>
          <div className="sourcecode-icons">
              <a href="https://github.com/Divyabharathi-c/FORMIKTASK" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://library-management-react-app.netlify.app/" target="_blank"><RiLiveLine style={{fontSize:'30px'}} className='ai-icon' /></a>
          </div>
          
        </div>

        <div className="card" style={{border:darkMode ? '1px solid grey':''}}>
          <img src="assets/projects/chat.jpg" alt="" />
          <h3 style={{color:darkMode ? 'white':''}}>Talkie Application</h3>
          <p>MERN Project</p>
          <p style={{color:'grey',textAlign:'center',fontSize:'14px'}} className='proj-description'>Completed MERN chat application facilitates real-time communication between users. MongoDB stores chat data, Express.js manages server-side operations, React.js provides an interactive frontend, and Node.js ensures efficient server handling. The project demonstrates full-stack proficiency, integrating technologies for a seamless user experience. </p>
          <div className="sourcecode-icons">
              <a href="https://github.com/Divyabharathi-c/talkieapp-back" target="_blank">< AiOutlineGithub style={{fontSize:'30px'}} className='ai-icon'/></a>
              <a href="https://takieapp-mern.netlify.app/" target="_blank"><RiLiveLine style={{fontSize:'30px'}} className='ai-icon' /></a>
          </div>
          
        </div>

        
        
       

        {/* <div className="card">
          <img src="assets/projects/todo.png" alt="" />
          <h3>Todo List</h3>
          <p>React</p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/React-Todo-List-1" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://clever-semolina-09800b.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div> */}

      
        
        {/* <div className="card">
          <img src="assets/projects/crud1.png" alt="" />
          <h3>CRUD</h3>
          <p>Javascript</p>
          <p style={{color:'grey'}}>This is a Javascript project based on CRUD methods. The details of an user can be added, deleted and also can be edited according to our requirement. </p>
          <div className="sourcecode-icons">
          <a href="https://github.com/VaishooR/HTML-CSS-JS-Projects/tree/main/07.%20CRUD" target="_blank"><i title="source code" class="fa-brands fa-github"></i></a>
          <a href="https://strong-gelato-616274.netlify.app/" target="_blank"><i title="Live" class="fa-solid fa-display"></i></a>
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default Portfolio