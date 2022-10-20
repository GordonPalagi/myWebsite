import React from 'react'
import './PagesCSS/Home.css'
import headshot from '../Images/HeadShot.JPEG'
import * as SiIcons from 'react-icons/si'
import { Link } from 'react-router-dom'

function Home() {


// headshot image container
const image =  
  <div className='headshot-con'>
    <div className='image-tag-con'>
      <img className='headshot' src={headshot}/>
      <div className='link-con'>
        <a href='github.com/gordon-palagi' target='blank' className='icons'>
          <SiIcons.SiGithub/>
        </a>
        <Link className='icons linked' hrefLang=''>
          <SiIcons.SiLinkedin/>
        </Link>
      </div>
    </div>
    <p>Magna laboris proident labore enim. Adipisicing incididunt ex laborum voluptate Lorem Lorem magna officia ullamco excepteur adipisicing. Laboris minim aute nulla tempor officia eiusmod laborum sint tempor aute proident excepteur. Commodo eu excepteur exercitation nisi laboris deserunt enim id esse duis consequat reprehenderit ut. Sunt ullamco excepteur id nostrud pariatur tempor exercitation est non mollit officia.</p>
  </div>

// text container
const textCon = 
  <div className='home-text-con'>
    <h1 className='developer'>Gordon Quinn</h1>
    <h3>Full-stack web developer</h3>
  </div>


const homeCard = 
  <div className='homeCard'>
    {image}
      <div className='vertical-line-home'></div>
    {textCon}
  </div>



  return (
    <div className='homeCard-con'>
      {homeCard}
    </div>
  )
}

export default Home