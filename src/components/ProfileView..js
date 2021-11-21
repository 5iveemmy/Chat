import React from "react";
import Search from "./Search";
import face03 from "../images/face03.jpg";
import {
  BsFillChatFill,
  BsCameraVideoFill,
  BsHeart,
  BsPerson,
} from "react-icons/all";
import "../index.css";

function ProfileView() {
  return (
    <div className="bg-gray-100  w-1/4">
      <Search />
      <div className=" flex justify-center pt-2">
        <img
          src={face03}
          alt="Lina Ray"
          className="rounded-full w-40 h-40 object-cover"
        />
      </div>
      <div className="text-center pt-2 pb-3">
        <p className="text-2xl">Dianne Vanhorn</p>
        <p className="text-lg">Junior Developer</p>
      </div>
      <div className="flex justify-around pb-5">
        <div>
          <div className="socio">
            <BsFillChatFill className="socio-icon" />
          </div>
          <p className="text-center">Chat</p>
        </div>
        <div>
          <div className="socio">
            <BsCameraVideoFill className="socio-icon" />
          </div>
          <p className="text-center">Video Call</p>
        </div>
      </div>
      <div className="pl-5 pr-4">
        <div className="flex items-center pb-3 text-gray-500">
          <BsPerson /> <p className="pl-2 ">View Friends</p>
        </div>
        <div className="flex items-center pb-4 text-gray-500">
          <BsHeart /> <p className="pl-2">Add to Favorite</p>
        </div>
        <div>
          <p>Attachments</p>
          <div className="flex justify-between pt-3 pb-3">
            <div className="pdf">
              <p className="pdf-p">PDF</p>
            </div>
            <div className="pdf">
              <p className="pdf-p">Video</p>
            </div>
            <div className="pdf">
              <p className="pdf-p">MP3</p>
            </div>
            <div className="pdf">
              <p className="pdf-p">Images</p>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-opacity-0 border-2 border-blue-600 rounded-3xl text-sm py-1 px-3 text-blue-500 hover:bg-white ">
              view all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileView;
