import React, { useEffect, useState } from 'react'
import './PagesCSS/Home.css'
import '../Components/ComponentCSS/Switcher.scss'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function Home() {

const [colorTheme, setColorTheme] = useState('theme-classic');
const [themes, setThemes] = useState(['theme-classic', 'theme-retro', 'theme-dark']);
const [tracker, setTracker] = useState(0);
const [repoTitle, setRepotitle] = useState();
const [githubName, setGithubName] = useState();



// theme swither
useEffect(() => {
  const currentThemeColor = localStorage.getItem('theme-color');
  if (currentThemeColor) {
    setColorTheme(currentThemeColor);
  }
}, [])


const handleClick = () => {
  if (tracker === 3) {
    setTracker(0)
  }
  setColorTheme(themes[tracker])
  localStorage.setItem('theme-color', themes[tracker]);
  setTracker(prev => prev + 1);
}

const switcher = 
  <div className='theme-options'>
    <div id='theme-classic'

        onClick={() => handleClick()}
        className='active'

    ></div>
  </div>


useEffect(() => {
  fetch('http://api.github.com/users/gordonpalagi/repos')
  .then((res) => res.json())
  .then((result) => {
    setRepotitle(result.name)
  })
},[])



const navArray = ["Projects", "About", "Contact"];
// text container

const textCon = 

  <div className='home-text-con'>
    <h1 className='gordon'>Gordon Quinn</h1>
    <h3>Full-stack web developer</h3>
    <div className='mid-nav-con'>
      {navArray.map((item) => {
        return (
          <Nav variant="tabs">
            <Nav.Item>
              <Nav.Link className='mid-nav-links' href={`/${item}`}>{item}</Nav.Link>
            </Nav.Item>
          </Nav>
          )
        })}
      </div>
      {repoTitle}
  </div>







// main color changing area
const LandingArea =
    <div className={`landing-area ${colorTheme}`}>
      <div className='landing-text-image-con'>
        {textCon}
      </div>
    </div>

// full home page


const homeCard = 
<div>
  <div className='homeCard'>
      {LandingArea}
  </div>
</div>



  return (
    <div className='homeCard-con'>
      {homeCard}
      <div className={`button-con ${colorTheme}`} >
          {switcher}
      </div>
    </div>
  )
}

export default Home