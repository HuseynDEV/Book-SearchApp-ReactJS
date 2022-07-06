import React from "react";
import { useSelector } from "react-redux";
import "./MyBook.css";
import { Link } from "react-router-dom";
import { Backspace } from "@mui/icons-material";

const MyBook = () => {
  const data = useSelector((state) => state.movie.myMovie);
  console.log(data.payload);

  function text(data, trim) {
    return data.length > trim ? data.slice(0, trim) + "..." : data;
  }

  return (
    <div className="container">
        <div className="containerWrapper">
      <Link to="/" className="back_link">
        <Backspace />
        <h1>Go Back</h1>
      </Link>

      <div className="mybook">
        <div className="image">
          <img
            src={`https://covers.openlibrary.org/b/id/${data.payload[0].cover_i}-L.jpg`}
            alt=""
          />
        </div>
        <div className="mybook_about">
          <h1 className="title">{data.payload[0].title}</h1>
          <h3 className="mybook_author">{data.payload[0].author_name}</h3>
          <h3 className="mybook_language">{data.payload[0].language}</h3>
          <h3 className="mybook_language">{data.payload[0].contributor}</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MyBook;
