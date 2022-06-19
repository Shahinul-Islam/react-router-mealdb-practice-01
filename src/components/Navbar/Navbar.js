import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4">
      <div>
        <h2 className="text-2xl font-bold text-orange-600">Meal DB</h2>
      </div>
      <div>
        <Link to="/" className="mr-3 font-bold">
          Home
        </Link>
        <Link to="/food" className="mr-3 font-bold">
          Food
        </Link>
        <Link to="/about" className="mr-3 font-bold">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
