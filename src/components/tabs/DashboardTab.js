import Head from "next/head"
import dynamic from "next/dynamic"

const ChartLine = dynamic(() => import("../shared/ChartLine"))

export default function DashboardTab({ styles }) {
   return (
      <>
         <Head>
            <title>Dashboard</title>
         </Head>

         <section className={styles.dasboard}>
            <h1>Dashboard</h1>

            <section className={styles.dataUpper}>
               <div className={styles.leftSide}>
                  <div>
                     <h2>Customers</h2>
                     <h3>5,890</h3>
                  </div>
                  <div>
                     <h2>Order</h2>
                     <h3>3,778</h3>
                  </div>
                  <div>
                     <h2>Earnings</h2>
                     <h3>$2,000</h3>
                  </div>
                  <div>
                     <h2>Growth</h2>
                     <h3>+ 15,32%</h3>
                  </div>
               </div>
               <div className={styles.rightSide}>
                  <h2>Revenue</h2>

                  <ChartLine />
               </div>
            </section>
         </section>
      </>
   )
}
