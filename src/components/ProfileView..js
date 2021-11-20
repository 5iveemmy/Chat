import React from "react";
import Search from "./Search";
import face03 from "../images/face03.jpg";

function ProfileView() {
  return (
    <div className="bg-gray-100 w-1/4 h-full">
      <Search />
      <div className=" flex justify-center pt-3">
        <img
          src={face03}
          alt="Lina Ray"
          className="rounded-full w-40 h-40 object-cover"
        />
      </div>
      <div className="text-center pt-3 pb-5">
        <p className="text-2xl">Dianne Vanhorn</p>
        <p className="text-lg">Junior Developer</p>
      </div>
    </div>
  );
}

export default ProfileView;
