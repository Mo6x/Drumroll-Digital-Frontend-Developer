import React from "react";
import Styles from "./HeroLayouts.module.css";



export const HeroLayouts: React.FC = () => {
  return (
    <div className={Styles.HeroLayoutContainer}>
       <div className={Styles.HeroLayoutItems}>
           <h1 className={Styles.HeroLayoutH1}> Luxury shortlet apartments in Lekki and VI Lagos
           </h1>
           <p className={Styles.HeroLayoutParagrah}>Get the best prices on over 300 serviced shortlet apartments accross 6 Properties in Chevron, Lekki Phase1 and Victoria Island</p>
           <div className={Styles.HeroLayoutSeachEnginer}>
              <div className={Styles.HerorLayoutChild}>
                 <h2 className={Styles.LayoutH2}> Get Special offer's and more from Heristays shortlets</h2>
                 <h2  className={Styles.LayoutH1}>Subscribe to see secriet deals prices reductions</h2>
              </div>

              <div className={Styles.SearchEngine}>

               <input  type="email"
               placeholder="Enter your email"
               className={Styles.SearchInput} />
             </div>
             <button className={Styles.SearchButton}>Submit</button>
           </div>
       </div>
    </div>
  )
}
