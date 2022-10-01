import React, { useState } from "react";
import Infos from "../info.json";
import "./Search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search ..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      {Infos.filter((val) => {
        if (searchTerm === "") {
          return;
        } else if (
          val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
