import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { Autocomplete } from "@material-ui/lab";
import InputIcon from "@material-tailwind/react/InputIcon";
import { TextField } from "@material-ui/core";

export default function X100_MUIForm2() {
  const [data, setData] = useState([]);
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    const getdataSet = async () => {
      const response = await fetch(
        `https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0`
      );
      const dataTime = await response.json();

      console.log(dataTime.dataseries);
    };

    getdataSet();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://swapi-deno.azurewebsites.net/api/starships`
      );
      const data = await response.json();

      setData(data);
    };

    getData();
  }, []);

  return (
    <div className="m-5">
      <div class="sm:flex md:flex">
        {/* First */}
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <Autocomplete
              options={data}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
                  id="filled-basic"
                  label="Customer ID"
                  variant="standard"
                />
              )}
              getOptionLabel={(option) => `${option.name}`}
            />
          </div>

          <div class="w-full ">
            <TextField
              disabled
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Source Branch"
              variant="standard"
            />
          </div>
        </div>
        {/* Second */}
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Product Group"
              variant="standard"
            />
          </div>

          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Product Sub Group"
              variant="standard"
            />
          </div>
        </div>
      </div>

      {/* Division 1 */}
      <div class="sm:flex md:flex ">
        {/* First */}
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Account Name"
              variant="standard"
            />
          </div>

          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Currency"
              variant="standard"
            />
          </div>
        </div>
        {/* Second */}
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Account Mandate"
              variant="standard"
            />
          </div>

          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Fx Category"
              variant="standard"
            />
          </div>
        </div>
      </div>

      {/* Division 2 */}
      <div class="sm:flex md:flex ">
        {/* First */}
        <div class="p-4 space-y-1 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Arm Officer"
              variant="standard"
              size="small"
            />
          </div>

          <div class="w-full ">
            <TextField
              disabled
              className="appearance-none bg-gray-400 block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label=""
              variant="filled"
            />
          </div>
        </div>

        <div class="p-4 space-y-1 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Customer Segment"
              variant="standard"
              size="small"
            />
          </div>

          <div class="w-full ">
            <TextField
              disabled
              className="appearance-none bg-gray-400 block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label=""
              variant="filled"
            />
          </div>
        </div>
        {/* Second */}
        <div class="p-4 space-y-1 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Customer Sub Segment"
              variant="standard"
              size="small"
            />
          </div>

          <div class="w-full ">
            <TextField
              disabled
              className="appearance-none bg-gray-400 block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label=""
              variant="filled"
            />
          </div>
        </div>
      </div>

      <div class="sm:flex md:flex ">
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Sector"
              variant="standard"
              size="small"
            />
          </div>
        </div>
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Sub Sector"
              variant="standard"
              size="small"
            />
          </div>
        </div>
      </div>

      {/* Third */}
      <div class="sm:flex md:flex ">
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Freq. Of Statment"
              variant="standard"
              size="small"
            />
          </div>
        </div>
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Start Date"
              type="date"
              defaultValue="2020-05-26"
              variant="standard"
              size="small"
            />
          </div>
        </div>
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Statement Required"
              variant="standard"
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
