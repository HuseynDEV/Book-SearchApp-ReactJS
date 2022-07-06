import React, { useState } from "react";
import { useEffect } from "react";
import "./mainBook.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../CounterSlice";
import { AddMovie } from "../../MovieSlice";
import { Link } from "react-router-dom";

const MainBook = () => {

  let bookList = useSelector((state) => state.data.value);
  let dispatch = useDispatch();


  useEffect(() => {
    const Movie = async () => {
      const data = await fetch(
        "http://openlibrary.org/search.json?title=the+lord+of+the+rings"
      );
      const list = await data.json();
      dispatch(increment(list.docs.slice(0, 20)));
    };

    Movie();
  }, []);
  let mov;

  const handleChoise = (item) => {


    console.log(item.title);
    dispatch(
      AddMovie(
        bookList.payload.filter(
          (data) =>
            data.cover_i == item.cover_i
        )
      )
    );

  };

  return (
    <div className="mainBook">
      {bookList.payload.map((item) => {
        return (
          <Link to="/myBook">
            <div className="book" onClick={() => handleChoise(item)}>
              <div className="img">
                <img
                  src={`https://covers.openlibrary.org/b/id/${item.cover_i}-L.jpg`}
                  alt=""
                />
              </div>
              <div className="about">
                <h2 className="title">{item.title}</h2>
                <h4 className="author">{item.author_name}</h4>
                <h4 className="edition_cont">{item.edition_count}</h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MainBook;
