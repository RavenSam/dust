import Head from "next/head"
import * as Icons from "heroicons-react"

// Style
import styles from "./Modal.module.scss"

export default function Modal({ children, continueBtn }) {
   const actionModal = () => setDisplayModal(displayModal === "none" ? "block" : "none")

   const customCSS = `body,html{ overflow:hidden; }`

   return (
      <>
         <Head>{displayModal === "block" && <style>{customCSS}</style>}</Head>

         <div id="modal" className={styles.modal} style={{ display: displayModal }}>
            <div className={styles.card}>
               <div className={styles.cardHeader}>
                  <div className={styles.headerLeft}>
                     <h3>Welcome</h3>
                  </div>

                  <button className={styles.dismiss} onClick={actionModal}>
                     <Icons.X />
                  </button>
               </div>

               <div className={styles.cardBody}>{children}</div>

               <div className={styles.cardFooter}>
                  <button className="btn btn-secondary" onClick={actionModal}>
                     Cancel
                  </button>

                  <button className="btn btn-primary" onClick={continueBtn}>
                     Continue
                  </button>
               </div>
            </div>
         </div>
      </>
   )
}

export function ButtonModal(props) {
   const { setDisplayModal } = useContext(ThemeContext)

   const showModal = () => setDisplayModal("block")

   return (
      <button onClick={showModal} className="btn btn-primary">
         {props.children}
      </button>
   )
}
