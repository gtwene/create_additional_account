import React from "react";

const Body = () => {
  return (
    <div>
      <div className=" p-5 m-5">
        <div className="border-2 border-slate-400 rounded-lg  ">
          <form class=" p-10 ">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Customer ID
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Source Branch
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder=""
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Account Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  for="website-admin"
                  class="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Product Group
                </label>
                <div class="flex">
                  <input class="inline-flex items-center px-10 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" />
                  <input
                    type="text"
                    id="website-admin"
                    class="ml-5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  for="website-admin"
                  class="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Product Sub Group
                </label>
                <div class="flex">
                  <input class="inline-flex items-center px-10 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" />
                  <input
                    type="text"
                    id="website-admin"
                    class="ml-5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Account Mandate
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>

            {/* <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  for="website-admin"
                  class="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Currency
                </label>
                <div class="flex">
                  <input class="inline-flex items-center px-10 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" />
                  <input
                    type="text"
                    id="website-admin"
                    class="ml-5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div> */}

            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Currency
                </label>
                <div className="flex ">
                  <input
                    class="mr-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder=""
                  />
                  {/* <BsSearch className="text-5xl text-white-100  p-2 mr-2 " /> */}
                  {/* <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="HIGH STREET"
                  /> */}
                </div>
              </div>

              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="invisible block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  Scan Document
                </label>
                <div className="flex ">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
                >
                  FX Category
                </label>
                <select
                  class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="text"
                  placeholder=""
                >
                  <option>None</option>
                  <option>None</option>
                  <option>None</option>
                  <option>None</option>
                </select>
              </div>
            </div>

            <div className="p-5 mt-10 border-2 border-slate-400 rounded-lg ">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    for="website-admin"
                    class="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Arm Officer
                  </label>
                  <div class="flex">
                    <input class="inline-flex items-center px-10 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" />
                    <input
                      type="text"
                      id="website-admin"
                      class="ml-5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    for="website-admin"
                    class="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Customer Segment
                  </label>
                  <div class="flex">
                    <input class="inline-flex items-center px-10 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" />
                    <input
                      type="text"
                      id="website-admin"
                      class="ml-5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    for="website-admin"
                    class="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Customer Sub Segment
                  </label>
                  <div class="flex">
                    <input class="inline-flex items-center px-10 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" />
                    <input
                      type="text"
                      id="website-admin"
                      class="ml-5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    for="website-admin"
                    class="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Sector
                  </label>
                  <div class="flex">
                    <input class="inline-flex items-center px-10 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" />
                    <input
                      type="text"
                      id="website-admin"
                      class="ml-5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    for="website-admin"
                    class="block uppercase mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Sub Sector
                  </label>
                  <div class="flex">
                    <input class="inline-flex items-center px-10 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" />
                    <input
                      type="text"
                      id="website-admin"
                      class="ml-5 rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-city"
                  >
                    Freq. Of Statement
                  </label>
                  <div className="flex ">
                    <input
                      class="mr-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-city"
                      type="text"
                      placeholder="001"
                    />
                    {/* <BsSearch className="text-5xl text-white-100  p-2 mr-2 " /> */}
                    {/* <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="HIGH STREET"
                  /> */}
                  </div>
                </div>

                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-zip"
                  >
                    Start Date
                  </label>
                  <div className="flex ">
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-zip"
                  >
                    Statement Required
                  </label>
                  <select
                    class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder=""
                  >
                    <option></option>
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
                </div>
              </div>
            </div>
          </form>
          <button className="text-3xl pb-5 ml-10 hover:text-blue-600 animate-bounce">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
