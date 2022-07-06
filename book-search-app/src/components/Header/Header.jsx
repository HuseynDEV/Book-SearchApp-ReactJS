import React from "react";
import './Header.css'
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  return (
    <div className="header_container">
      <header className="header">
      
        <div className="header_content">
          <h2 className="header_title">Search Your Favorite Book</h2>
          <br />
          <p className="header_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            dolores autem pariatur in numquam, inventore aut magni voluptate
            laboriosam ipsa fugit rem aperiam recusandae fugiat ab neque officia
            praesentium possimus.
          </p>
          <SearchForm/>
        </div>

      </header>
    </div>
  );
};

export default Header;
