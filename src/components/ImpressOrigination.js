import React from "react";

const Body = () => {
  return (
    <div>
      <div className="bg-slate-500 p-5 pt-2 text-center text-white font-bold text-3xl shadow-xl">
        <h1>Impress Origination</h1>
      </div>
      <div className=" p-5 m-5">
        <div className="border-2 border-slate-400 rounded-lg  ">
          <form class=" p-10 ">
            {/* Customer */}
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Credit Account
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="PETTY CASH - SLL - HIGH STREET - 111121000003(SLL)"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Value Date
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type=""
                  placeholder={Date()}
                />
              </div>
            </div>

            {/* Account Name */}
            {/* <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Account Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder=""
                />
              </div>
            </div> */}

            {/* Branch */}
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Branch
                </label>
                <input
                  class=" block w-full bg-gray-200 text-gray-700 border  rounded py-1 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="001"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="invisible block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 "
                  for="grid-last-name"
                >
                  Branch
                </label>
                <input
                  class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="HIGH STREET"
                />
              </div>
            </div>

            {/* Product Sub Group */}
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Scan Document
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-1 px-4  leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="invisible block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Scan Document
                </label>
                <button class="block w-full hover:bg-slate-400 hover:text-black bg-slate-900 text-gray-200 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 animate-pulse">
                  View Doc
                </button>
              </div>
            </div>

            {/* Narration */}
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Narration
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder=""
                />
              </div>
            </div>

            {/* Account Balance */}
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Current Balance
                </label>
                <div className="flex ">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>
            </div>

            {/* Second Border */}
            <div className="p-5 mt-10 border-2 border-slate-400 rounded-lg ">
              {/* Start Of Second Header */}
              <div class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                  <a href="#" class="flex">
                    <button class="border-4 p-1 rounded-lg bg-slate-600 border-blue-900 shadow-lg hover:bg-blue-900 hover:text-white self-center text-lg font-semibold whitespace-nowrap ">
                      Posted Transactions
                    </button>
                  </a>

                  <div
                    class="hidden w-full md:block md:w-auto"
                    id="mobile-menu"
                  >
                    <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                      <li>
                        <button
                          href="#"
                          class="border-blue-500 shadow-lg hover:bg-blue-900 hover:text-white block border-2 p-5 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-1 dark:text-white"
                          aria-current="page"
                        >
                          Clear
                        </button>
                      </li>
                      <li>
                        <button
                          href="#"
                          class="border-blue-500 shadow-lg hover:bg-blue-900 hover:text-white block border-2 p-5 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-1 dark:text-white"
                        >
                          Post
                        </button>
                      </li>
                      <li>
                        <button class="border-red-500 shadow-lg hover:bg-blue-900 hover:text-white  border-2 p-5  rounded md:bg-transparent md:text-red-500 md:p-1 dark:text-white lg:text-red-500">
                          Exit
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End Of Second Header */}

              <div class="flex flex-col mt-8">
                <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                  <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                    <table class="min-w-full">
                      <thead>
                        <tr>
                          <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Expense Type
                          </th>
                          <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Debit Amount
                          </th>
                          <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Branch
                          </th>
                          <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Scan Document
                          </th>
                          <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Narration
                          </th>
                          <th class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Delete
                          </th>
                        </tr>
                      </thead>

                      {/* Entry */}

                      <tbody class="bg-white overflow-hidden">
                        <tr>
                          <td class="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="flex items-center">
                              <div class="ml-4">
                                <input
                                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-zip"
                                  type="text"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </td>

                          <td class="px-3 py-4 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>

                          <td class="px-3 py-4 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>

                          <td class="px-3 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>
                          <td class="px-3 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>
                          <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </td>
                        </tr>

                        <tr>
                          <td class="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="flex items-center">
                              <div class="ml-4">
                                <input
                                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-zip"
                                  type="text"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </td>

                          <td class="px-3 py-4 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>

                          <td class="px-3 py-4 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>

                          <td class="px-3 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>
                          <td class="px-3 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>
                          <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </td>
                        </tr>

                        <tr>
                          <td class="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="flex items-center">
                              <div class="ml-4">
                                <input
                                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  id="grid-zip"
                                  type="text"
                                  placeholder=""
                                />
                              </div>
                            </div>
                          </td>

                          <td class="px-3 py-4 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>

                          <td class="px-3 py-4 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>

                          <td class="px-3 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>
                          <td class="px-3 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip"
                              type="text"
                              placeholder=""
                            />
                          </td>
                          <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-red-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mt-5 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-city"
                >
                  Total
                </label>
                <div className="flex ">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-zip"
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="p-5 mt-10 border-2 border-slate-400 rounded-lg ">
                <div class="flex flex-wrap -mx-3 mb-2">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-city"
                    >
                      Account Name
                    </label>
                    <div className="flex ">
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                      Chart Group
                    </label>
                    <div className="flex ">
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                      Current Balance
                    </label>
                    <input
                      class=" block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-zip"
                      type="text"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
