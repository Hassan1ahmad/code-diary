import React from 'react'
import Code from './code'

function Cascadingss() {
  return (
    <div>
      <div className="wrapper">
    <div className="container">
    <div className="row">
      <div className="col-4">
        <nav id="navbar-example3 " className="sidebar">
          <a className="nav-link" href="#item-1">Center Your Div</a>
          <a className="nav-link" href="#item-2">Item 2</a>
          <a className="nav-link" href="#item-3">Item 3</a>
        </nav>
      </div>
      <div className="col-8 content">
        <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-offset="0" tabIndex="0">
          <div id="item-1">
          <h4>3 ways to center a div</h4>
            <p>
              Centering elements is a common challenge in web design, and mastering various methods to achieve this can greatly enhance your layout skills. Here are <b>three effective ways</b> to center elements in CSS:<br/><br/>
              </p>


              <p>
              <b>1. Using Grid:</b> CSS Grid is a powerful layout system that allows you to create both simple and complex grid structures. To center an element using grid, apply <code>display: grid;</code> to the parent container and use <code>justify-content: center;</code> and <code>align-items: center;</code> on the child element you want to center.<br/><br/>
              </p>
              <Code language='css' code={".parent {\n   display: grid;\n   place-items: center;\n}"} />

              <p>
              <b>2. Using Flexbox:</b> Flexbox is designed for one-dimensional layouts. To center an element using Flexbox, set <code>display: flex;</code> on the parent container and use <code>justify-content: center;</code> and <code>align-items: center;</code> to center the child element horizontally and vertically.<br/><br/>
              </p>
              <Code language='css' code={".parent {\n   display: flex;\n   justify-content: center;\n   align-items: center;\n}"} />

              <p>
              <b>3. Using Position:</b> Sometimes, you may need to center an element in a more complex layout. Using <code>position: absolute;</code> along with <code>top: 50%;</code> and <code>left: 50%;</code>, and then applying a transform with <code>translate(-50%, -50%);</code> can center an element precisely.<br/><br/>
              </p>
              <Code language='css' code={".div {\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n}"} />

              <p>
              Mastering these techniques will make your web design projects more flexible and appealing, allowing you to create balanced and visually pleasing layouts.
            </p>
</div>
          <div id="item-2">
            <h4>Item 2</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, deleniti repellendus ratione suscipit reprehenderit, natus voluptate libero, laboriosam porro voluptas nihil velit magni labore sed provident omnis aut itaque perferendis unde laborum et vitae! Dolore libero voluptatibus eveniet voluptate veniam praesentium iure aspernatur. Consectetur non sed dolore exercitationem suscipit rerum mollitia ratione dignissimos praesentium nihil perspiciatis quisquam corrupti fugit accusantium eius distinctio officia minima id, consequuntur alias incidunt, dolores laboriosam omnis. Vitae dolorem at nostrum consequatur, quidem sequi? Quisquam praesentium possimus quidem. Eum voluptas cum impedit expedita sequi, nihil, aperiam voluptate, quis quam ipsa tenetur repellendus itaque nesciunt. Autem sunt, suscipit est commodi, exercitationem, placeat deleniti repudiandae iusto et beatae vero temporibus! Alias odio ea corrupti porro quisquam hic, nam quibusdam, eum rerum veniam inventore nulla doloribus eius quae libero! Magnam quidem repudiandae quam laborum at consequuntur blanditiis porro dolor, nam, cum voluptatem facere laboriosam quae adipisci ullam. Iusto culpa libero reiciendis aliquam architecto perspiciatis quis vitae placeat voluptatibus praesentium, laborum maxime sequi sed minima asperiores dolores. Provident expedita iusto recusandae blanditiis vero, inventore ab consequuntur quasi ullam eaque doloribus iure officia obcaecati ea nostrum odio dolorum hic nihil. Consectetur, velit. Aspernatur atque dicta sed eum voluptatum eos obcaecati a nobis, veritatis deleniti consequuntur commodi iure, doloremque error veniam, non dolorum! Aliquam obcaecati sed, ut laudantium alias neque expedita, recusandae atque quia reprehenderit minima! Eos veniam, possimus ex numquam eveniet aut est maiores at porro perspiciatis accusantium voluptates eligendi autem quasi recusandae, consequuntur praesentium id. Sit architecto numquam cum maxime nostrum iusto maiores quaerat expedita voluptate neque quibusdam aliquam debitis amet dolor quas tempora eaque modi est tenetur, eveniet fugiat culpa? Autem nobis nihil ex numquam odit ipsam cumque quod, porro cum reiciendis quasi quam quia recusandae est aliquid nulla eveniet, laborum perferendis. Quaerat accusantium, beatae ducimus unde repudiandae laborum quo similique officia nulla eum quis amet saepe cumque fugiat? Facilis hic molestiae, repellat quia sit porro repellendus. Officia, libero ipsam reiciendis, ipsum nihil deserunt fuga expedita perspiciatis aperiam maxime nisi laborum similique illum ut quae? Veniam quasi magni quos aliquid hic voluptatum rem ipsum, quaerat dolore modi exercitationem et. Est ipsam culpa ratione facilis provident maxime ut saepe veniam magni. Cum, impedit molestiae optio necessitatibus, quasi magnam numquam aliquam, saepe iste soluta beatae aut provident vitae harum hic deleniti eius ut. Rerum illo odio necessitatibus magnam soluta excepturi, enim voluptate tempore maxime dolorem magni asperiores quasi eaque eum non quo recusandae, consectetur quisquam, neque unde! Minima expedita beatae culpa excepturi quo, non voluptas sapiente, pariatur repellendus et, illo nisi blanditiis asperiores ipsam. Corporis, pariatur! Voluptatum eos earum rem veritatis quod. Dolor reiciendis facere eaque perspiciatis nesciunt voluptate sint excepturi quia architecto quis doloribus odit, magni numquam dolore? Laborum, consectetur. Voluptatibus cumque ipsa possimus officia explicabo magnam eum dolores sit similique, magni recusandae nulla quis totam nam accusamus, corporis corrupti ea ab. Cumque impedit vero nesciunt distinctio obcaecati praesentium accusantium sapiente incidunt, voluptatum ad natus fugiat maxime culpa dolor repellat voluptates asperiores deserunt tenetur a deleniti iusto? Rerum, dolor voluptatibus.x</p>
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

export default Cascadingss
