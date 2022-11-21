import React, { useState } from 'react';
// import profile1 from '../public/img/profile1.jpg'
import Education from './Components/Edu/Education';
import Skill from './Components/Skill/Skill';
import { data, skills, menu } from './data';
import MenuBar from './Components/MenuBar';
import Project from './Components/Project/Project';
import './App.css';
import {
  FaPhoneAlt, FaHome, FaThLarge, FaEnvelope, FaFacebookSquare, FaGithubSquare
  , FaLinkedin
} from 'react-icons/fa';




function App() {

  const [eduOrWork, setEduOrWork] = useState(true);

  const [menuBtn, setMenuBtn] = useState(false);

  const chengeMenu = () => {
    setMenuBtn(!menuBtn);
  }


  return (
    <div className="App">

     {/* FOR LAPTOP VIEW 1ST DIV */}
      <div className="first-div">




        {/* FIXED SECTION OR MENU SECTION FOR NAVIGATION */}
        <div className="main-menu">

          <ul className='hiding-menu'>

            {menu.map((items) => {
              const { id, icon, title, url } = items
              return (
                <MenuBar key={id} menuBtn={menuBtn} chengeMenu={chengeMenu} {...items} />
              )
            })
            }

          </ul>


          <div className="fixed-menubar">
            <h6>Monali</h6>
            <button className='btn-menu' onClick={chengeMenu} > <FaThLarge /> </button>
          </div>

        </div>



        {/* IMG NAME AND DOWNLOAD BUTTON */}

        <div className="name" >

        <img src="images/myimage.jpeg" alt="image" className="myImg" />
           
          <h3 className="myname">MONALI WARGHANE</h3>

          <h5 className='name-designation'>WEB DEVELOPER</h5>

          <a href='./Resume/MonaliCV.pdf' targrt='_bank' download='MonaliCV.pdf' className="cvDownload">Download</a>

        </div>

        <div className="addressInfo">
          {/* ONLY ADDRESS,CONTACT NO AND EMAIL */}
          <div className="address">

            <div className="addressCenter">
              <span ><FaHome /></span>
              <h4>Nanded City, Pune</h4>
            </div>

            <div className="addressCenter">
              <span><FaEnvelope /></span>
              <h4>monaliwarghane97@gmail.com</h4>
            </div>

            <div className="addressCenter">
              <span><FaPhoneAlt /></span>
              <h4>9168563591</h4>
            </div>

          </div>


          {/* SOCIAL */}
          {/* <div className="social">

            <h3 className="sociaal-heading text-align">SOCIAL</h3>

            <div className="addressCenter">
              <span className='homeaddress'><FaLinkedin /></span>
              <h4>Raghuji Nagar,Nagpur-24</h4>
            </div>

            <div className="addressCenter">
              <span><FaGithubSquare /></span>
              <h4>sourabh.ingle15@gmail.com</h4>
            </div>

            <div className="addressCenter">
              <span><FaFacebookSquare /></span>
              <h4>8208927919</h4>
            </div>

          </div> */}

          {/* PROFILE INFO */}
          <div className="profileinfo" id='profile'>

            <h3 className="profile-title">PROFILE</h3>
            <p className="profilepara">Seeking a position to utilize my skills and abilities and enhance them to make a successful career in the Progressive Organization by accepting challenging projects. To work with enthusiasm and dedication for the success of the organization and showcase my ability, efficiency and passion for work.</p>

          </div>
        </div>





      </div>


      {/* EDUCATION AND WORK INFORMATION BY USING TOGGLE BUTTOM */}

       {/* FOR LAPTOP VIEW 2ST DIV  FOR RESPONSIVE WEBSITE*/}
      <div className="second-div">
        <div className="edu-workinfo " id='education'>


          <button className="btn" onClick={() => setEduOrWork(true)}>Education</button>
          {
            <Education />
          }
        </div>


        {/* SKILLS INFOMATION  */}
        <div className='skill-section' id='skills'>
          <h3 className="skill-heading">SKILLS</h3>

          {
            skills.map((items) => {
              return (

                < Skill key={items.id} {...items} />
              )

            })
          }
        </div>




        {/* PROJECT INFORMATION  */}
        <div className="projects " id='projects'>
          <h3 className="peoject-heading text-align">PROJECTS</h3>
          <Project />
        </div>

      </div>


      {/* LANGUAGE AND HOBBY SECTION COMBINE */}

      <div className="myinterest pdy-2">

        {/* language section */}
        <div className="language">

          <h3 className='text-align'>LANGUAGE</h3>
          <ul>
            <li>ENGLISH</li>
            <li>MARATHI</li>
            <li>HINDI</li>
          </ul>

        </div>

        {/* hobby section */}
        <div className="interest-menu">

          <h3 className="interest-heading text-align">INTEREST</h3>
          <div className="interest">
            {
              data.map(items => {
                const { id, icon, hobby } = items;
                return (
                  <li className='hobbyItem' key={id}>
                    <span>{icon}</span>
                    <h6>{hobby}</h6>
                  </li>
                )
              })
            }
          </div>

        </div>


      </div>




    </div >
  );
}

export default App;
