import React from "react";
import face08 from "../images/face08.jpg";
import { BsBell, BsSearch, BsHeart } from "react-icons/all";

function Chat() {
  return (
    <div className="w-1/2 bg-gray-50">
      <div className="py-7 px-5">
        <div className="flex items-center justify-between shadow-sm pb-5">
          <div className="flex">
            <div className="">
              <img
                src={face08}
                alt="first face"
                className="rounded-full w-9 h-9 object-cover"
              />
            </div>
            <div className="flex items-center pl-3">
              {" "}
              <p>Dianne Vanhorn</p>{" "}
              <div className="pl-3">
                <p className=" bg-green-600 h-3 w-3 rounded-full"></p>{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-between w-1/6 text-xl text-gray-400">
            <div>
              <BsBell />
            </div>
            <div>
              <BsSearch />
            </div>
            <div>
              <BsHeart />
            </div>
          </div>
        </div>
        <div className="line text-center">
          <p className="line-para text-gray-300">Tomorrow</p>
        </div>
        <div className="for-chat">
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
