import Loader from "react-loader-spinner"

export default function LoadingPage({ type = "Oval" }) {
   return (
      <>
         <div className="loader">
            <Loader type={type} color="var(--color-primary)" height={40} width={40} />
         </div>

         <style>{`
            .loader{
                width:100%;
                height:100vh;
                display:flex;
                align-items:center;
                justify-content:center;
                backgroud:var(--color-bg);
            }
        
        `}</style>
      </>
   )
}
