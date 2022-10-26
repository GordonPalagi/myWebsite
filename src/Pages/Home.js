import React, { useEffect, useState } from 'react'
import './PagesCSS/Home.css'
import headshot from '../Images/HeadShot.JPEG'
// import * as SiIcons from 'react-icons/si'
// import { Link } from 'react-router-dom'
import '../Components/ComponentCSS/Switcher.scss'

function Home() {

const [colorTheme, setColorTheme] = useState('theme-classic');


useEffect(() => {
  const currentThemeColor = localStorage.getItem('theme-color');
  if (currentThemeColor) {
    setColorTheme(currentThemeColor);
  }
}, [])

const handleClick = (theme) => {
  setColorTheme(theme)
  localStorage.setItem('theme-color', theme);
}


const switcher = 
  <div className='theme-options'>
    <div id='theme-classic'

        onClick={() => handleClick('theme-classic')}
        className='active'

    ></div>
    <div id='theme-retro'

        onClick={() => handleClick('theme-retro')}
        className='active'

    ></div>
    <div id='theme-dark'

        onClick={() => handleClick('theme-dark')}
        className='active'

    ></div>
  </div>


const infoSection =
<div>
  <div>
    <span>About</span>
  </div>
  <div>
    <span>Projects</span>
  </div>
  <div>
    <span>Contact</span>
  </div>
</div>



   

// headshot image container
const image =  
  <div className='headshot-con'>
    <div className='image-con'>
      <img className='headshot' src={headshot} alt='headshot of Gordon Palagi'/>
    </div>
  </div>


// // social media tags and bio
//   const tagAndText = 
//   <div className='tag-text-con'>
//     <div className='link-con'>
//           <Link className='icons linked' hrefLang=''>
//             <SiIcons.SiLinkedin/>
//           </Link>
//           <Link className='icons linked' hrefLang=''>
//             <SiIcons.SiGithub/>
//           </Link>
//     </div>
//       <p>Magna laboris proident labore enim. Adipisicing incididunt ex laborum voluptate Lorem Lorem magna officia ullamco excepteur adipisicing. Laboris minim aute nulla tempor officia eiusmod laborum sint tempor aute proident excepteur.</p>
//   </div>




// text container
const textCon = 
  <div className='home-text-con'>
    <h1 className='gordon'>Gordon Quinn</h1>
    <h3>Full-stack web developer</h3>
  </div>


// main color changing area

const LandingArea =
    <div className={`landing-area ${colorTheme}`}>
      <div className='landing-text-image-con'>
        {textCon}
        {/* {image} */}
      </div>
      <div className={`button-con ${colorTheme}`} >
          {switcher}
      </div>
    </div>





// full home page
const homeCard = 
  <div className='homeCard'>
      <div className='vertical-line-home'></div>
      {LandingArea}
  </div>



  return (
    <div className='homeCard-con'>
      {homeCard}
    </div>
  )
}

export default Home