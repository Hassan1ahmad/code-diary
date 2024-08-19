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
                  <a className="nav-link" href="#item-4">Color palettes</a>
                  <a className="nav-link" href="#item-5">UI Ball loaders</a>
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
                      Hosted on <b> <a target='blank' href="https://9elements.github.io/fancy-border-radius/" className="text-reset" rel="noopener noreferrer"> 9elements.github.io</a> </b>, the <b>Fancy Border Radius</b> tool provides web designers and developers with a visually intuitive platform to craft complex and unique border radius shapes. Unlike the traditional border-radius properties in CSS which offer simple rounded corners, this tool takes it to the next level by allowing for intricate curves and designs.<br /><br />
                      To get started, users can simply adjust the visual handles on a square element. As adjustments are made, the tool automatically generates the corresponding CSS code. This makes creating <b>intricate designs</b> and <b>organic shapes</b> not just possible, but remarkably easy.
                    </p>
                    <Code language={'javascript'} code={`https://9elements.github.io/fancy-border-radius/`} />
                    <img src={require('../assests/fency border.jpg')} className="img-fluid rounded mx-auto d-block" alt="..." ></img>

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
                    <img src={require('../assests/background gradiant.png')} className="img-fluid " alt="..."></img>
                  </div>
                  <div id="item-4">
                    <h4>Color palettes</h4>
                    <p>
                      <b>"Colorful Creativity: Simplifying Web Design with<strong><a target='blank' href="https://coolors.co/palettes/trending" className="text-reset" rel="noopener noreferrer"> Coolors.co</a></strong> "</b><br />
                      Choosing the right color palette is a critical step in web design, and Coolors.co makes this process both fun and efficient. The platform's "Trending" section offers a curated collection of color palettes that align with current design trends.
                    </p>
                    <img src={require('../assests/palettes.jpg')} className="img-fluid rounded mx-auto d-block" alt="..." ></img>

                  </div>
                  <div id="item-5">
                    <h4>UI Ball Loaders</h4>
                    <img src={require('../assests/uiball.png')} className="img-fluid" alt="UI Ball Loaders"></img>
                    <p>
                      <strong><a target='blank' href="https://uiball.com/ldrs/" className="text-reset" rel="noopener noreferrer">UI Ball Loaders</a></strong> provide a collection of sleek and modern loading animations designed to enhance the user experience in your web applications. These loaders are lightweight, customizable, and easy to implement, making them a great addition to any project. Below are <b>three reasons</b> why UI Ball Loaders should be your go-to choice for loading animations:<br /><br />
                    </p>

                    <p>
                      <b>1. Lightweight and Performant:</b> UI Ball Loaders are designed to be as lightweight as possible, ensuring they do not slow down your application. This is especially important for performance-sensitive applications where every millisecond counts.<br /><br />
                    </p>
                    <Code language='javascript' code={`import { Loader } from '@uiball/loaders';\n\nfunction MyLoader() {\n   return <Loader size={40} color="#4caf50" />;\n}`} />

                    <p>
                      <b>2. Customizable:</b> One of the standout features of UI Ball Loaders is their high level of customization. You can easily adjust the size, color, and animation speed to fit the aesthetic of your project, ensuring a seamless integration with your existing design.<br /><br />
                    </p>

                    <p>
                      <b>3. Wide Range of Options:</b> UI Ball Loaders offer a variety of loader styles, from spinning balls to pulsing dots, giving you the flexibility to choose the animation that best suits your application's needs.<br /><br />
                    </p>
                    <Code language='javascript' code={`import { Orbit } from '@uiball/loaders';\n\nfunction MyOrbitLoader() {\n   return <Orbit size={50} color="#ff5733" />;\n}`} />

                    <p>
                      Incorporating these loaders into your web applications can greatly enhance the user experience by providing visually appealing and responsive loading indicators. To explore more and start using UI Ball Loaders, visit the official website:
                      <strong><a target='blank' href="https://uiball.com/ldrs/" className="text-reset" rel="noopener noreferrer">UI Ball Loaders</a></strong>.
                    </p>
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
