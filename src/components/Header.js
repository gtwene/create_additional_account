import React from "react";

const Header = () => {
  return (
    <div className="relative">
      <div className="absolute -inset-3 bg-gradient-to-r from-slate-900 to-purple-600 mb-11 blur-xl hover:opacity-100 transition duration-1000"></div>
      <div class="relative flex items-center justify-between flex-wrap bg-slate-500 shadow-2xl shadow-current p-6 ">
        <div class="ml-5 cursor-pointer flex items-center flex-shrink-0 text-white mr-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="0.18889in"
            height="0.44444in"
            viewBox="0 0 107 130"
          >
            <path
              className="fill-current"
              stroke="white"
              stroke-width="1"
              d="M 105.24,100.88
           C 105.24,100.88 86.80,59.31 86.80,59.31
             83.02,51.87 80.42,48.26 74.03,48.93
             74.03,48.93 65.87,50.85 65.87,50.85
             65.87,50.85 59.66,52.68 59.66,52.68
             54.82,56.56 56.02,59.05 54.25,61.28
             54.25,61.28 26.91,66.85 26.91,66.85
             24.12,67.01 23.56,63.35 20.13,62.19
             20.13,62.19 16.96,62.40 16.96,62.40
             16.96,62.40 11.56,63.67 11.56,63.67
             5.17,64.33 -1.07,69.34 1.19,76.46
             1.19,76.46 19.76,118.82 19.76,118.82
             22.59,125.30 26.14,129.87 32.53,129.21
             32.53,129.21 94.87,113.68 94.87,113.68
             101.26,113.01 108.12,106.56 105.24,100.88
             105.24,100.88 105.24,100.88 105.24,100.88 Z
           M 51.38,0.67
           C 51.38,0.67 36.53,23.97 36.53,23.97
             36.53,23.97 24.23,16.11 24.23,16.11
             24.23,16.11 34.27,61.74 34.27,61.74
             34.27,61.74 79.83,51.69 79.83,51.69
             79.83,51.69 67.54,43.82 67.54,43.82
             67.54,43.82 82.40,20.52 82.40,20.52
             82.40,20.52 51.38,0.67 51.38,0.67 Z
           M 106.21,100.88
           C 106.87,107.28 102.23,113.01 95.84,113.68
             95.84,113.68 33.50,129.21 33.50,129.21
             27.11,129.87 21.39,125.22 20.73,118.82
             20.73,118.82 17.02,63.52 17.02,63.52
             16.36,57.12 21.00,51.39 27.39,50.73
             27.39,50.73 89.86,36.59 89.86,36.59
             96.25,35.92 101.96,40.57 102.63,46.97
             102.63,46.97 106.21,100.88 106.21,100.88 Z"
            />
          </svg>

          <span class="ml-2 font-semibold text-xl tracking-tight">New</span>
        </div>

        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div class=" w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
          <div class="flex items-center space-x-1 fill-neutral-300 hover:fill-neutral-100 text-sm lg:flex-grow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.18889in"
              height="0.44444in"
              viewBox="0 0 32 32"
            >
              <path
                className="sm:invisible md:visible  "
                stroke="while"
                stroke-width="1"
                d="M 7.19,3.76
           C 7.01,3.74 6.85,3.79 6.72,3.92
             6.72,3.92 3.97,6.68 3.97,6.68
             3.72,6.92 3.79,7.36 4.09,7.67
             4.09,7.67 12.30,15.88 12.30,15.88
             12.30,15.88 4.09,24.10 4.09,24.10
             3.79,24.40 3.72,24.85 3.97,25.09
             3.97,25.09 6.72,27.85 6.72,27.85
             6.97,28.09 7.41,28.06 7.72,27.76
             7.72,27.76 15.93,19.54 15.93,19.54
             15.93,19.54 24.15,27.76 24.15,27.76
             24.45,28.06 24.90,28.09 25.14,27.85
             25.14,27.85 27.90,25.09 27.90,25.09
             28.14,24.85 28.08,24.40 27.77,24.10
             27.77,24.10 19.56,15.88 19.56,15.88
             19.56,15.88 27.77,7.67 27.77,7.67
             28.08,7.36 28.14,6.92 27.90,6.68
             27.90,6.68 25.14,3.92 25.14,3.92
             24.90,3.67 24.45,3.74 24.15,4.04
             24.15,4.04 15.93,12.26 15.93,12.26
             15.93,12.26 7.72,4.04 7.72,4.04
             7.57,3.89 7.37,3.78 7.19,3.76
             7.19,3.76 7.19,3.76 7.19,3.76 Z
           M 6.99,0.42
           C 6.61,0.46 6.25,0.60 5.97,0.88
             5.97,0.88 1.01,5.87 1.01,5.87
             0.27,6.62 0.41,7.96 1.29,8.85
             1.29,8.85 8.27,15.86 8.27,15.86
             8.27,15.86 8.27,16.04 8.27,16.04
             8.27,16.04 1.17,23.08 1.17,23.08
             0.27,23.96 0.14,25.29 0.89,26.02
             0.89,26.02 5.91,30.95 5.91,30.95
             6.65,31.69 7.96,31.59 8.85,30.71
             8.85,30.71 15.95,23.64 15.95,23.64
             15.95,23.64 23.08,30.83 23.08,30.83
             23.97,31.72 25.29,31.85 26.03,31.11
             26.03,31.11 30.99,26.09 30.99,26.09
             31.73,25.34 31.60,24.03 30.71,23.14
             30.71,23.14 23.67,16.04 23.67,16.04
             23.67,16.04 23.67,15.98 23.67,15.98
             23.67,15.98 30.83,8.88 30.83,8.88
             31.73,8.00 31.86,6.70 31.11,5.97
             31.11,5.97 26.12,1.01 26.12,1.01
             25.38,0.27 24.04,0.40 23.15,1.29
             23.15,1.29 16.08,8.32 16.08,8.32
             16.08,8.32 16.02,8.32 16.02,8.32
             16.02,8.32 8.92,1.16 8.92,1.16
             8.36,0.60 7.63,0.35 6.99,0.42
             6.99,0.42 6.99,0.42 6.99,0.42 Z"
              />
            </svg>

            <a
              href="#responsive-header"
              className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold text-xl tracking-tight"
            >
              Delete
            </a>
          </div>

          <div class="flex items-center space-x-1 fill-neutral-300 hover:fill-neutral-100 text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold text-xl tracking-tight"
            >
              Authorize
            </a>
          </div>

          <div class="flex items-center space-x-1 fill-neutral-300 hover:fill-neutral-100 text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold text-xl tracking-tight"
            >
              View
            </a>
          </div>

          <div class="flex items-center space-x-1 fill-neutral-300 hover:fill-neutral-100 text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold text-xl tracking-tight"
            >
              Ok
            </a>
          </div>

          <div class="flex items-center space-x-1 fill-neutral-300 hover:fill-neutral-100 text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold text-xl tracking-tight"
            >
              Cancel
            </a>
          </div>

          <div class="flex items-center space-x-1 fill-neutral-300 hover:fill-neutral-100 text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold text-xl tracking-tight"
            >
              Reject
            </a>
          </div>

          <div class="flex items-center space-x-1 fill-neutral-300 hover:fill-neutral-100 text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className=" mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 font-semibold text-xl tracking-tight"
            >
              Help
            </a>
          </div>

          <div>
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Exit
            </a>
          </div>
        </div>
      </div>
      <div className=" mt-10 border-4 border-slate-300 shadow-2xl"></div>
    </div>
  );
};

export default Header;
