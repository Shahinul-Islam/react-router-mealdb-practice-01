import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="bg-slate-400 p-5">
      <Navbar></Navbar>
      <SearchBar></SearchBar>
    </div>
  );
};

export default Header;
