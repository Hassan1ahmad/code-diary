import React from 'react'
import Code from './code'

function CssWebsites() {
  return (
    <div>
      <div>
      <div className="wrapper">
    <div className="container">
    <div className="row">
      <div className="col-4">
        <nav id="navbar-example3 " className="sidebar">
          <a className="nav-link" href="#item-1">Glow Generator</a>
          <a className="nav-link" href="#item-2">Fency Border</a>
          <a className="nav-link" href="#item-3">Gradient Background</a>
        </nav>
      </div>
      <div className="col-8 content">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0">
         <h2 className='text-center fw-bolder'>CSS Websites</h2>
          <div id="item-1">
            <h4>CSSBud's Glow Generator: Making Things Shine Easily</h4>
            <p className='lh-base'>  <strong><a target='blank' href="https://cssbud.com/css-generator/css-glow-generator/" className="text-reset" rel="noopener noreferrer"> CSSBud's Glow Generator</a></strong> is a user-friendly tool to create glow, where you just set a few things: <br /> how blurry you want the glow,<br /> how wide the glow should spread, <br /> and how see-through or solid it should appear. <br />  So, if you want to draw attention to buttons, make text stand out, or just add some fun lighting effects to images, this tool does the trick. All without needing to dive deep into complex CSS. Simply adjust the blur, glow range, and opacity, and you're good to glow!
            </p>
            <Code language={'javascript'} code={`https://cssbud.com/css-generator/css-glow-generator/`} />
            <img src={require('../assests/cssglow.jpg')} className="img-fluid" alt="..."></img>
          </div>
          <div id="item-2">
            <h4>Fency Border</h4>
            <p className='lh-base'>
            Hosted on <b> <a target='blank' href="https://9elements.github.io/fancy-border-radius/" className="text-reset" rel="noopener noreferrer"> 9elements.github.io</a> </b>, the <b>Fancy Border Radius</b> tool provides web designers and developers with a visually intuitive platform to craft complex and unique border radius shapes. Unlike the traditional border-radius properties in CSS which offer simple rounded corners, this tool takes it to the next level by allowing for intricate curves and designs.<br/><br/>
            To get started, users can simply adjust the visual handles on a square element. As adjustments are made, the tool automatically generates the corresponding CSS code. This makes creating <b>intricate designs</b> and <b>organic shapes</b> not just possible, but remarkably easy.
          </p>
          <Code language={'javascript'} code={`https://9elements.github.io/fancy-border-radius/`} />
          <img  src={require('../assests/fency border.jpg')} className="img-fluid rounded mx-auto d-block" alt="..." ></img>

          </div>
          <div id="item-3">
            <h4>Create your gradient background</h4>
            <p>
              Gradients are essential in modern web design, offering dynamic visuals that captivate users. <b><a href="https://csshero.org/mesher/" className='text-reset' target="_blank" rel="noopener noreferrer">Mesher by CSSHero</a></b> stands out as a dedicated gradient background creator tailored for this very purpose.
            </p>
            <p>
              Start by selecting your preferred colors from the palette. Next, adjust the gradient's direction to achieve the desired flow of colors. As you make changes, Mesher dynamically provides the corresponding CSS, ready to be integrated into your project. With Mesher's simplicity, adding vibrant gradient flair to any design has never been easier.
            </p>
            <Code language={'javascript'} code={`https://csshero.org/mesher/`} />
            <img  src={require('../assests/background gradiant.png')} className="img-fluid " alt="..."></img>




          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>
    </div>
  )
}

export default CssWebsites
