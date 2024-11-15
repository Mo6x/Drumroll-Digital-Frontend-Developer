import React from "react";
import Styles from "./Footers.module.css";



export const Footers: React.FC = () => {
  return (
    <div className={Styles.FootersContainer}>
      <div>
        <div>
          <h1>Contact Information</h1>
          <p>Please reach out to us if you have any questions</p>
           <div>
              <div>

                 <h4>+234 (916) 984-5070</h4>
              </div>
           </div>
        </div>
      </div>

      <form className={Styles.Form}>
        <div className={Styles.InputRow}>
          <input type="text" placeholder="Full Name" className={Styles.Input} />
          <input type="email" placeholder="Email" className={Styles.Input} />
          <input type="tel" placeholder="Phone Number" className={Styles.Input} />
        </div>
        <textarea placeholder="Your Message" className={Styles.Textarea}></textarea>
        <button type="submit" className={Styles.Button}>Send Message</button>
      </form>
    </div>
  );
};
