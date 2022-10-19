import React from 'react'
import './PagesCSS/Home.css'
import headshot from '../Images/HeadShot.JPEG'

function Home() {


const homeCard = 
<div className='homeCard'>
  <div className='headshot-con'>
    <img className='headshot' src={headshot}/>
  </div>
  <div className='vertical-line-home'></div>
  <div className='home-text-con'>
    <h4>I'm a full stack</h4>
    <div className='vertical-border'></div>
    <h2>Developer</h2>
    <h2> & Designer</h2>
    <div className='horizantal-border'></div>
  </div>
</div>



  return (
    <div className='homeCard-con'>
      {homeCard}
    </div>
  )
}

export default Home