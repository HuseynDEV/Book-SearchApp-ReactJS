import React, { useRef, useEffect } from "react";
import "./SearchForm.css";
import { Search } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../CounterSlice";

const SearchForm = () => {

  let item = useSelector((state) => state.data.item);
  let dispatch=useDispatch()

  const inpt = useRef();

  useEffect(() => inpt.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();

    let SearchValue = inpt.current.value.trim();

    // let data=`http://openlibrary.org/search.json?title=${SearchValue}`
    const Movie = async () => {
      const data = await fetch(
        `http://openlibrary.org/search.json?title=${SearchValue}`
      );
      const list = await data.json();
      dispatch(increment(list.docs.slice(0,10)));

    };

    Movie();
  };

  return (
    <div className="search_content">
      <form action="" className="search_form">
        <input type="text" className="search_input" ref={inpt} />
        <button type="submit" onClick={handleSubmit}>
          <Search htmlColor="black" />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
