import React from "react";
import { BsSearch } from "react-icons/all";

function Search() {
  return (
    <div className="for-search relative w-65 pb-4 pt-7  px-4">
      {" "}
      <BsSearch className="absolute bottom-6 left-7 text-gray-400 text-xs" />
      <input
        type="text"
        className="py-1 px-8 rounded-full text-base w-full outline-none"
        placeholder="Search Friends"
      />
    </div>
  );
}

export default Search;
