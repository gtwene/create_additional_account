import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

import { Autocomplete } from "@material-ui/lab";
import InputIcon from "@material-tailwind/react/InputIcon";
import { TextField } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function X100_MUIForm2() {
  const [data, setData] = useState([]);

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
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Customer ID"
              variant="filled"
            />
          </div>

          <div class="w-full ">
            <TextField
              disabled
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Source Branch"
              variant="filled"
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
              variant="filled"
            />
          </div>

          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Product Sub Group"
              variant="filled"
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
              variant="filled"
            />
          </div>

          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Currency"
              variant="filled"
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
              variant="filled"
            />
          </div>

          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Fx Category"
              variant="filled"
            />
          </div>
        </div>
      </div>

      {/* Division 2 */}
      <div class="sm:flex md:flex ">
        {/* First */}
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Arm Officer"
              variant="filled"
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

        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Customer Segment"
              variant="filled"
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
        <div class="p-4 w-full text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div class="w-full ">
            <TextField
              className="appearance-none block w-full  text-gray-700 border rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white "
              id="filled-basic"
              label="Customer Sub Segment"
              variant="filled"
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
              variant="filled"
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
              variant="filled"
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
              variant="filled"
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
              variant="filled"
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
              variant="filled"
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
