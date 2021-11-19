import React from "react";
import { BiPencil, BsSearch } from "react-icons/all";
import face01 from "../images/face01.jpg";
import Profile from "./Profile";

function Platform() {
  return (
    <div className="bg-gray-100 w-1/4 h-full">
      <div className="py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-12">
              <img
                src={face01}
                alt="first face"
                className="rounded-full w-9 h-9"
              />
            </div>
            <div className="">
              <p className="text-base text-blue-600 ">Gravid Cristofer</p>
              <p className="text-xs text-gray-500">Senior Developer</p>
            </div>
          </div>
          <div className="">
            <BiPencil />
          </div>
        </div>
        <div className="for-search relative w-65 pb-4 pt-5">
          {" "}
          <BsSearch className="absolute bottom-6 left-3.5 text-gray-400 text-xs" />
          <input
            type="text"
            className="py-1 px-8 rounded-full text-base w-full"
            placeholder="Search Friends"
          />
        </div>
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}

export default Platform;
