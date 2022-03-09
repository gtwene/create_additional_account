import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const CardForm = () => {
  return (
    <div className="m-20">
      <div class="p-4 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
       
      <div class="text-gray-700 md:flex md:items-center ">
        <div class="mb-1 md:mb-0 md:w-1/6">
          <label>Customer ID</label>
        </div>

        <div class="relative text-gray-700 ">
          <input
            class="w-full h-10 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Regular input"
          />
          <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            {/* <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg> */}
          </div>
        </div>

        <div class="md:w-2/3 md:flex-grow">
          <input
            class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
            type="text"
            placeholder="Source Branch"
            id="forms-labelLeftInputCode"
          />
        </div>
      </div>
       
      </div>
    </div>
  );
};

export default CardForm;
