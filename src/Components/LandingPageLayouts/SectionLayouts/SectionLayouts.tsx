import React, { useState } from "react";
import Styles from "./SectionLayouts.module.css";
import Image1 from "../../../assets/image1.svg"; 
import Image2 from "../../../assets/images2.svg";
import Image3 from "../../../assets/images3.svg";
import Image4 from "../../../assets/images4.svg";
import Image5 from "../../../assets/images5.svg";
import Image6 from "../../../assets/images6.svg";



import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const SectionLayouts: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null); 
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null); 
  const [searchQuery, setSearchQuery] = useState("");

  const apartments = [
    {
      title: "Sigmabase Apartments VI",
      address: "7/9 Molade Okoya street Off Ajose Adeogun VI",
      description: "Studios and One Bedroom Apartments",
      imgSrc: Image1,
      isFeatured: true,
    },
    {
      title: "Footprint Apartments Lekki",
      address: "21 Awudu Ekpekhia St. Off Admiralty Lekki Ph1",
      description: "One Bedroom and 2 bedroom Apartments",
      imgSrc: Image2,
      isFeatured: false,
    },
    {
      title: "House 4 Apartments Lekki",
      address: "4 Chief Yemi Idowu Way, Lekki Lagos",
      description: "Studios and One Bedroom Apartments",
      imgSrc: Image3,
      isFeatured: false,
    },
    {
      title: "Perugia Apartments Lekki",
      address: "4 Patience Olukayode Close, Lekki Phase1, Lagos",
      description: "Two Bedroom Apartments",
      imgSrc: Image4,
      isFeatured: false,
    },
    {
      title: "Firenze Apartments Lekki",
      address: "7/9 Molade Okoya street Off Ajose Adeogun VI",
      description: "Three Bedroom Apartments",
      imgSrc: Image5,
      isFeatured: false,
    },
    {
      title: "Novara Apartments Lekki",
      address: "14/15 Ilasan New Road, Elegushi Lekki, Lagos",
      description: "Two Bedroom Apartments",
      imgSrc: Image6,
      isFeatured: false,
    },
  ];

  return (
    <div className={Styles.SectionLayoutsContainers}>
    <div className={Styles.SectionLayoutsContainer}>
      <div className={Styles.SecttionHeaderMain}>
        <div className={Styles.SectionHeader}>
          <h2 className={Styles.SectionTitle}>Shortlets in Lekki and VI Lagos</h2>
          <div className={Styles.SearchBar}>
            <input 
              type="text" 
              placeholder="Where" 
              className={Styles.SearchInput} 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <DatePicker 
              selected={checkInDate} 
              onChange={(date: Date | null) => setCheckInDate(date)}
              className={Styles.SearchInput} 
              placeholderText="Check in"
              dateFormat="dd/MM/yyyy"
              popperPlacement="bottom-start"
              showYearDropdown
            />
            <DatePicker 
              selected={checkOutDate} 
              onChange={(date: Date | null) => setCheckOutDate(date)}
              className={Styles.SearchInput} 
              placeholderText="Check out"
              dateFormat="dd/MM/yyyy"
              popperPlacement="bottom-start"
              showYearDropdown
            />
            <input type="text" placeholder="Who" className={Styles.SearchInput} />
            <button className={Styles.SearchButton}>🔍</button>
          </div>
        </div>
        <p className={Styles.DiscountText}>
          Deep discounts on long stays: 3 days—10% Off, 7 days—15% Off, 30 days—30% Off, 90 days—50% Off
        </p>
      </div>
      <div className={Styles.ApartmentGrid}>
        {apartments.map((apartment, index) => (
          <div className={Styles.ApartmentCard} key={index}>
            <div className={Styles.ImageContainer}>
              <img src={apartment.imgSrc} alt={apartment.title} className={Styles.ApartmentImage} />
              {apartment.isFeatured && <span className={Styles.FeaturedBadge}>Featured</span>}
              <button className={Styles.NavArrowLeft}>‹</button>
              <button className={Styles.NavArrowRight}>›</button>
            </div>
            <div className={Styles.ApartmentInfo}>
              <h3 className={Styles.Title}>{apartment.title}</h3>
              <p className={Styles.Address}>{apartment.address}</p>
              <p className={Styles.Description}>{apartment.description}</p>
              <button className={Styles.FavoriteButton}>♡</button>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};
