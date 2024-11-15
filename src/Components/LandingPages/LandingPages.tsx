import React from "react";
import { Navbar } from "../LandingPageLayouts/NavBars/Navbar";
import { HeroLayouts } from "../LandingPageLayouts/HeroLayouts/HeroLayouts";
import { SectionLayouts } from "../LandingPageLayouts/SectionLayouts/SectionLayouts";
import { MainSections } from "../LandingPageLayouts/MainSections/MainSections";
import Styles from "./LandingPages.module.css";



export const LandingPages: React.FC = () => {
  return (
    <div className={Styles.LandingPagesContainer}> 
       <Navbar />
       <HeroLayouts />
       <SectionLayouts />
       <MainSections  />
    </div>
  )
}
