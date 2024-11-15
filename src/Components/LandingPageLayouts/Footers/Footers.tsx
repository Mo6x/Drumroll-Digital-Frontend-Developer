import React from "react";
import Styles from "./Footers.module.css";

export const Footers: React.FC = () => {
  return (
    <div className={Styles.FootersContainer}>

      
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
