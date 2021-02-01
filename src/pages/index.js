import { useEffect } from "react"
import Head from "next/head"
import UserProfile from "../utils/user_profile"

import styles from "../styles/Home.module.scss"

export default function Home(props) {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>

         <div className="container">
            <h1>Welcome</h1>

            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo recusandae
               odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat non adipisci
               illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae minima molestias
               omnis, quos vero neque qui nisi? Mollitia, ducimus!
            </p>
            <br />
            <br />
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo recusandae
               odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat non adipisci
               illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae minima molestias
               omnis, quos vero neque qui nisi? Mollitia, ducimus!
            </p>
            <br />
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo recusandae
               odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat non adipisci
               illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae minima molestias
               omnis, quos vero neque qui nisi? Mollitia, ducimus!
            </p>
            <br />
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo recusandae
               odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat non adipisci
               illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae minima molestias
               omnis, quos vero neque qui nisi? Mollitia, ducimus!
            </p>
            <br />
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo recusandae
               odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat non adipisci
               illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae minima molestias
               omnis, quos vero neque qui nisi? Mollitia, ducimus!
            </p>
         </div>
      </>
   )
}
