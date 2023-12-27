import React from 'react'
import Code from './code'


function Npm() {
  return (
    <div>
      <div className="wrapper">
    <div className="container">
    <div className="row">
      <div className="col-4">
        <nav id="navbar-example3 " className="sidebar">
          <a className="nav-link" href="#item-1">Bcrypt</a>
          <a className="nav-link" href="#item-2">JWT</a>
          <a className="nav-link" href="#item-3">Cookie-Parser</a>
        </nav>
      </div>
      <div className="col-8 content">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0">
          <div id="item-1">
          <h4>Securing Passwords with bcrypt</h4>
        <p>
        In web development, securing user passwords is a top priority. One widely used library for password hashing is bcrypt. Let's explore how to install and use bcrypt to enhance the security of user credentials in your Node.js application.
        </p>

        <p>
        <strong>Installing bcrypt</strong>
        </p>

        <p>
        To get started, install bcrypt as a dependency using npm:
        </p>

        <Code language='javascript' code={`npm install bcrypt`} />

        <p>
        <strong>Using bcrypt in Your Node.js Application</strong>
        </p>

        <p>
        Once installed, integrate bcrypt into your application by requiring it at the top of your file:
        </p>

        <Code language='javascript' code={`const bcrypt = require('bcrypt');`} />

        <p>
        <strong>Hashing Passwords</strong>
        </p>

        <p>
        To hash a password, use the following code. The salt rounds determine the complexity of the hashing algorithm.
        </p>
        <Code language='javascript' code={`const plaintextPassword = 'userPassword123';\nconst saltRounds = 10;\n\nconst hashedpassword = await bcrypt.hash(plaintextPassword, saltRounds)\n// do not forget to use async/await, because it returns a promise`} />


        <p>
        <strong>Verifying Passwords</strong>
        </p>

        <p>
        When verifying passwords during login, compare the entered password with the stored hashed password.
        </p>
        <Code language='javascript' code={`const enteredPassword = 'userEnteredPassword123';\n\n// Assuming hashedPassword is retrieved from the database\nconst comparePassword = await bcrypt.compare(enteredPassword, hashedPassword);`} />


        <p>
        <strong>Conclusion</strong>
        </p>

        <p>
        bcrypt is a robust library for securely hashing and verifying passwords. By incorporating it into your Node.js application, you can ensure the protection of user credentials against unauthorized access.
        </p>

          </div>
          <div  id="item-2">
            <h4>Securing Your Node.js Application with JWT Tokens</h4>
            <p>
            JSON Web Tokens (JWT) are a popular way to secure communication between different parts of a web application. In this guide, we'll explore how to use JWT tokens in your Node.js application for enhanced authentication and authorization.
            </p>

            <p>
            <strong>Installing jsonwebtoken</strong>
            </p>

            <p>
            Start by installing the jsonwebtoken package using npm:
            </p>

            <Code language='javascript' code={`npm install jsonwebtoken`} />

            <p>
            <strong>Creating and Verifying JWT Tokens</strong>
            </p>

            <p>
            After installation, integrate jsonwebtoken into your application by requiring it at the top of your file:
            </p>

            <Code language='javascript' code={`const jwt = require('jsonwebtoken');`} />

            <p>
            <strong>Generating JWT Tokens</strong>
            </p>

            <p>
            To generate a JWT token, use the following code. Customize the payload with user information and a secret key for signing the token.
            </p>

            <Code language='javascript' code={`const userPayload = { userId: '123', username: 'john_doe' };\nconst secretKey = 'yourSecretKey';\n\nconst token = jwt.sign(userPayload, secretKey, { expiresIn: '1h' });\nconsole.log('Generated Token:', token);`} />


            <p>
            <strong>Verifying JWT Tokens</strong>
            </p>

            <p>
            When receiving a token from a client, verify its authenticity using the secret key. The decoded payload will be available for further processing.
            </p>

            <Code language='javascript' code={`const receivedToken = '...'; // Received from the client\n\njwt.verify(receivedToken, secretKey, (err, decoded) => {\n    if (err) {\n        console.error('Token verification failed:', err.message);\n        // Handle unauthorized access\n    } else {\n        console.log('Decoded Payload:', decoded);\n        // Proceed with authorized actions\n    }\n});`} />


            <p>
            <strong>Conclusion</strong>
            </p>

            <p>
            JWT tokens provide a secure and efficient way to manage user sessions and permissions in your Node.js application. By integrating jsonwebtoken, you can enhance the authentication and authorization mechanisms of your application.
            </p>


          </div>
          <div id="item-3">
          <h4>Handling Cookies in Your Node.js Application with cookie-parser</h4>

            <p>
            Cookies play a crucial role in web applications, enabling the storage of small pieces of data on the client's browser. The cookie-parser middleware simplifies the handling of cookies in your Node.js application. Let's explore how to install and use cookie-parser for efficient cookie management.
            </p>

            <p>
            <strong>Installing cookie-parser</strong>
            </p>

            <p>
            Begin by installing the cookie-parser package using npm:
            </p>

            <Code language='javascript' code={`npm install cookie-parser`} />

            <p>
            <strong>Integrating cookie-parser into Your Application</strong>
            </p>

            <p>
            Once installed, integrate cookie-parser by requiring it at the top of your Node.js file:
            </p>

            <Code language='javascript' code={`const cookieParser = require('cookie-parser');`} />

            <p>
            <strong>Using cookie-parser Middleware</strong>
            </p>

            <p>
            Apply cookie-parser as middleware in your Express application. This will parse incoming cookies, making them accessible in the request object.The best way is to put it in index.js
            </p>

            <Code language='javascript' code={`const express = require('express');\nconst app = express();\n\napp.use(cookieParser());`} />


            <p>
            <strong>Setting Cookies</strong>
            </p>

            <p>
            You can set cookies using the <code>res.cookie()</code> method. Specify the cookie name, value, and optional settings such as expiration and security attributes.First <code>'user'</code> is cookie name and second <code>'john_doe'</code> is it's value.
            </p>

            <Code language='javascript' code={`app.get('/set-cookie', (req, res) => {\n    res.cookie('user', 'john_doe', { maxAge: 3600000, httpOnly: true, secure: true, sameSite: 'Strict' });\n    res.send('Cookie set successfully!');\n});`} />


            <p>
            <strong>Accessing Cookies</strong>
            </p>

            <p>
            Access cookies in your route handlers through the request object. For example, to access a cookie named 'user':
            </p>

            <Code language='javascript' code={`app.get('/get-cookie', (req, res) => {\n    const userCookie = req.cookies.user;\n    res.send(userCookie);\n});`} />


            <p>
            <strong>Conclusion</strong>
            </p>

            <p>
            cookie-parser simplifies cookie handling in your Node.js application, providing a convenient way to set, access, and manage cookies for improved user sessions and personalized experiences.
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

export default Npm
