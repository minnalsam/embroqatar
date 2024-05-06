import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <div className="m-12">
      <nav>
        <NavLink to="/embrodiery" className="px-4">
          Embroidery
        </NavLink>
        <NavLink to="/embrodiery">Software</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default ProductLayout;
