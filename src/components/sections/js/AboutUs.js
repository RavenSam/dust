import styles from "../scss/AboutUs.module.scss"

export default function AboutUs() {
   return (
      <section className={styles.aboutUs}>
         <div className={styles.leftSide}>
            <figure>
               <img src="/img/assets/about1.jpg" alt="About Us" />
            </figure>
         </div>

         <div className={styles.rightSide}>
            <h2>Who We Are?</h2>
            <span>About</span>

            <div className={styles.content}>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit maxime omnis tenetur, dignissimos
                  quisquam assumenda sapiente magni reiciendis itaque minus ut. Nemo, aspernatur? Dolore exercitationem,
                  dolor nesciunt praesentium eaque mollitia.
               </p>
            </div>

            <button className="btn btn-primary">Learn More</button>
         </div>
      </section>
   )
}
