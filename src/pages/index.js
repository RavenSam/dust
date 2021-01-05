import Head from "next/head"
import styles from "../styles/Home.module.scss"

// Components
import { Header, Footer } from "../components"

export default function Home() {
   return (
      <>
         <Header position="sticky" />

         <div className={styles.home}>
            <Head>
               <title>Create Next App</title>
               <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
               <h1>Welcome</h1>

               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo
                  recusandae odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat
                  non adipisci illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae
                  minima molestias omnis, quos vero neque qui nisi? Mollitia, ducimus!
               </p>
               <br />
               <br />
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo
                  recusandae odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat
                  non adipisci illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae
                  minima molestias omnis, quos vero neque qui nisi? Mollitia, ducimus!
               </p>
               <br />
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo
                  recusandae odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat
                  non adipisci illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae
                  minima molestias omnis, quos vero neque qui nisi? Mollitia, ducimus!
               </p>
               <br />
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo
                  recusandae odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat
                  non adipisci illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae
                  minima molestias omnis, quos vero neque qui nisi? Mollitia, ducimus!
               </p>
               <br />
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus perferendis cum tempora nemo
                  recusandae odit quo voluptate, mollitia doloremque quae magnam labore, sequi ea nulla quam repellat
                  non adipisci illum? Explicabo mollitia est voluptas adipisci ipsa laborum accusamus, quod molestiae
                  minima molestias omnis, quos vero neque qui nisi? Mollitia, ducimus!
               </p>
            </div>
         </div>
      </>
   )
}
