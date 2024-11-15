import React from "react";
import Apartment from "../../../assets/apartment.svg";
import Styles from "./MainSections.module.css";



export const MainSections: React.FC = () => {
  return (
    <div className={Styles.MainSectionsContainer}>
     <div className={Styles.MainSectionChild}>
      <div className={Styles.ContentSection}>
        <h2 className={Styles.MainSectionH2}>About Heristays shortlets in Lekki and VI Lagos:</h2>
        <p className={Styles.MainSectionPragrah}>
          We specialize in providing top-tier shortlet accommodations in the most sought-after
          locations of Victoria Island and Lekki. Our selection of over 300 shortlet apartments
          is second to none, each fully furnished and serviced to meet the highest standards of
          luxury and convenience.
        </p>
        <p className={Styles.MainSectionPragrah}>
          Power outages are a thing of the past with our 24/7 power supply, reliably supported by
          dual backup generators. Safety is a priority, and our shortlet apartments are situated
          within secure gated estates, complete with uniformed guards and electronic access
          control gates, ensuring your peace of mind.
        </p>
        <p className={Styles.MainSectionPragrah}>
          Some of our amenities include a fully-equipped Gym, on-site laundry services, and an
          inviting swimming pool. Our commitment to cleanliness is unwavering, with professional
          cleaning services provided every three days to maintain the pristine condition of your
          shortlet apartment.
        </p>
        <p className={Styles.MainSectionPragrah}>
          We are dedicated to offering an unmatched shortlet living experience in Lagos. Whether
          you’re in town for business or pleasure, our apartments provide the perfect blend of
          luxury, security, and comfort. Book your next stay with us and discover the ideal
          shortlet apartment in Lagos—where every detail is designed with your utmost
          satisfaction in mind.
        </p>
      </div>
      <div className={Styles.ImagesSection}>
        <div className={Styles.ImageWrapper}>
          <img
            src={ Apartment } 
            alt="Heristays Interior"
            className={Styles.MainImage}
          />
        </div>
        </div>

        <div className={Styles.FeaturedApartment}>
          <h3>Hottest Apartment</h3>
          <p>Sigmabase Apartments VI</p>
          <a href="#" className={Styles.DiscoverLink}>Discover more &gt;</a>
         
        </div>
      </div>
    </div>
  );
};
