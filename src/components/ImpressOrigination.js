import React from "react";
import useDarkMode from "../hook/useDarkMode";

const ImpressOrigination = () => {
  const [colorTheme, setTheme] = useDarkMode();
  let btnAdd = document.querySelector("button");
  let table = document.querySelector("table");

  let CreditAccountInput = document.getElementById("Credit-Account");
  let BranchInput = document.getElementById("branch");
  let CurrentBalanceInput = document.getElementById("current-Balance");
  let ScanDocumentInput = document.getElementById("scan-Document");
  let NarrationInput = document.getElementById("narration");

  //   btnAdd.addEventListener("click", () => {
  //     let CreditAccount = CreditAccountInput.value;
  //     let Branch = BranchInput.value;
  //     let CurrentBalance = CurrentBalanceInput.value;
  //     let ScanDocument = ScanDocumentInput.value;
  //     let Narration = NarrationInput.value;

  //     let template = `
  //         <tr>
  //         <td class="p-4 w-4">
  //         <div class="flex items-center">
  //           <input
  //             id="checkbox-search-3"
  //             type="checkbox"
  //             class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  //           />
  //           <label
  //             for="checkbox-search-3"
  //             class="sr-only"
  //           ></label>
  //         </div>
  //       </td>
  //                       <td>${CreditAccount}</td>
  //                       <td>${Branch}</td>
  //                       <td>${CurrentBalance}</td>
  //                       <td>${ScanDocument}</td>
  //                       <td>${Narration}</td>

  //                   </tr>
  //               `;

  //     table.innerHTML += template;
  //   });

  return (
    <div className="bg-slate-300">
      <div class="p-4 w-full text-center  bg-gradient-to-br from-green-400 to-blue-600 rounded-lg shadow-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h3 class="uppercase -mb-4 text-2xl font-bold text-white dark:text-white">
          Impress Origination
        </h3>

        <div className="fixed top-0 w-full p-5">
          <span
            onClick={() => setTheme(colorTheme)}
            className="w-10 h-10 bg-indigo-500 rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center "
          >
            {colorTheme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </span>
        </div>
      </div>

      <div className="m-5 space-x-2 pt-5 flex ">
        <div class="md:mr-5 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="pb-5 relative z-0 mb-6 w-full group">
            <input
              type="email"
              name="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class=" absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Credit Account
            </label>
          </div>
          <div class=" relative z-0 mb-6 w-full group dark:text-white">
            <input
              type="Date"
              name="floating_password"
              id="Credit-Account"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date Value
            </label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="Country"
              id="branch"
              name="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Branch
            </label>
          </div>
        </div>
        <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
          <div class="pb-5 relative z-0 mb-6 w-full group">
            <input
              type="number"
              id="current-Balance"
              name="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Current Balance
            </label>
          </div>
          <div class=" relative z-0 mb-6 w-full group">
            <input
              type="file"
              name="floating_password"
              id="scan-Document"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Scan Document
            </label>
          </div>
          <div class="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="narration"
              name="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Narration
            </label>
          </div>
        </div>
      </div>

      {/* TAble */}
      <div class="p-4 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="bg-white border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-800">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="#" class="flex">
              <button class="border-2 p-1 rounded bg-slate-500 hover:animate-pulse self-center text-lg font-semibold whitespace-nowrap dark:text-whiterelative inline-flex items-center justify-center  mb-2 mr-2 overflow-hidden   text-gray-900 group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0s">
                  Add
                </span>
              </button>
            </a>
            <div class="flex md:order-2">
              <div class="hidden relative mr-3 md:mr-0 md:block">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    class="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="email-adress-icon"
                  class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <button
                data-collapse-toggle="mobile-menu-3"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-3"
                aria-expanded="false"
              >
                <svg
                  class="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-3"
            >
              <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <button class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Post
                  </button>
                </li>
                <li>
                  <button class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Clear
                  </button>
                </li>
                <li>
                  <button class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                    Exit
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Table */}

        {/* Table Start */}
        <div class="flex flex-col">
          <div class="overflow-x-auto shadow-md sm:rounded-lg">
            <div class="inline-block min-w-full align-middle dark:bg-gray-800">
              <div class=" overflow-hidden">
                <table class=" min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead class="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th scope="col" class="p-4"></th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Expense Type
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Debit Amount
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Branch
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Scan Document
                      </th>
                      <th
                        scope="col"
                        class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Narration
                      </th>
                      <th scope="col" class="p-4">
                        <span class="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td class="p-4 w-4">
                        <div class="flex items-center">
                          <input
                            id="checkbox-search-3"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="checkbox-search-3"
                            class="sr-only"
                          ></label>
                        </div>
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Credit Account
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        Ghs 999
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Kasoa
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Document to be scan
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Document to be scan
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpressOrigination;
