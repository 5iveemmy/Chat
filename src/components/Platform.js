import React from "react";
import { BiPencil } from "react-icons/all";
import face01 from "../images/face01.jpg";
import face02 from "../images/face02.jpg";
import face03 from "../images/face03.jpg";
import face04 from "../images/face04.jpg";
import face05 from "../images/face05.jpg";
import face06 from "../images/face06.jpg";
import face07 from "../images/face07.jpg";
import face08 from "../images/img.jpg";
import Profile from "./Profile";
import Search from "./Search";

const users = [
  {
    name: "Lina Ray",
    src: face03,
    message: "Then ok, let's have a meeting with Client Tommorow",
    date: "10:34 AM",
    num: "1",
  },
  {
    name: "Brad frost",
    src: face05,
    message: "Nice to meet you!",
    date: "10:29 AM",
    num: "1",
  },
  {
    name: "Paul Irish",
    src: face07,
    message: "Thats Great, then start working from tomorrow",
    date: "09:34 AM",
    num: "1",
  },
  {
    name: "Jessica Glloy",
    src: face02,
    message: "That Sounds Good",
    date: "08:30 AM",
    num: "1",
  },
  {
    name: "John Doe",
    src: face04,
    message: "Hi sir, The second component will be completed today",
    date: "08:54 AM",
    num: "1",
  },
  {
    name: "Eric Peterson",
    src: face06,
    message: "First of all meet with the company CEO  and BOA",
    date: "07:12 AM",
    num: "1",
  },
  {
    name: "Jane Doe",
    src: face08,
    message: "Why are you not picking your calls?",
    date: "09:27 PM",
    num: "2",
  },
];

function Platform() {
  return (
    <div className="bg-gray-100 w-1/4 h-screen overflow-y-scroll">
      <div className="py-7 ">
        <div className="flex items-center justify-between  px-4">
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
        <Search />
        {users.map(({ name, src, message, date, num }) => (
          <Profile name={name} src={src} msg={message} date={date} num={num} />
        ))}
      </div>
    </div>
  );
}

export default Platform;
