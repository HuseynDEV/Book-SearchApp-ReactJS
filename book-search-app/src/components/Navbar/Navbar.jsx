import React, { useState, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Menu, Close } from "@mui/icons-material";
import logo from "../../images/logo.png";

const Navbar = () => {

  const handleClose=()=>{
    list.current.classList.remove('open')
  }

  const handleMenu=()=>{
    list.current.classList.add('open')
  }

  const list = useRef();

  return (
    <nav className="navbar">
      <div className="container_navbar">
        <div className="right_navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="title">bookhub</div>
        </div>
        <div className="left_navbar" ref={list}>
          <div className="menu" onClick={handleMenu}>
            <Menu />
          </div>
          <div className="list">
            <div className="close" onClick={handleClose}>
              <Close />
            </div>
            <Link to="/" className="nav_link">
              Home
            </Link>
            <Link to="/about" className="nav_link">
              About
            </Link>
          </div>

         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
