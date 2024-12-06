import React from 'react'
import Code from './code'

function Uicomponents() {
    return (
        <>
        <div>
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <nav id="navbar-example3 " className="sidebar  ">
                                <a className="nav-link" href="#item-1">Aceternity UI</a>
                                <a className="nav-link" href="#item-2">Magic UI</a>
                                <a className="nav-link" href="#item-3">Framer Motion</a>
                                <a className="nav-link" href="#item-4">Uiverse</a>
                                <a className="nav-link" href="#item-5">shadcn/ui</a>
                            </nav>
                        </div>
                        <div className="col-8 content">
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2"     tabIndex="0">
                                <div id="item-1">
                                    <h4>Aceternity UI</h4>
                                    <p>
                                        <strong><a target='blank' href="https://ui.aceternity.com/" className="text-reset" rel="noopener noreferrer">Aceternity UI</a></strong>  is a modern, open-source UI framework that provides a set of robust components to enhance your web development projects. Whether you are building simple websites or complex web applications, aceternity UI offers the tools you need to create a polished, professional look. Here are <b>three key features</b> of aceternity UI that make it stand out:<br />
                                    </p>
                                    <img src={require('../assests/aceternity.png')} className="img-fluid" alt="..."></img>
                                    
                                    <p>
                                        <b>1. Customizable Components:</b> aceternity UI comes with a wide range of pre-built components that are highly customizable. You can easily adjust the appearance and behavior of these components to match your project's needs. From buttons and modals to complex forms, aceternity UI covers it all.<br /><br />
                                    </p>
                                    <Code language='javascript' code={`import { Button } from 'aceternity-ui';\n\nfunction MyButton() {\n   return <Button variant="primary">Click Me</Button>;\n}`} />

                                    <p>
                                        <b>2. Responsive Design:</b> Building responsive websites is essential in today’s multi-device world. aceternity UI ensures that your website looks great on any device, providing seamless integration with CSS Grid and Flexbox for fluid, responsive layouts.<br /><br />
                                    </p>
                                    <p>
                                        <b>3. Easy Integration:</b> aceternity UI is designed to integrate easily with popular JavaScript frameworks like React, Angular, and Vue. This makes it a great choice for developers who want to add a professional touch to their web applications without reinventing the wheel.<br /><br />
                                    </p>
                                    <Code language='javascript' code={`import { Modal } from 'aceternity-ui';\n\nfunction MyModal() {\n   return (\n      <Modal title="Welcome" visible={true}>\n         <p>This is a modal!</p>\n      </Modal>\n   );\n}`} />

                                    <p>
                                        By mastering aceternity UI, you can streamline your development process and create stunning user interfaces with ease. To learn more about aceternity UI, visit the official website:
                                        <strong><a target='blank' href="https://ui.aceternity.com/" className="text-reset" rel="noopener noreferrer">aceternity UI</a></strong>
                                    </p>
                                </div>

                                <div id="item-2">
                                    <h4>Magic UI</h4>
                                    <p>
                                        <strong><a target='blank' href="https://magicui.design/" className="text-reset" rel="noopener noreferrer">Magic UI</a></strong> is an innovative UI framework that focuses on simplicity and elegance, offering developers a seamless way to create beautiful and functional web interfaces. With its intuitive design and powerful features, Magic UI is an excellent choice for developers of all levels. Here are <b>three standout features</b> of Magic UI that you should know about:
                                    </p>
                                    <img src={require('../assests/magicui.png')} className="img-fluid" alt="..."></img><br /><br />

                                    <p>
                                        <b>1. Intuitive Design:</b> Magic UI prioritizes ease of use, providing a clean and intuitive design system that allows developers to build interfaces quickly and efficiently. The framework includes a variety of components that are ready to use right out of the box, making it perfect for rapid development.<br /><br />
                                    </p>
                                    <Code language='javascript' code={`import { Card } from 'magic-ui';\n\nfunction MyCard() {\n   return <Card title="Welcome" content="This is a Magic UI card." />;\n}`} />

                                    <p>
                                        <b>2. Lightweight and Fast:</b> One of the key advantages of Magic UI is its lightweight nature. It’s designed to load quickly and perform well, even on low-powered devices. This ensures that your web applications are not only visually appealing but also fast and responsive.<br /><br />
                                    </p>

                                    <p>
                                        <b>3. Versatile Components:</b> Magic UI offers a wide range of versatile components that can be easily customized to fit your project's needs. Whether you need buttons, forms, modals, or complex navigational elements, Magic UI provides a consistent and elegant solution.<br /><br />
                                    </p>
                                    <Code language='javascript' code={`import { Navbar } from 'magic-ui';\n\nfunction MyNavbar() {\n   return (\n      <Navbar title="Magic UI" links={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />\n   );\n}`} />

                                    <p>
                                        By leveraging the power of Magic UI, you can create user interfaces that are not only aesthetically pleasing but also highly functional and efficient. For more information and to start using Magic UI in your projects, visit the official website:
                                        <strong><a target='blank' href="https://magicui.design/" className="text-reset" rel="noopener noreferrer">Magic UI</a></strong>

                                    </p>
                                </div>

                                <div id="item-3">
                                    <h4>Framer Motion</h4>
                                    <p>
                                        <strong><a target='blank' href="https://www.framer.com/motion/" className="text-reset" rel="noopener noreferrer">Framer Motion</a></strong> is a powerful animation library for React that allows developers to create smooth, sophisticated animations with ease. It offers an extensive range of features that make it the preferred choice for adding dynamic motion to your web applications. Here are <b>three key features</b> that make Framer Motion stand out:
                                    </p>
                                    <img src={require('../assests/framermotion.png')} className="img-fluid" alt="Framer Motion"></img><br /><br />

                                    <p>
                                        <b>1. Declarative Animations:</b> Framer Motion enables you to create complex animations with simple, declarative syntax. This makes it easy to define animations directly within your components, improving readability and maintainability.<br /><br />
                                    </p>
                                    <Code language='javascript' code={`import { motion } from 'framer-motion';\n\nfunction MyComponent() {\n   return (\n      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>\n         Hello, world!\n      </motion.div>\n   );\n}`} />

                                    <p>
                                        <b>2. Gestures and Interactions:</b> Framer Motion isn't just about animations—it's also about making your UI interactive. It supports drag-and-drop, hover, and tap gestures, allowing you to create highly interactive user interfaces that respond smoothly to user inputs.<br /><br />
                                    </p>

                                    <p>
                                        <b>3. Powerful Animation Controls:</b> Framer Motion provides powerful controls for sequencing, coordinating, and managing complex animations. With features like `variants` and `keyframes`, you can easily create animations that respond dynamically to changes in your app's state.<br /><br />
                                    </p>
                                    <Code language='javascript' code={`import { motion } from 'framer-motion';\n\nfunction MyButton() {\n   return (\n      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>\n         Click Me\n      </motion.button>\n   );\n}`} />

                                    <p>
                                        Framer Motion is an indispensable tool for developers who want to add high-quality animations to their React applications without the complexity of traditional CSS animations. To explore more and start using Framer Motion in your projects, visit the official website:
                                        <strong><a target='blank' href="https://www.framer.com/motion/" className="text-reset" rel="noopener noreferrer">Framer Motion</a></strong>.
                                    </p>
                                </div>

                                <div id="item-4">
                                    <h4>Uiverse</h4>
                                    <p>
                                        <strong><a target='blank' href="https://uiverse.io/" className="text-reset" rel="noopener noreferrer">Uiverse</a></strong> is an online platform that provides a collection of stunning UI components and animations created by the design community. It offers a diverse range of ready-to-use, customizable elements that can enhance your web projects. Here are <b>three notable features</b> of Uiverse that can benefit your development workflow:
                                    </p>
                                    <img src={require('../assests/uiverse.png')} className="img-fluid" alt="Uiverse"></img><br /><br />

                                    <p>
                                        <b>1. Rich Collection of UI Components:</b> Uiverse hosts a vast library of UI components, including buttons, cards, and loaders, designed by talented designers. These components are free to use and can be easily integrated into your projects to add a polished, professional touch.<br /><br />
                                    </p>
                                    <Code language='html' code={`<button class="uiverse-button">Click Me</button>`} />

                                    <p>
                                        <b>2. Creative Animations:</b> The platform offers a wide variety of animations that can bring your interfaces to life. From subtle transitions to eye-catching effects, Uiverse provides the tools you need to make your web applications more engaging and interactive.<br /><br />
                                    </p>

                                    <p>
                                        <b>3. Customizable and Easy to Implement:</b> Each component and animation on Uiverse is highly customizable, allowing you to adjust styles and behaviors to fit your project's needs. The easy-to-follow implementation guides ensure you can get started quickly and efficiently.<br /><br />
                                    </p>
                                    <Code language='html' code={`<div class="uiverse-animation"></div>`} />

                                    <p>
                                        Uiverse is a valuable resource for developers looking to enhance their web applications with high-quality UI components and animations. To explore the full range of available resources and start integrating Uiverse into your projects, visit the official website:
                                        <strong><a target='blank' href="https://uiverse.io/" className="text-reset" rel="noopener noreferrer">Uiverse</a></strong>.
                                    </p>
                                </div>

                                <div id="item-5">
                                    <h4>shadcn/ui</h4>
                                    <p>
                                        <strong><a target='blank' href="https://ui.shadcn.com/" className="text-reset" rel="noopener noreferrer">shadcn/ui</a></strong> is a modern component library that combines the power of Tailwind CSS with pre-built UI components, offering a flexible and efficient way to build beautiful web applications. Here are <b>three key advantages</b> of using shadcn/ui in your projects:
                                    </p>
                                    <img src={require('../assests/shadcnui.png')} className="img-fluid" alt="shadcn/ui"></img><br/><br/>

                                    <p>
                                        <b>1. Tailwind CSS Integration:</b> shadcn/ui is built on top of Tailwind CSS, which means you get the full power of utility-first styling with the convenience of ready-to-use components. This allows for rapid development while maintaining a consistent and clean design.<br /><br />
                                    </p>
                                    <Code language='javascript' code={`import { Button } from 'shadcn-ui';\n\nfunction MyButton() {\n   return <Button variant="primary">Click Me</Button>;\n}`} />

                                    <p>
                                        <b>2. Accessible and Responsive:</b> The components in shadcn/ui are designed with accessibility in mind, ensuring that your applications are usable by everyone. Additionally, the responsive design capabilities allow your UI to look great on any device.<br /><br />
                                    </p>

                                    <p>
                                        <b>3. Customizable Components:</b> Every component in shadcn/ui is fully customizable, allowing you to tweak styles and behaviors to fit your unique design requirements. This flexibility makes it easy to adapt the library to any project, whether you're building a small website or a large-scale application.<br /><br />
                                    </p>
                                    <Code language='javascript' code={`import { Card } from 'shadcn-ui';\n\nfunction MyCard() {\n   return (\n      <Card title="Welcome" description="This is a shadcn/ui card.">\n         Your content here.\n      </Card>\n   );\n}`} />

                                    <p>
                                        shadcn/ui is a versatile and powerful tool that can streamline your development process while delivering high-quality, accessible UIs. To learn more and start using shadcn/ui in your projects, visit the official website:
                                        <strong><a target='blank' href="https://ui.shadcn.com/" className="text-reset" rel="noopener noreferrer">shadcn/ui</a></strong>.
                                    </p>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        </>
    )
}

export default Uicomponents
