import React from "react";

const ImpressRequest = () => {
  return (
    <div>
      <div className="bg-slate-500 p-6 rounded shadow-xl shadow-slate-900 m-5">
        <h1 className="text-3xl font-bold text-center block uppercase">
          Impress Request
        </h1>
      </div>
      <section class="-mt-20 text-gray-700 body-font m-auto">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 lg:m-10 md:m-2 md:w-1/4 sm:w-1/2 w-full">
              <div class="shadow-2xl shadow-slate-600 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg
                  fill="lightblue"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 class="cursor-pointer hover:text-purple-800 title-font font-medium text-2xl text-gray-900 animate-pulse ">
                  Orignation
                </h2>
                {/* <p class="leading-relaxed">Orignation</p> */}
              </div>
            </div>
            <div class="p-4 lg:m-10 md:m-2 md:w-1/4 sm:w-1/2 w-full">
              <div class="shadow-2xl shadow-slate-600 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 class="cursor-pointer hover:text-purple-800 title-font font-medium text-2xl text-gray-900 animate-pulse">
                  Request
                </h2>
                {/* <p class="leading-relaxed">Request</p> */}
              </div>
            </div>
            <div class="p-4 lg:m-10 md:m-2 md:w-1/4 sm:w-1/2 w-full">
              <div class="shadow-2xl shadow-slate-600 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 class="cursor-pointer hover:text-purple-800 title-font font-medium text-2xl text-gray-900 animate-pulse">
                  Approval
                </h2>
                {/* <p class="leading-relaxed">Approval</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpressRequest;
