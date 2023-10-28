import React from 'react'
import Code from './code'

function Javascriptnotes() {
  return (
    <div>
      <div className="wrapper">
    <div className="container">
    <div className="row">
      <div className="col-4">
        <nav id="navbar-example3 " className="sidebar">
          <a className="nav-link" href="#item-1">Array's Method</a>
          <a className="nav-link" href="#item-2">JSON.parse( ) and stringify( )</a>
          <a className="nav-link" href="#item-3">Item 3</a>
        </nav>
      </div>
      <div className="col-8 content">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0">
          <div id="item-1">
            <h4>Array's Method</h4>
            <p>
              In the world of JavaScript, arrays are incredibly versatile. With built-in methods, you can manipulate and handle data with ease. Let's delve into a few array methods to understand their power:<br/><br/>

              <b>1. at():</b> This method lets you retrieve the element at a specified index. For example, <code>[3, 4, 5, 6].at(1);</code> fetches the second element, which is 4.<br/><br/>
              
              <b>2. pop() and push():</b> While <code>pop()</code> removes the last element, <code>push()</code> adds an element to the end of an array. So, you can easily extend or shorten your array.<br/><br/>

              <b>3. fill():</b> Want to replace all elements in an array with a static value? <code>fill()</code> has you covered.<br/><br/>
              
              <b>4. join():</b> This method joins all elements of an array into a string, allowing you to specify the delimiter, like <code>[3, 4, 5, 6].join("-");</code> producing '3-4-5-6'.<br/><br/>
              
              <b>5. shift() and unshift():</b> With <code>shift()</code>, you can remove the first element, while <code>unshift()</code> lets you add elements to the beginning of an array.<br/><br/>
              
              <b>6. includes():</b> This method checks if a specific value exists in an array, returning a boolean.<br/><br/>
              
              <b>7. map(), find(), and filter():</b> These methods are vital for data manipulation. <code>map()</code> transforms each element based on a function, <code>find()</code> retrieves the first element that satisfies a condition, and <code>filter()</code> returns all elements meeting a certain criteria.<br/><br/>
              
              With these methods and more, JavaScript offers a robust toolkit to make array manipulation intuitive and efficient. Dive in, experiment, and harness the full potential of arrays in your projects!
            </p>
            <Code language='javascript' code={`[3, 4, 5, 6].at(1); // 4\n\n[3, 4, 5, 6].pop(); // [3, 4, 5]\n\n[3, 4, 5, 6].push(7); // [3, 4, 5, 6, 7]\n\n[3, 4, 5, 6].fill(1); // [1, 1, 1, 1] \n\n[3, 4, 5, 6].join("-"); // '3-4-5-6'\n\n[3, 4, 5, 6].shift(); // [4, 5, 6]\n\n[3, 4, 5, 6].reverse(); // [6, 5, 4, 3]\n\n[3, 4, 5, 6].unshift(1); // [1, 3, 4, 5, 6]\n\n[3, 4, 5, 6].includes(5); // true\n\n[3, 4, 5, 6].map((num) => num+6); // [9, 10, 11, 12]\n\n[3, 4, 5, 6].find((num) => num > 4); // 5\n\n[3, 4, 5, 6].filter((num) => num > 4); // [5, 6]\n\n[3, 4, 5, 6].every((num) => num > 5); // false\n\n[3, 4, 5, 6].findIndex((num) => num > 4); // 2\n\n[3, 4, 5, 6].reduce((acc, num) => acc + num, 0); // 18`} />


          </div>
          <div id="item-2">
            <h4>JSON.parse( ) and JSON.stringify( )</h4>
            <p>
              In JavaScript, dealing with JSON data is a common task. Two essential methods come into play when working with JSON:<br/><br/>

              <b>JSON.parse():</b> The <code>JSON.parse()</code> method is used when you have a JSON string and you want to convert it into a JavaScript object. It's particularly useful when you fetch data from an API and need to process it within your JavaScript code.<br/><br/>
              <p>Example:</p>
            <Code language='javascript' code={`let userDataStr = "{"username":"Alex", "location":"Canada"}";\n\nlet userDataObj = JSON.parse(userDataStr); console.log(userDataObj);\n\n// Converts to Js object\n\n// { username: 'Alex', location: 'Canada' }`} />

              <b>JSON.stringify():</b> On the flip side, when you have a JavaScript object and you need to send it to a server or save it as a JSON string, you use <code>JSON.stringify()</code>. This method transforms a JavaScript object into its corresponding JSON string representation.
            </p>
            <p>Example:</p>
            <Code language='javascript' code={`JSON.stringify()\n\nlet userDataObj = { username: "Alex", location: "Canada" };\n\nlet userDataStr = JSON.stringify(userDataObj); console.log(userDataStr);\n\n// Converts to JSON string\n\n// {"username":"Alex", "location":"Canada"}`} />


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
    </div>
  )
}

export default Javascriptnotes
