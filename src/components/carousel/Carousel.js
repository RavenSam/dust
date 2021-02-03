import { Carousel } from "react-responsive-carousel"

export default function Slide() {
   return (
      <>
         <Carousel>
            <div key="content-1" className="my-slide content">
               <img src="/img/assets/1.jpg" />
            </div>

            <div key="content-2" className="my-slide content">
               <img src="/img/assets/2.jpg" />
            </div>

            <div key="content-3" className="my-slide content">
               <img src="/img/assets/3.jpg" />
            </div>
         </Carousel>
      </>
   )
}
