import React from "react";
import { BiPencil, BsSearch } from "react-icons/all";
import face01 from "../images/face01.jpg";
import face02 from "../images/face02.jpg";
import face03 from "../images/face03.jpg";
import face04 from "../images/face04.jpg";
import face05 from "../images/face05.jpg";
import face06 from "../images/face06.jpg";
import face07 from "../images/face07.jpg";
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
        <Profile
          name="Lina Ray"
          src={face02}
          msg="Then ok, let's have a meeting with Client Tommorow"
          date="10:34 AM"
          num="1"
        />
        <Profile
          name="Brad frost"
          src={face05}
          msg="Nice to meet you!"
          date="10:29 AM"
          num="1"
        />
        <Profile
          name="Paul Irish"
          src={face07}
          msg="Thats Great, then start working from tomorrow"
          date="09:34 AM"
          num="1"
        />
        <Profile
          name="Jessica Glloy"
          src={face02}
          msg="That Sounds Good"
          date="08:30 AM"
          num="1"
        />
        <Profile
          name="John Doe"
          src={face04}
          msg="Hi sir, The second component will be completed today"
          date="08:54 AM"
          num="1"
        />
        <Profile
          name="Eric Peterson"
          src={face06}
          msg="First of all meet with the company CEO  and BOA"
          date="07:12 AM"
          num="1"
        />
      </div>
    </div>
  );
}

export default Platform;
