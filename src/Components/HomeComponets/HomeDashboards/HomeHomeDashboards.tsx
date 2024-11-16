import React from "react";
import { Navbar } from "../../LandingPageLayouts/NavBars/Navbar";
import { HomeHeros } from "../HomeLayouts/HomeHeros/HomeHeros";
import Styles from "./HomeHomeDashboards.module.css";



export const HomeDashboards: React.FC = () => {
  return (
    <div className={Styles.HomeDashboardConatiner}>
      <Navbar />
      <HomeHeros />
    </div>
  )
}
