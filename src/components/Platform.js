import React from "react";
import { BiPencil } from "react-icons/all";
import face01 from "../images/face01.jpg";

function Platform() {
  return (
    <div className="bg-gray-100 w-80">
      <div className="py-6 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="">
              <img
                src={face01}
                alt="first face"
                className="rounded-full w-8 h-8"
              />
            </div>
            <div className="px-4">
              <p className="text-base text-blue-600">Gravid Cristofer</p>
              <p className="text-xs text-gray-500">Senior Developer</p>
            </div>
          </div>
          <div className="">
            <BiPencil />
          </div>
        </div>
        <div className="pt-5 ">
          <input
            type="text"
            className="py-1 px-3 rounded-full w-60 text-base"
            placeholder="Search Friends"
          />
        </div>
      </div>
    </div>
  );
}

export default Platform;
