import React from "react";
import { BsFillChatDotsFill } from "react-icons/all";

function Platform() {
  return (
    <div className="bg-gray-100 w-56">
      <div className="py-2 px-1">
        <div>
          <div className="text-blue-500 text-4xl">
            <BsFillChatDotsFill />
          </div>
          <span className="text-xs">SKYNET</span>
        </div>
        <div className="icons "></div>
      </div>
    </div>
  );
}

export default Platform;
