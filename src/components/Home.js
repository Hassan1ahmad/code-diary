import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import './home.css'


function home() {
  return (
    
      <div className="background-image">
      <div className="center-home">
        <div className="diary">
          Code Diary
        </div>
        <div className="learn">
        <TypeAnimation
        preRenderFirstString={true}
  sequence={[
    // Same substring at the start will only be typed once, initially
    'Learn about CSS',
    1000,
    'Learn about Javascript',
    1000,
    'Learn about React Js',
    1000,
    'Learn about Express js',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
        </div>
      </div>
      </div>
    
  )
}

export default home
