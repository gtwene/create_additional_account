import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useDarkMode from "../hook/useDarkMode";
import { CgDanger } from 'react-icons/cg'

const ImpressOrigination = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [data, setData] = useState([]);
  let btnAdd = document.querySelector("button");
  let table = document.querySelector("table");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://swapi-deno.azurewebsites.net/api/starships`)
      const data = await response.json()

      setData(data)
    }

    getData()
  },[])

  return (
    <div className="bg-slate-600">
      {/* <div class="p-4 w-full text-center  bg-gradient-to-br from-green-400 to-blue-600 rounded-lg shadow-xl sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h3 class="uppercase invisible -mb-4 text-2xl font-bold text-white dark:text-white">
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
      </div> */}

      <div className="m-2 space-x-2 pt-2 flex ">
        {/* Starting of First Card */}
        <div class="md:mr-5 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="pb-2 relative mb-2 w-full ">
            <div className="">
              <Autocomplete
                options={data}
                style={{}}
                renderInput={(params) => (
                  <TextField
                    id="combo-box-demo"
                    {...params}
                    label="Customer ID"
                    variant="standard"
                  />
                )}
                getOptionLabel={(option) => `${option.name} `}
              />
            </div>
          </div>

          <div class=" flex relative z-0 mb-6 w-full group dark:text-white">
            
            <input
            disabled
              type="Country"
              id="branch"
              name="Source_Branch"
              class="block py-2.5  px-0 w-full text-lg text-black bg-transparent border-b-2 border-gray-500 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />

            <label
              for="floating_email"
              class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {/* <CgDanger />  */}
              Source Branch
            </label>
          </div>

          <div class=" relative z-0 mb-6 w-full group dark:text-white">
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
              class="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Account Name
            </label>
          </div>

          <div class="pb-2 relative mb-2 w-full ">
            <div className="">
              <Autocomplete
                options={data}
                style={{}}
                renderInput={(params) => (
                  <TextField
                    id="combo-box-demo"
                    {...params}
                    label="Product Group"
                    variant="standard"
                  />
                )}
                getOptionLabel={(option) => `${option.name} `}
              />
            </div>
          </div>
        </div>
        {/* End of First Card */}

        {/* Starting of Right Card */}
        <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
          <div class="pb-2 relative mb-2 w-full ">
            <Autocomplete
              options={data}
              style={{}}
              renderInput={(params) => (
                <TextField
                  id="combo-box-demo"
                  {...params}
                  label="Currency"
                  variant="standard"
                />
              )}
              getOptionLabel={(option) => `${option.name} `}
            />
          </div>

          <div class="pb-2 relative mb-2 w-full ">
            <Autocomplete
              options={data}
              style={{}}
              renderInput={(params) => (
                <TextField
                  id="combo-box-demo"
                  {...params}
                  label="FX Category"
                  variant="standard"
                />
              )}
              getOptionLabel={(option) => `${option.name} `}
            />
          </div>

          <div class="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="narration"
              name="floating_email"
              class="block py-2.5 px-0 w-full text-lg text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="absolute text-lg text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Account Mandate
            </label>
          </div>

          
        </div>
        {/* End of Right Card */}
      </div>

      {/* TAble */}
      <div class="p-2 w-full bg-slate-500 rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 m-2 space-x-2 pt-2 flex ">
          {/* Left Card */}
          <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <div class="pb-2 relative mb-2 w-full ">
              <div className="">
                <Autocomplete
                  options={data}
                  style={{}}
                  renderInput={(params) => (
                    <TextField
                      id="combo-box-demo"
                      {...params}
                      label="Product Sub Group"
                      variant="standard"
                    />
                  )}
                  getOptionLabel={(option) => `${option.name} `}
                />
              </div>
            </div>

            <div class="pb-2 relative mb-2 w-full ">
            <Autocomplete
              options={data}
              style={{}}
              renderInput={(params) => (
                <TextField
                  id="combo-box-demo"
                  {...params}
                  label="Statement Required"
                  variant="standard"
                />
              )}
              getOptionLabel={(option) => `${option.name} `}
            />
          </div>
          </div>

          {/* Riht Card */}
          <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <div class="pb-2 relative mb-2 w-full ">
              <div className="">
                <Autocomplete
                  options={data}
                  style={{}}
                  renderInput={(params) => (
                    <TextField
                      id="combo-box-demo"
                      {...params}
                      label="Sector"
                      variant="standard"
                    />
                  )}
                  getOptionLabel={(option) => `${option.name} `}
                />
              </div>
            </div>

            <div class="pb-2 relative mb-2 w-full ">
              <div className="">
                <Autocomplete
                  options={data}
                  style={{}}
                  renderInput={(params) => (
                    <TextField
                      id="combo-box-demo"
                      {...params}
                      label="Sub Sector"
                      variant="standard"
                    />
                  )}
                  getOptionLabel={(option) => `${option.name} `}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Arm Officer Card */}
        <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
          <div class="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 p-5 ">
              <TextField
                label="Arm Officer"
                id="outlined-size-small"
                size="small"
                variant="standard"
                className="appearance-none block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>

            <div class=" w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                disabled
                id="outlined-size-small"
                size="small"
                variant="filled"
                className="appearance-none bg-gray-400 block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>

            <div className="w-full md:w-1/2 mb-6 md:mb-0 p-5 ">
              <TextField
                label="Customer Segment"
                id="outlined-size-small"
                size="small"
                variant="standard"
                className="appearance-none block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>

            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                disabled
                id="outlined-size-small"
                size="small"
                variant="filled"
                className="appearance-none bg-gray-400 block w-full text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>

            <div className="w-full md:w-1/2 mb-6 md:mb-0 p-5 ">
              <TextField
                label="Cust. Sub Segment"
                id="outlined-size-small"
                size="small"
                variant="standard"
                className="appearance-none block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>

            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                disabled
                id="outlined-size-small"
                size="small"
                variant="filled"
                className="appearance-none bg-gray-400 block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>
        </div>
        {/* End of Arm Officer Card */}

        <div class="p-4 w-full bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 ">
        <div class="flex flex-wrap -mx-3">
        <div class="w-full md:w-1/2  mb-6 md:mb-0 p-2">
            <TextField
              id="filled-select-currency"
              select
              size="small"
              label="Freq. Of Statement"
              // value={receiveStatement}
              // onChange={handleChangeStatement}
              variant="standard"
              className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              {/* {Statements.map((eachStatement) => (
                <MenuItem key={eachStatement.value} value={eachStatement.value}>
                  {eachStatement.label}
                </MenuItem>
              ))} */}
            </TextField>
          </div>

          <div class="w-full md:w-1/2  mb-6 md:mb-0 p-2">
            <TextField
              id="filled-basic"
              size="small"
              label="Start Date"
              variant="standard"
              type="date"
              defaultValue="2020-05-26"
              className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div>
        </div>
        {/* End Table */}
      </div>
    </div>
  );
};

export default ImpressOrigination;
