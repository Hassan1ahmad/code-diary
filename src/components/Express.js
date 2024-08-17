import React from 'react'
import Code from './code'



function Express() {
  return (
    <div>
      <div className="wrapper">
    <div className="container">
    <div className="row">
      <div className="col-4">
        <nav id="navbar-example3 " className="sidebar">
          <a className="nav-link" href="#item-1">Express JS setting up</a>
          <a className="nav-link" href="#item-2">Connect to Database</a>
          <a className="nav-link" href="#item-3">Hello World Example</a>
          <a className="nav-link" href="#item-4">Schema and Model</a>
          <a className="nav-link" href="#item-5">Creating Routes</a>
          <a className="nav-link" href="#item-6">Up.. Data to MongoDB</a>
          <a className="nav-link" href="#item-7">Express Validator</a>
          <nav className="nav nav-pills flex-column">
              <a className="nav-link ms-3 my-1" href="#item-7-1">Validation Errors</a>
              <a className="nav-link ms-3 my-1" href="#item-7-2">UserName Valid..</a>
              <a className="nav-link ms-3 my-1" href="#item-7-3">Email Validation</a>
              <a className="nav-link ms-3 my-1" href="#item-7-4">Password Validation</a>
            </nav>
         <a className="nav-link" href="#item-8">Middleware</a>


        </nav>
      </div>
      <div className="col-8 content">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0">
          <div id="item-1">
          <h4><p>Getting Started with Express.js: A Quick Guide</p></h4>
          

            <p> In this guide, we'll take you through the initial steps to set up a basic Express.js project. </p>

            <p><strong>Step 1:</strong> Setting Up Your Project</p>
            <Code language='javascript' code={`npm init`}/>

            <p>This command will prompt you to provide information about your project, such as the name, version, entry point, and more. Follow the prompts to create your <code>package.json</code> file.</p>

            <p><strong>Step 2:</strong> Installing Express.js</p>

            <Code language='javascript' code={`npm install express`}/>

            <p>This will download and install the Express.js framework, allowing you to easily build web applications.</p>

            <p><strong>Step 3:</strong> Adding MongoDB with Mongoose (Optional)</p>

            <p>If you plan to use MongoDB as your backend database, you can integrate it with Express using <strong>Mongoose</strong>. Install Mongoose by running:</p>

            <Code language='javascript' code={`npm install mongoose`}/>

            <p>Mongoose simplifies the process of interacting with MongoDB and provides a convenient way to define data schemas.</p>

            <p><strong>Install Nodemon</strong> Nodemon automatically restarts your Node.js server on code changes, saving time and improving development efficiency.</p>

            <Code language='javascript' code={`npm install --save-dev nodemon`}/>

            <p><strong>Step 4:</strong> Installing ThunderClient (Optional)</p>

            <p>For testing your API endpoints, <strong>ThunderClient</strong> is a great extension for Visual Studio Code. You can install it by searching for "ThunderClient" in the Extensions tab.</p>
            
        </div>
          <div id="item-2">
            <h4>Connect to Database</h4>
            <p>Create db.js file in your project file. Add these lines</p>
            <Code language='javascript' code={`// Importing mongoose library\nconst mongoose = require('mongoose');\n\n// MongoDB connection URL\nconst mongooseURL = 'mongodb://127.0.0.1/yourprojectname';\n\n// Function to connect to MongoDB\nconst connectToMongoose = async () => {\n    try {\n        // Await the connection to MongoDB\n        await mongoose.connect(mongooseURL);\n        console.log('Connected to MongoDB');\n    } catch (error) {\n        console.log('Connection failed', error.message);\n    }\n};\n\n// Exporting the connectToMongoose function\nmodule.exports = connectToMongoose;
            `}/>


            <p><strong>Explanation:</strong></p>

            <p>In the code snippet:</p>

            <ul>
                <li><code>mongoose</code> is imported to use the Mongoose library.</li>
                <li><code>mongooseURL</code> contains the URL to connect to the local MongoDB instance with the database name.</li>
                <li>The <code>connectToMongoose</code> function is defined, which is an asynchronous function. It attempts to connect to the MongoDB server using <code>mongoose.connect()</code>.</li>
                <li>If the connection is successful, it logs a success message; otherwise, it logs an error message with the details of the connection failure.</li>
                <li>The <code>connectToMongoose</code> function is exported for use in other parts of your application.</li>
            </ul>

            <p>Then create index.js file and This module (in <code>db.js</code>) can be then imported and called.</p>

            <Code language='javascript' code={`// Importing the connectToMongoose function from the 'db' module\nconst connectToMongo = require('./db');\n\n// Calling the connectToMongoose function to establish a connection to MongoDB\n     
            connectToMongo();
            `}/>


            <p><strong>Explanation:</strong></p>

            <p>In the code snippet:</p>

            <ul>
                <li><code>connectToMongo</code> is a reference to the <code>connectToMongoose</code> function imported from the 'db' module.</li>
                <li>The <code>connectToMongo</code> function is then called, initiating the connection to the local MongoDB database.</li>
                <li>This step is essential to ensure that your application connects to the database when it starts.</li>
            </ul>

            <p>To check if the connection is successful, run the following command in your terminal:</p>

            <Code language='bash' code={`nodemon ./index.js`}/>

            <p>If the connection is successful, you should see the log message "Connected to MongoDB" in the terminal. If there is an issue, an error message will be displayed, helping you identify and troubleshoot the problem.</p>


          </div>
          <div id="item-3">
            <h4>Hello world Example</h4>
            <Code language='javascript' code={` // Importing the connectToMongoose function from the 'db' module\nconst connectToMongo = require('./db');\n\n// Calling the connectToMongoose function to establish a connection to MongoDB\nconnectToMongo();\n\n// Importing the express library\nconst express = require('express');\n\n// Creating an instance of the express application\nconst app = express();\n\n// Port number for the server to listen on\nconst port = 5000;\n\n// Creating a route that responds with 'Hello world' for requests to the root URL\napp.get('/', (req, res) => {\n  res.send('Hello world');\n});\n\n// Starting the server and listening on the specified port\napp.listen(port, () => {\n  console.log(\`Example app listening on port http://localhost:\${port}\`);\n});
            `}/>

            <p><strong>Explanation:</strong></p>

            <p>In the code snippet:</p>

            <ul>
                <li><code>connectToMongo</code> is called to establish a connection to the local MongoDB database.</li>
                <li><code>express</code> is imported and an instance of the <code>express</code> application is created using <code>const app = express();</code>.</li>
                <li>The variable <code>port</code> is set to 5000, specifying the port on which the server will listen.</li>
                <li>A simple route is defined using <code>app.get()</code> that responds with 'Hello world' when a GET request is made to the root URL ("/").</li>
                <li>The server is started using <code>app.listen()</code>, and a log message is printed to the console indicating that the server is listening on the specified port.</li>
            </ul>

            <p>After adding these lines, running your Express application (e.g., using <code>nodemon ./index.js</code>) should start the server. Visit <code>http://localhost:5000</code> in your browser or a tool like ThunderClient to see the "Hello world" response.</p>

          </div>
          <div id="item-4">
            <h4>Mongoose schema</h4>
            <p>
            In MongoDB, a schema is a blueprint for defining the structure of documents in a collection.
            It specifies the fields, data types, and validation rules for documents.
            Schemas ensure uniformity in data and facilitate organized storage.
            </p>

            <p>
            <strong>Why Use Schema:</strong>
            </p>
            <ul>
            <li><strong>Structure:</strong> Defines the structure of documents with named fields.</li>
            <li><strong>Validation:</strong> Enforces data validation rules to maintain data integrity.</li>
            <li><strong>Consistency:</strong> Ensures uniformity across documents in the collection.</li>
            <li><strong>Clarity:</strong> Improves code readability and understanding of data models.</li>
            <li><strong>Security:</strong> Helps prevent data inconsistencies and potential errors.</li>
            </ul>

            <p>
            <strong>Example:</strong> A user schema may include fields like username, email, and password, each with specific data types and validation rules.
            </p>
            <Code language='javascript' code={`// Importing mongoose library\nconst mongoose = require('mongoose');\nconst { Schema } = mongoose;\n\n// Defining a schema for the 'user' collection\nconst userSchema = new Schema({\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true,\n        unique: true\n    }\n});\n\n// Creating a model for the 'user' collection using the defined schema\nmodule.exports = mongoose.model('user', buyerSchema);
            `}/>

            <p><strong>Explanation:</strong></p>

            <p>In the code snippet:</p>

            <ul>
                <li><code>mongoose</code> library is imported, and the <code>Schema</code> object is extracted from it.</li>
                <li>A schema named <code>userSchema</code> is defined using the <code>Schema</code> constructor. It specifies the structure of documents in the 'user' collection.</li>
                <li>The <code>buyerSchema</code> includes fields like <code>username</code>, <code>email</code>, and <code>password</code>, each with its own data type and optional properties such as <code>required</code> and <code>unique</code>.</li>
                <li>The <code>mongoose.model()</code> function is used to <strong>create a model</strong>  for the 'Buyer' collection based on the defined schema. This model can be used to perform CRUD (Create, Read, Update, Delete) operations on the 'Buyer' collection.</li>
                <li>The model is then exported for use in other parts of the application.</li>
            </ul>

            <p>This schema defines the structure of documents that will be stored in the 'Buyer' collection. It ensures that documents adhere to a specific format, making it easier to manage and query the data in MongoDB.</p>


          </div>
          <div id="item-5">
            <h4>Routes</h4>
            <p>
            Routes define the paths or endpoints that users can access in an application.
            They map specific URLs to functions or handlers, allowing developers to organize and control the flow of requests.
            </p>

            <p>
            <strong>Why Use Routes:</strong>
            </p>
            <ul>
            <li><strong>Modularity:</strong> Routes help organize code by separating concerns and functionalities.</li>
            <li><strong>Maintainability:</strong> Easier to manage and update specific features or sections of an application.</li>
            <li><strong>Readability:</strong> Improves code readability and makes it easier to understand the application's structure.</li>
            <li><strong>Scalability:</strong> Facilitates the addition of new features without disrupting the existing codebase.</li>
            </ul>
        <Code language='javascript' code={`const express = require('express');\nconst router = express.Router();\n\nrouter.get('/', (req, res) => {\n  obj = {\n    nam: 'hello',\n    num: '23'\n  };\n  res.json(obj);\n});\n\nmodule.exports = router;`} />
        <p><strong>Explanation:</strong></p>

        <p>In the code snippet:</p>

        <ul>
            <li>An <code>express.Router()</code> instance is created to define routes in a modular way.</li>
            <li>A route is defined for the root URL ('/') using <code>router.get()</code>, which responds with a JSON object containing a name ('hello') and a number ('23').</li>
            <li>The router is exported for use in index.js.</li>
        </ul>

        <p>Now, connect these routes to the 'index.js' file by adding this:</p>

        <Code language='javascript' code={`// Available routes\napp.use('/api/routes', require('./routes/router'))`} />

        <p><strong>Explanation:</strong></p>

        <p>In the 'index.js' file:</p>

        <ul>
            <li>The routes defined in 'router.js' are connected to the main app using <code>app.use()</code>.</li>
            <li>The routes are now accessible under the '/api/routes' path.</li>
            <li>By hitting the URL 'http://localhost:5000/api/routes/', the JSON object defined in the route will be returned.</li>
        </ul>


          </div>
          <div id="item-6">
            <h4>Uploading Data to MongoDB Using Express.js</h4>     
          <p>
            In this section, we'll explore how to upload data to a MongoDB database using Express.js.
            For demonstration purposes, we'll consider a scenario where we want to add a new user to our 'User' collection.
          </p>
          <p>
            <strong>Setting Up the Express Route</strong>
          </p>
          <Code language='javascript' code={`const express = require('express');\nconst router = express.Router();\nconst User = require('../models/userSchema');\n\n// Define a route for handling data upload\nrouter.post('/', async (req, res) => {\n  try {\n    // Create a new user instance based on the incoming request body\n    const newUser = new User(req.body);\n\n    // Save the new user to the database\n    await newUser.save();\n\n    // Send a JSON response indicating successful data upload\n    res.json({ message: 'User data uploaded successfully!' });\n  } catch (error) {\n    // Handle any errors that occur during the upload process\n    res.status(500).json({ error: error.message });\n  }\n});\n\nmodule.exports = router;`} />

          <p>
          <strong>Explanation:</strong>
        </p>
        <ul>
          <li>We've defined a route using <code>router.post('/')</code> to handle POST requests, as data uploads typically involve sending data in the request body.</li>
          <li>Inside the route handler, we create a new instance of the <code>User</code> model using the data from the request body.</li>
          <li>We then use the <code>save()</code> method to persist the new user data to the MongoDB database.</li>
          <li>If the data upload is successful, a JSON response with a success message is sent. In case of any errors, a 500 Internal Server Error response is sent along with an error message.</li>
        </ul>
        <p>
          <strong>Using the Route in Your Application</strong>
          <p>Do not forget to Import the route module in index.js</p>
        </p>
        <Code language='javascript' code={`// Import the route module\napp.use('/api/upload', require('./routes/uploadRoute'));`} />



          </div>
          <div id="item-7">
            <h4>Validating Data with Express Validator</h4>

        <p>
          In Express.js, data validation is a crucial step to ensure the integrity and accuracy of information processed by your application. Express Validator is a middleware that simplifies the process of validating and sanitizing user input.
        </p>

        <p>
          <strong>Setting Up Express Validator</strong>
        </p>

        <p>
          To use Express Validator, first, install it as a dependency:
        </p>
        <Code language='bash' code={`npm install express-validator`} />
        <p>
        Next, integrate it into your Express application by importing the necessary functions in our router:
      </p>
      <Code language='javascript' code={`const { body, validationResult } = require('express-validator');`} />
          <p>
        Place the  validation rules s between the route path (<code>'/yourRouteName'</code>) and the request and response parameters (<code>(req, res)</code>).
      </p>
      <p>
        Similar validations for other fields  can be added in the same manner within the array of validations.
      </p>
      


          </div>
          <div id="item-7-1">
            <h4>Handling Validation Errors</h4>
        <p>
          When using Express Validator for form validation, handling validation errors is crucial for providing meaningful feedback to clients. Let's explore how to check for validation errors and send a helpful response to clients when validation fails.
        </p>

        <p>
          <strong>Checking for Validation Errors</strong>
        </p>

        <p>
          After performing validation using Express Validator, you can check for errors using the <code>validationResult</code> function:
        </p>

        <Code language='javascript' code={`const errors = validationResult(req);`} />

        <p>
          <strong>Sending a Response on Validation Failure</strong>
        </p>

        <p>
          If validation errors are present, you can respond with a 400 Bad Request status and include an array of error messages in the response body:
        </p>

        <Code language='javascript' code={`if (!errors.isEmpty()) {\n  return res.status(400).json({\n    errors: errors.array().map(error => error.msg)\n  });\n}`} />


        <p>
          <strong>Explanation:</strong>
        </p>

        <ul>
          <li>
            <code>validationResult(req)</code>: Collects validation errors from the request object.
          </li>
          <li>
            The <code>isEmpty()</code> method checks if there are any validation errors.
          </li>
          <li>
            If errors are present, the response includes a 400 Bad Request status and an array of error messages extracted from the validation result.
          </li>
        </ul>

        <p>
          <strong>Customizing Error Messages</strong>
        </p>

        <p>
          You can customize error messages during validation by using the <code>withMessage</code> method. The provided error messages will be included in the response when validation fails.
        </p>

        <Code language='javascript' code={`body('username')\n  .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long')\n  .isAlpha().withMessage('Username can only contain letters'),`} />


        <p>
          <strong>Conclusion</strong>
        </p>

        <p>
          Properly handling validation errors in your Express.js application ensures clear communication with clients, helping them understand and correct input issues. Implementing meaningful error messages enhances the overall user experience and aids in debugging during development.
        </p>

          </div>
          <div id="item-7-2">
          <h4>UserName Validation</h4>
        <p>
          When validating UserName Validation in your Express application using Express Validator, you can apply specific rules to ensure the correctness and security of the provided UserName. Below are the validation rules for an Username field:
        </p>
        <Code language='javascript' code={`body('username').isLength({ min: 4, max: 20 }).withMessage('Username must be between 4 and 20 characters')\n    .isAlpha().withMessage('Username can only contain letters'),`} />
        <p>
          <strong>Explanation:</strong>
        </p>

        <ul>
          <li>
            <code>isLength 'min: 4, max: 20' </code>: Ensures that the username is between 4 and 20 characters in length.
          </li>
          <li>
            <code>isAlpha()</code>: Specifies that the username can only contain alphabetical characters (letters).
          </li>
          <li>
            The <code>withMessage</code> method is used to provide a custom error message in case the validation fails.
          </li>
        </ul>

        <p>
          These validations help enhance the security of your application by ensuring that the entered username adheres to specified criteria.
        </p>

          </div>
          <div id="item-7-3">
            <h4>Email Validation</h4>
            <p>
              Continuing with email validation in your Express application, you can include additional checks such as verifying if the email is already in use. Add the following validation rules for the 'email' field within your route handler:
            </p>
            <Code language='javascript' code={`body('email').isEmail().withMessage('Not a valid e-mail address')\n.custom(async value => {\n    const repeatedemail = await user.findOne({email:value});\n    if (repeatedemail) { throw new Error('E-mail already in use'); }\n}),`} />
            <p>
              <strong>Explanation:</strong>
            </p>

            <ul>
              <li>
                The <code>isEmail()</code> method checks if the entered value is a valid email address.
              </li>
              <li>
                The <code>custom()</code> method allows you to add a custom validation function. In this case, it checks if the email is already in use by querying the database.
              </li>
              <li>
                If the email is already in use, an error is thrown, and the error message is included in the response.
              </li>
            </ul>

            <p>
              These additional checks enhance the validation process, ensuring that the email is both correctly formatted and not already registered in your application.
            </p>

          </div>
          <div id="item-7-4">
            <h4>Password Validation</h4>
              <p>
                Including validation for the password and password confirmation fields in your Express application is crucial for ensuring secure user registration. Add the following validation rules for the 'password' and 'passwordConfirmation' fields within your route handler:
              </p>
              <Code language='javascript' code={`// ========Validation for password========\nbody('password').isLength({min : 5})\n.notEmpty().withMessage('Username is required')\n\n// ========Validation for passwordconfirmation========\nbody('passwordConfirmation').custom((value, { req }) => {\n    if( value !== req.body.password){\n        throw new Error('Password confirmation does not match password');\n    }\n    return true;\n}),`} />

              <p>
                <strong>Explanation:</strong>
              </p>

              <ul>
                <li>
                  Add the password validation rules for the 'password' field within the route handler, between the route path (<code>'/register'</code>) and the request and response parameters (<code>(req, res)</code>).
                </li>
                <li>
                  The <code>isLength( min: 5 )</code> method ensures that the password is at least 5 characters long.
                </li>
                <li>
                  Add the password confirmation validation rules for the 'passwordConfirmation' field, ensuring that it matches the entered password.
                </li>
                <li>
                  If the password or password confirmation does not meet the specified criteria, an error is thrown, and the error message is included in the response.
                </li>
              </ul>

              <p>
                These validations contribute to the overall security and integrity of user registration in your application.
              </p>

          </div>
          <div id="item-8">
            <h4>Creating Custom Middleware in Express.js</h4>
          <p>
            Middleware functions in Express.js allow you to execute code during the request-response cycle. Creating custom middleware enhances the flexibility and modularity of your application. Let's explore how to design and implement custom middleware to handle various tasks in your Express.js application.
          </p>

          <p>
            <strong>Understanding Middleware in Express</strong>
          </p>

          <p>
            Middleware functions have access to the request object (<code>req</code>), the response object (<code>res</code>), and the next middleware function in the application's request-response cycle (<code>next</code>). They can perform tasks, modify request and response objects, or terminate the request-response cycle.
          </p>

          <p>
            <strong>Creating a Basic Middleware</strong>
          </p>

          <p>
            Start by creating a basic middleware function. The following example logs a message to the console for every incoming request:
          </p>

          <Code language='javascript' code={`const logRequest = (req, res, next) => {\n    console.log('Incoming Request:', req.method, req.url);\n    next();\n};\n\napp.use(logRequest);`} />


          <p>
            <strong>Creating Parameterized Middleware</strong>
          </p>

          <p>
            Middleware can take parameters for dynamic behavior. Here's an example of a parameterized middleware that logs a custom message:
          </p>

          <Code language='javascript' code={`const customLogger = (message) => (req, res, next) => {\n    console.log(message);\n    next();\n};\n\napp.use(customLogger('Custom Middleware Logging'));`} />


          <p>
            <strong>Using Middleware in Specific Routes</strong>
          </p>

          <p>
            Apply middleware to specific routes using the <code>use</code> method or directly in the route definition:
          </p>

          <Code language='javascript' code={`// Apply middleware to all routes\napp.use(logRequest);\n\n// Apply middleware to a specific route\napp.get('/special-route', customLogger('Special Route Logging'), (req, res) => {\n  res.send('This is a special route!');\n});`} />


          <p>
            <strong>Order of Middleware Execution</strong>
          </p>

          <p>
            Middleware functions are executed in the order they are defined. Ensure the sequence matches your intended flow of tasks.
          </p>

          <p>
            <strong>Conclusion</strong>
          </p>

          <p>
            Creating custom middleware in Express.js provides a powerful way to modularize your application and handle various aspects of the request-response cycle. Whether logging, authentication, or custom processing, middleware allows you to inject additional functionality into your routes with ease.
          </p>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}

export default Express
