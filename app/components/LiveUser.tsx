import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  faMinus,
  faPlus,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const LiveUser = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between mb-8">
      <div className="flex items-center mb-4 sm:mb-0">
        <FontAwesomeIcon
          icon={faEye}
          className="text-2xl mr-4 text-blue-700 bg-indigo-100 py-2 px-3 rounded-md hover:bg-indigo-50"
        />
        <span className="text-2xl font-bold sm:text-left text-center">
          Live Overview
        </span>
      </div>
      <div className="flex items-center sm:ml-16">
        <div className="mr-4 text-xl mr-4 rounded-md border-gray-200 border text-blue-700 py-1 px-4 rounded-md">
          <span className="text-xl mr-4 text-black">India</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>

        <FontAwesomeIcon
          icon={faMinus}
          className="text-2xl mr-2 text-blue-700 bg-indigo-100 py-2 px-3 rounded-md hover:bg-indigo-50"
        />
        <FontAwesomeIcon
          icon={faPlus}
          className="text-2xl mr-2 text-blue-700 bg-indigo-100 py-2 px-3 rounded-md hover:bg-indigo-50"
        />
      </div>
    </div>
  );
};

export default LiveUser;
