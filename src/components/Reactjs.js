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
          <a className="nav-link" href="#item-3">Item 3</a>
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
            <h4>Item 3</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deleniti repellendus ratione suscipit reprehenderit, natus voluptate libero, laboriosam porro voluptas nihil velit magni labore sed provident omnis aut itaque perferendis unde laborum et vitae! Dolore libero voluptatibus eveniet voluptate veniam praesentium iure aspernatur. Consectetur non sed dolore exercitationem suscipit rerum mollitia ratione dignissimos praesentium nihil perspiciatis quisquam corrupti fugit accusantium eius distinctio officia minima id, consequuntur alias incidunt, dolores laboriosam omnis. Vitae dolorem at nostrum consequatur, quidem sequi? Quisquam praesentium possimus quidem. Eum voluptas cum impedit expedita sequi, nihil, aperiam voluptate, quis quam ipsa tenetur repellendus itaque nesciunt. Autem sunt, suscipit est commodi, exercitationem, placeat deleniti repudiandae iusto et beatae vero temporibus! Alias odio ea corrupti porro quisquam hic, nam quibusdam, eum rerum veniam inventore nulla doloribus eius quae libero! Magnam quidem repudiandae quam laborum at consequuntur blanditiis porro dolor, nam, cum voluptatem facere laboriosam quae adipisci ullam. Iusto culpa libero reiciendis aliquam architecto perspiciatis quis vitae placeat voluptatibus praesentium, laborum maxime sequi sed minima asperiores dolores. Provident expedita iusto recusandae blanditiis vero, inventore ab consequuntur quasi ullam eaque doloribus iure officia obcaecati ea nostrum odio dolorum hic nihil. Consectetur, velit. Aspernatur atque dicta sed eum voluptatum eos obcaecati a nobis, veritatis deleniti consequuntur commodi iure, doloremque error veniam, non dolorum! Aliquam obcaecati sed, ut laudantium alias neque expedita, recusandae atque quia reprehenderit minima! Eos veniam, possimus ex numquam eveniet aut est maiores at porro perspiciatis accusantium voluptates eligendi autem quasi recusandae, consequuntur praesentium id. Sit architecto numquam cum maxime nostrum iusto maiores quaerat expedita voluptate neque quibusdam aliquam debitis amet dolor quas tempora eaque modi est tenetur, eveniet fugiat culpa? Autem nobis nihil ex numquam odit ipsam cumque quod, porro cum reiciendis quasi quam quia recusandae est aliquid nulla eveniet, laborum perferendis. Quaerat accusantium, beatae ducimus unde repudiandae laborum quo similique officia nulla eum quis amet saepe cumque fugiat? Facilis hic molestiae, repellat quia sit porro repellendus. Officia, libero ipsam reiciendis, ipsum nihil deserunt fuga expedita perspiciatis aperiam maxime nisi laborum similique illum ut quae? Veniam quasi magni quos aliquid hic voluptatum rem ipsum, quaerat dolore modi exercitationem et. Est ipsam culpa ratione facilis provident maxime ut saepe veniam magni. Cum, impedit molestiae optio necessitatibus, quasi magnam numquam aliquam, saepe iste soluta beatae aut provident vitae harum hic deleniti eius ut. Rerum illo odio necessitatibus magnam soluta excepturi, enim voluptate tempore maxime dolorem magni asperiores quasi eaque eum non quo recusandae, consectetur quisquam, neque unde! Minima expedita beatae culpa excepturi quo, non voluptas sapiente, pariatur repellendus et, illo nisi blanditiis asperiores ipsam. Corporis, pariatur! Voluptatum eos earum rem veritatis quod. Dolor reiciendis facere eaque perspiciatis nesciunt voluptate sint excepturi quia architecto quis doloribus odit, magni numquam dolore? Laborum, consectetur. Voluptatibus cumque ipsa possimus officia explicabo magnam eum dolores sit similique, magni recusandae nulla quis totam nam accusamus, corporis corrupti ea ab. Cumque impedit vero nesciunt distinctio obcaecati praesentium accusantium sapiente incidunt, voluptatum ad natus fugiat maxime culpa dolor repellat voluptates asperiores deserunt tenetur a deleniti iusto? Rerum, dolor voluptatibus.x</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Reactjs
