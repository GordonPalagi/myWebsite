import React, { useState } from 'react'
import './PagesCSS/Home.css'
import headshot from '../Images/HeadShot.JPEG'
import * as SiIcons from 'react-icons/si'
import { Link } from 'react-router-dom'
import Button from '../Components/Button'
import ButtonCSS from '../Components/ComponentCSS/ButtonCSS.css'
import themes from '../Components/Themes'
import Themes from '../Components/Themes'

function Home() {



const cNameArray = ['landing-area', 'retro', 'stars', 'gradient']


   

// headshot image container
const image =  
  <div className='headshot-con'>
    <div className='image-con'>
      <img className='headshot' src={headshot}/>
    </div>
  </div>


// social media tags and bio
  const tagAndText = 
  <div className='tag-text-con'>
    <div className='link-con'>
          <Link className='icons linked' hrefLang=''>
            <SiIcons.SiLinkedin/>
          </Link>
          <Link className='icons linked' hrefLang=''>
            <SiIcons.SiGithub/>
          </Link>
    </div>
      <p>Magna laboris proident labore enim. Adipisicing incididunt ex laborum voluptate Lorem Lorem magna officia ullamco excepteur adipisicing. Laboris minim aute nulla tempor officia eiusmod laborum sint tempor aute proident excepteur. Commodo eu excepteur exercitation nisi laboris deserunt enim id esse duis consequat reprehenderit ut. Sunt ullamco excepteur id nostrud pariatur tempor exercitation est non mollit officia.</p>
  </div>




// text container
const textCon = 
  <div className='home-text-con'>
    <h1 className='gordon'>Gordon Quinn</h1>
    <h3>Full-stack web developer</h3>
  </div>


// main color changing area

// const LandingArea =
      // <div className='landing-button-con'>
      //   {textCon}
        // <div onClick={handleClick} className='gen-button-con'>
        //   <span>Change Theme</span>
        // </div>
      // </div>




// const LandingArea =
//   <div className='landing-button-con'>
//       {textCon}
//       <div onClick={handleClick} className='gen-button-con'>
//               <span>Change Theme</span>
//       </div>
//     </div>


// full home page
const homeCard = 
  <div className='homeCard'>

        <div className='image-bio-con'>
          {image}
          {tagAndText}
        </div>
          <div className='vertical-line-home'></div>
        {cNameArray.filter((style, i) => style.id === i).map(filteredCName => {
          return (
              <div className={filteredCName}>
              {textCon}
                <div onClick={i => i + 1} className='gen-button-con'>
                  <span>Change Theme</span>
                </div>
              </div>
            )
        })}

  </div>



  return (
    <div className='homeCard-con'>
      {homeCard}
    </div>
  )
}

export default Home