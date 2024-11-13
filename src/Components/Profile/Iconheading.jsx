import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
const Iconheading = ({ heading, icon }) => {
  return (
    <div className="relative cursor-pointer transition-colors">
      <div className="flex justify-between items-center py-2 px-4 border-b-2 border-gray-300">
        <div className="flex items-center gap-6">
          {/* Icon */}
          <div className="h-6 w-6 text-indigo-700">{icon}</div>
          {/* Heading */}
          <div className="text-gray-500 w-[120px] font-bold text-md">
            {heading}
          </div>
        </div>
        <div className="h-6 w-6 text-gray-500">
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Iconheading;
