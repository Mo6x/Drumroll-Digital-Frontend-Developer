import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "../../../../assets/arrorRight.svg";
import Star from "../../../../assets/star.svg";
import Selling1 from "../../../../assets/Selling1.svg";
import Selling2 from "../../../../assets/seling2.svg";
import Selling3 from "../../../../assets/selling3.svg";
import Styles from "./HomeHeros.module.css";


export const HomeHeros: React.FC = () => {
  const navigate = useNavigate(); 

  const aclick = () => {
    navigate("/"); 
  };

  return (
    <div className={Styles.HomeHerosContainer}>
      <div className={Styles.HomeHeroChildItems}>
        <div className={Styles.HomeHeroItems} onClick={aclick}>
          <img src={Arrow} alt="Arrow Icon" />
          <h5 className={Styles.HomeHeroH51}>Back</h5>
        </div>
        <h1 className={Styles.HomeHeroH1}>Sigmabase Apartments VI</h1>
        <div className={Styles.HomeHeroChild}>
          <img src={Star} alt="Star Icon" />
          <h5 className={Styles.HomeHeroH5}>0.00 </h5>
          <h5 className={Styles.HomeHeroH5}>0 review</h5>
        </div>
        <div className={Styles.HomeHeroImages1}>
          <img
            src={Selling1}
            alt="Star Icon"
            className={Styles.HomeHeroImagesimg}
          />
          <div className={Styles.HomeHeroImageCild}>
            <img
              src={Selling2}
              alt="Star Icon"
              className={Styles.HomeHeroImageCildImge}
            />
            <img
              src={Selling3}
              alt="Star Icon"
              className={Styles.HomeHeroImageCildImge}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
