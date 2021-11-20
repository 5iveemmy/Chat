import React from "react";

function Profile({ src, name, msg, num, date }) {
  return (
    <div className="the-profiles flex justify-between py-3  px-4 cursor-pointer hover:bg-blue-100">
      <div className="flex items-center">
        <div className="w-14">
          <img
            src={src}
            alt="first face"
            className="rounded-full w-10 h-10 object-cover"
          />
        </div>
        <div className="w-40">
          <p className="text-base text-blue-600">{name}</p>
          <p className="text-xs text-gray-500">{msg}</p>
        </div>
      </div>
      <div className="num text-center w-20">
        <span className="text-xs text-gray-500">{date}</span>
        <div className="bg-blue-700 rounded-full w-1/4 text-white text-xs m-auto">
          <span className="">{num}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
