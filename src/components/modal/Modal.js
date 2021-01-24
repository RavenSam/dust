import Head from "next/head"
import { useContext } from "react"
import ThemeContext from "../../contexts/GlobalContexts"

// get out fontawesome imports
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// Style
import styles from "./Modal.module.scss"

export default function Modal() {
   const { displayModal, setDisplayModal } = useContext(ThemeContext)

   const dismissModal = () => setDisplayModal("none")

   const customCSS = `body{ overflow:hidden; }`

   return (
      <>
         <Head>{displayModal === "block" && <style>{customCSS}</style>}</Head>

         <div id="modal" className={styles.modal} style={{ display: displayModal }}>
            <div className={styles.card}>
               <button className={styles.dismiss} onClick={dismissModal}>
                  <FontAwesomeIcon icon={faTimes} />
               </button>
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
