import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar_content">
        <NavLink to="/">
          <div className="navbar_home">
            <img
              src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png"
              alt="IMDb_image"
            />
          </div>
        </NavLink>
        <NavLink to="/movies/popular">
          <div className="navbar_popular">Popular</div>
        </NavLink>
        <NavLink to="/movies/top_rated">
          <div className="navbar_top">Top Rated</div>
        </NavLink>
        <NavLink to="/movies/upcoming">
          <div className="navbar_upcoming">Upcoming</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
