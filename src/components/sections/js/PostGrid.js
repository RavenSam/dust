import Image from "next/image"
import styles from "../scss/PostGrid.module.scss"

const data = [
   { img: "/img/assets/dog1.jpg ", text: "Lorem ipsum dolor sit amet." },
   { img: "/img/assets/dog3.jpg ", text: "Lorem ipsum dolor sit amet." },
   { img: "/img/assets/dog7.jpg  ", text: "Lorem ipsum dolor sit amet." },
   { img: "/img/assets/dog2.jpg  ", text: "Lorem ipsum dolor sit amet." },
]

export default function PostGrid() {
   return (
      <section className={styles.postGrid}>
         <h2>Something</h2>

         <section className={styles.gallery}>
            {data.map((item, index) => (
               <div key={index} className={styles.item}>
                  <figure>
                     <Image src={item.img} alt={item.text} layout="fill" />
                  </figure>

                  <div className={styles.content}>
                     <h3>{item.text}</h3>
                  </div>
               </div>
            ))}
         </section>
      </section>
   )
}
