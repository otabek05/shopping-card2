import React, { useInsertionEffect, useState } from "react";
import "../styles/navbar.css";
import list from "../data";

const Navbar = ({ setShow, size }) => {
  const [search,setSearch]=useState('')
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop" onClick={() => setShow(true)}>
          My Shoping
        </span>
        <div>
          <span><input className="inp" type={'search'} placeholder='Search'></input></span>
          
        </div>
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
