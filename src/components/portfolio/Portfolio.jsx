/*import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";*/
import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          <li className="active">Featured</li>
          <li>Web</li>
          <li>Mobile</li>
          <li>Design</li>
          <li>Branding</li>
        </ul>
        <div className="container">
          <div className="item">
            <img src="" alt="" />
            <h3>Banking App</h3>
          </div>
        </div>
    </div>
  )
}
