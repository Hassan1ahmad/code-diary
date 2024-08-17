import React from 'react'
import Code from './code'
import './reactjs.css'

function Reactjs() {
  return (
    <div className="wrapper">
    <div className="container">
    <div className="row">
      <div className="col-4">
        <nav id="navbar-example3" className="sidebar">
          <a className="nav-link" href="#item-1">Create React App</a>
          <a className="nav-link" href="#item-2">Deploy on Git</a>
          <a className="nav-link" href="#item-3">React Router dom</a>
          <a className="nav-link" href="#item-4">Redux Toolkit</a>
              <nav className="nav nav-pills flex-column">
              <a className="nav-link ms-3 my-1" href="#item-4-1">Create Slice</a>
              <a className="nav-link ms-3 my-1" href="#item-4-2">Store</a>
            </nav>
            <a className="nav-link" href="#item-5">React Router 6.0</a>
        </nav>
      </div>
      <div className="col-8 content">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0">
          <div id="item-1">
            <h4>Create React App</h4>
            <p>
           <b>Open VS Code:</b>   Start Visual Studio Code.<br/>
            <b>Open Terminal:</b>  Use the shortcut Ctrl + ~ or navigate to View  Terminal to open the integrated terminal in VS Code.
           </p>
           <Code language={'javascript'} code={`npx create-react-app my-app`} />
           <p>
           In place of my-app , place your app name.<br/>
           <b>Start the Development Server:</b> Run the command:
            </p>
           <Code language={'javascript'} code={`npm start`} />
          </div>
          <div id="item-2">
            <h4>Deploy React app on Git Pages</h4>
            <p>
            Deploying a React app on <b>GitHub Pages</b> is a popular choice for showcasing projects without incurring hosting costs. Let's walk through the straightforward steps to get your React app live on GitHub Pages:
          </p>
          <p>
            <b>1. Install 'gh-pages':</b> Begin by adding the <code>gh-pages</code> package to your project. Execute <code>npm install gh-pages --save-dev</code>. This package enables you to deploy the build folder directly to GitHub.
          </p>
          <Code language={'javascript'} code={`npm install gh-pages --save-dev`} />
          <p>
            <b>2. Modify package.json:</b> Navigate to your <code>package.json</code> file and introduce the following line: <code>"homepage": "http://[username].github.io/[repo-name]"</code>. Remember to replace <code>[username]</code> with your actual GitHub username and <code>[repo-name]</code> with the name of your GitHub repository.
          </p>
          <Code language={'javascript'} code={`"homepage": "http://[username].github.io/[repo-name]"`} />
          <p>
            <b>3. Add Deploy Scripts:</b> Staying within <code>package.json</code>, locate the <code>"scripts"</code> section. Here, incorporate these lines:
            </p>
            <pre>
            "predeploy": "npm run build",
            "deploy": "gh-pages -d build"
            </pre>
            This configuration ensures that GitHub will first build your React app prior to deploying it.
          
          <Code language='javascript' code={`"predeploy": "npm run build",\n"deploy": "gh-pages -d build"`} />
          <p>
            <b>4. Deploy:</b> With everything set up, it's time to deploy. Just run <code>npm run deploy</code>. This command will both build your React app and deploy it to GitHub Pages.
          </p>
          <Code language={'javascript'} code={`npm run deploy`} />
          <p>
            <b>5. Configure GitHub Repository:</b> Lastly, head over to your GitHub repository settings. Under the <b>GitHub Pages</b> section, confirm that the source is designated as the <code>gh-pages branch</code>. 
          </p>

          <p>
            Congratulations! Your React app should now be accessible and live on GitHub Pages. Just head over to the URL you mentioned in the <code>"homepage"</code> section of your <code>package.json</code> to marvel at your deployed application.
          </p>

          </div>
          <div id="item-3">
            <h4>React Router dom</h4>
            <p>
             React Router is a crucial library for handling page routing in React applications, as React doesn't provide it out-of-the-box.
          </p>

          <p>
            <b>Adding React Router dom:</b> To integrate React Router dom into your project, you can easily install it via your terminal using the following command:
          </p>
          <Code language='javascript' code={`npm i -D react-router-dom`} />
          <p>
            <b>Import it in app.js:</b> After installing React router dom, import it in the app.js
          </p>
          <Code language='javascript' code={`import { BrowserRouter, Routes, Route } from "react-router-dom";`} />
          <p>
             <b>Add routers:</b> Now ,add routes in the app.js 
          </p>
          <Code language='javascript' code={`<BrowserRouter>\n  <Routes>\n    <Route index element={<Home />} />\n    <Route path="/about" element={<About />} />\n    <Route path="/contact me" element={<Contact me />} />\n  </Routes>\n</BrowserRouter>`} />
          <p>
             <b>Add navigation:</b> Make all the Navigation links using <code>&lt;Link&gt;</code>  tag, like this:
          </p>
          <Code language='javascript' code={`<Link to="/">Home</Link> \n<Link to="/about">About</Link> \n<Link to="/contact me">Contact me</Link>`} />


          </div>
          <div id="item-4">
            <h4>Redux Toolkit</h4>
            <p>
            <b>Step 1: Installing Redux Toolkit</b><br/>
            To get started with Redux Toolkit, you need to install it using npm . Here's how you can install it using npm:
          </p>
          <Code language='javascript' code={`npm install @reduxjs/toolkit`} />


          <p>
            This command will download and install the Redux Toolkit package in your project.
          </p>

          <p>
            <b>Step 2: Adding React Bindings</b><br/>
            If you're working with React and want to connect your components to the Redux store, you'll need the react-redux library. Install it by running the following command:
          </p>

          <Code language='javascript' code={`npm install react-redux`} />


          <p>
            <code>react-redux</code> provides the necessary tools to connect your React components to the Redux store, allowing you to access and update the state in a more straightforward way.
</p>

          </div>
          <div id="item-4-1">
            <h4>Create slice</h4>
                      <p>
            Redux Toolkit is a powerful library for <strong>streamlining state management</strong> in your React applications. It simplifies the process of setting up your Redux store and managing state. Let's look at how you can <strong>create, update, and access your application's state</strong> using Redux Toolkit.
          </p>

          <p>
            To get started with Redux Toolkit, you need to <strong>set up your Redux store</strong>. This is typically done in a separate file, such as store.js. You'll configure your store using configureStore from @reduxjs/toolkit, and you can include <strong>multiple slices</strong> to manage different parts of your application's state.
          </p>

          <p>
            In each slice, you define the <strong>initial state</strong>, along with <strong>reducers</strong> and <strong>actions</strong> that specify how the state can be modified. Here's an example of a counter slice:
          </p>

          <Code language='javascript' code={`// counterSlice.js\nimport { createSlice } from '@reduxjs/toolkit';\n\nconst counterSlice = createSlice({\n  name: 'counter', // Name for the slice\n  initialState: 0,  // Initial state\n  reducers: {\n    increment: (state) => {\n      return state + 1;\n    },\n    decrement: (state) => {\n      return state - 1;\n    },\n  },\n});\n\nexport const { increment, decrement } = counterSlice.actions;\n\nexport default counterSlice.reducer;`} />


          <p>
            In this example, we create a slice named <strong>'counter'</strong> with an initial state of <strong>0</strong>. We define two reducers, <strong>'increment'</strong> and <strong>'decrement'</strong>, which modify the state by increasing or decreasing it by <strong>1</strong>. The  line exports the action creators for these actions.
          </p>

          <p>
            Now, you can <strong>dispatch actions</strong> in your React components to interact with the state. For instance, you can dispatch the <strong>'increment'</strong> action when the user clicks an button to increment the counter.
          </p>

          <Code language='javascript' code={`// In your React component\nimport { useDispatch, useSelector } from 'react-redux';\nimport { increment, decrement } from './counterSlice'; // Import your counter slice\n\nfunction Counter() {\n  const dispatch = useDispatch();\n  const counter = useSelector(state => state.counter); // Select the 'counter' state\n\n  const handleIncrement = () => {\n    dispatch(increment());\n  }\n\n  const handleDecrement = () => {\n    dispatch(decrement());\n  }\n\n  return (\n    <div>\n      <p>Counter: {counter}</p>\n      <button onClick={handleIncrement}>Increment</button>\n      <button onClick={handleDecrement}>Decrement</button>\n    </div>\n  );\n}
`} />


          <p>
            Redux Toolkit and slices make state management in your React application more efficient and maintainable. They <strong>reduce boilerplate code</strong> and <strong>encourage modularization</strong>, making it easier to develop and maintain your application's state.
          </p>

          </div>
          <div id="item-4-2">
            <h4>Store</h4>
            <Code language='javascript' code={`// store.js\nimport { configureStore } from '@reduxjs/toolkit';\nimport counterReducer from './counterSlice'; // This is where the slice will be defined\n`} />
            <p>
            <b>Importing configureStore</b><br/>
            In this part of the code, we initiate the process by importing the configureStore function from the @reduxjs/toolkit library. This function serves as a crucial tool for configuring and creating the Redux store.
          </p>

          <p>
            <b>Importing counterReducer</b><br/>
            Additionally, we import the counterReducer from the 'counterSlice' file. This import statement is used to associate the 'counter' part of the state with its corresponding reducer. However, it's essential to note that the actual implementation of this reducer is defined within the 'counterSlice' file. Think of this as a preparatory step to link the reducer to a specific section of the state.
          </p>
          <p>
          Now, let's look at the configuration of the Redux store:
          </p>

          <Code language='javascript' code={`const store = configureStore({\n  reducer: {\n    counter: counterReducer, // We will define the counterSlice next\n  },\n});`} />
          <p>
          <b>Creating the Redux Store</b><br/>
          We initiate the creation of the Redux store by invoking the configureStore function. Within this function, we provide an object with a reducer property.
        </p>

        <p>
          <b>The Reducer Property</b><br/>
          The reducer property within the configureStore function is an object that maps various segments of the application's state to their respective reducers. In this instance, we are defining a 'counter' part of the state and associating it with the counterReducer (which will be defined in the 'counterSlice' but is not yet defined at this point).
        </p>

        <p>
          <b>Store Structure</b><br/>
          This setup establishes the structure of the Redux store, precisely specifying which reducers are responsible for managing different sections of the state.
        </p>

        <p>
        Finally, let's export the configured store:
        </p>
        <Code language='javascript' code={`export default store;`} />

        <p>
        <b>Exporting the Redux Store</b><br/>
        We conclude this code by exporting the store object. This action makes the store available for use throughout other parts of your application. The store, in essence, will act as the central repository for managing your application's state.
      </p>

      <p>
        <b>Summary</b><br/>
        To summarize, this code establishes the Redux store using Redux Toolkit. It imports the required functions, preparing to connect the 'counter' section of the state to its corresponding reducer (which will be defined in the 'counterSlice' file). The configured store is then made accessible for use in the remainder of the application.
      </p>



          </div>
          <div id="item-5">
  <h4>Setting Up React Router DOM</h4>
  <p>
    <b>Open Terminal:</b> Use the shortcut Ctrl + ~ or navigate to View → Terminal to open the integrated terminal in VS Code.<br/>
    <b>Install React Router DOM:</b> Run the command:
  </p>
  <Code language={'javascript'} code={`npm install react-router-dom@6`} />

  <p>
    <b>Set Up Routing in index.js:</b> Use the <code>createBrowserRouter</code> and <code>RouterProvider</code> for routing. Example:
  </p>
  <Code language={'javascript'} code={`import * as React from "react";\nimport * as ReactDOM from "react-dom/client";\nimport { createBrowserRouter, RouterProvider } from "react-router-dom";\nimport "./index.css";\n\nconst router = createBrowserRouter([\n  {\n    path: "/",\n    element: <div>Hello world!</div>,\n  },\n]);\n\nReactDOM.createRoot(document.getElementById("root")).render(\n  <React.StrictMode>\n    <RouterProvider router={router} />\n  </React.StrictMode>\n);`} />

  <p>
    <b>Create Component Files:</b> Define the components you want to render at different routes, and update the router configuration accordingly. Example for a <code>Home.js</code> component:
  </p>
  <Code language={'javascript'} code={`function Home() {\n  return <h1>Home Page</h1>;\n}\n\nexport default Home;`} />

  <p>
    Similarly, create an <code>About.js</code> component:
  </p>
  <Code language={'javascript'} code={`function About() {\n  return <h1>About Page</h1>;\n}\n\nexport default About;`} />

  <p>
    <b>Update the Router Configuration:</b> Update the <code>router</code> configuration in your <code>index.js</code> file to include these components:
  </p>
  <Code language={'javascript'} code={`const router = createBrowserRouter([\n  {\n    path: "/",\n    element: <Home />,\n  },\n  {\n    path: "/about",\n    element: <About />,\n  },\n]);`} />

  <p>
    <b>Example with Nested Routes:</b> If you have a layout component that includes a navbar and other shared UI elements, you can structure your router like this:
  </p>
  <Code language={'javascript'} code={`function App() {\n  const router = createBrowserRouter([\n    {\n      path: "/",\n      element: <Layout />,  // Wrap your layout including the navbar here\n      children: [\n        {\n          path: "/",\n          element: <Home />,\n        },\n        // You can add more routes here if needed\n      ],\n    },\n  ]);\n\n  return (\n    <RouterProvider router={router} />\n  );\n}`} />
</div>


          <div id="item-5">
            <h4>Item 5</h4>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Reactjs
