import React from "react";
import face01 from "../images/face01.jpg";

function Profile() {
  return (
    <div className="the-profiles flex justify-between py-3">
      <div className="flex items-center">
        <div className="w-14">
          <img src={face01} alt="first face" className="rounded-full w-9 h-9" />
        </div>
        <div className="px-2">
          <p className="text-base text-blue-600">Lina Ray</p>
          <p className="text-xs text-gray-500">
            Then ok, let's have a meeting with Client Tommorow
          </p>
        </div>
      </div>
      <div className="num text-center w-20">
        <span className="text-xs text-gray-500">10:34 AM</span>
        <div className="bg-blue-700 rounded-full w-1/4 text-white text-xs m-auto">
          <span className="">1</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
