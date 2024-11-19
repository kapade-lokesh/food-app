import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
const Profilehead = ({ data }) => {
  return (
    <>
      {/* Welcome name plate */}
      <div className="shadow-sm   flex  shadow-gray-500 mb-4 px-4 py-2">
        <div>
          <UserCircleIcon className="h-12 w-12 text-indigo-700 " />
        </div>

        <div className="leading-10">
          <span className="font-light text-sm">Hello, </span>
          <span className="font-semibold">
            {data ? `${data && data.username} ` : " Welcome to profile"}
          </span>
        </div>
      </div>
    </>
  );
};

export default Profilehead;
