import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Sectors = [
  {
    value: "AGRICULTURE AND FORESTRY",
  },
  {
    value: "BUSINESS SERVICES",
  },
  {
    value: "COMMERCE & FINANCE",
  },
  {
    value: "COMMUNICATION",
  },
  {
    value: "CONSTRUCTION",
  },
  {
    value: "MANUFACTURING",
  },
  {
    value: "MARINE RESOURCES",
  },
  {
    value: "MINING AND QUARRYING",
  },
  {
    value: "MISCELLANEOUS",
  },
  {
    value: "OTHER SERVICES",
  },
  {
    value: "PERSONAL SERVICES",
  },
  {
    value: "PETROLEUM",
  },
  {
    value: "TRANSPORTATION AND STORAGE",
  },
  {
    value: "UTILITY SERVICES",
  },
];

const subSector = [
  {
    value: "LEGAL SERVICES",
  },
  {
    value: "ARCHITECTURAL DESIGN",
  },
  {
    value: "VEHICLE AND EQUIPMENT HIRE SERVICES",
  },
  {
    value: "AUDIT, TAXATION AND ACCOUNTANCY",
  },
  {
    value: "CAR DEALERSHIP",
  },
  {
    value: "DEBIT COLLECTIONS",
  },
  {
    value: "INSPECTIONS",
  },
  {
    value: "QUANTITY SURVEYS",
  },
  {
    value: "OTHER BUSINESS SERVICES",
  },
];

const currencies = [
  {
    value: "FOREIGN",
    label: "FOREIGN",
  },
  {
    value: "FOREX",
    label: "FOREX",
  },
];

const currencyHelpScreen = [
  {
    value: "LEONES",
    label: "LEONES",
  },
  {
    value: "BRITISH POUNDS",
    label: "BRITISH POUNDS",
  },
  {
    value: "US DOLLAR",
    label: "US DOLLAR",
  },
  {
    value: "EURO",
    label: "EURO",
  },
];

const productGroup = [
  {
    value: "Current Account",
    label: "Current Account",
  },
  {
    value: "Savings Account",
    label: "Savings Account",
  },
];

const productSubGroup = [
  {
    value: "CA - PERSONAL",
    label: "CA - PERSONAL",
  },
  {
    value: "CA - STAFF",
    label: "CA - STAFF",
  },
  {
    value: "CA - CORPORATE",
    label: "CA - CORPORATE",
  },
  {
    value: "CA - SAFE DEPOSIT",
    label: "CA - SAFE DEPOSIT",
  },
  {
    value: "CA - STUDENT AND GRADUATES ACCOUNT",
    label: "CA - STUDENT AND GRADUATES ACCOUNT",
  },
  {
    value: "CA - AUTOMATION",
    label: "CA - AUTOMATION",
  },
  {
    value: "AHOTOR EXPRESS FUND",
    label: "AHOTOR EXPRESS FUND",
  },
  {
    value: "YPC SUSU LOANS",
    label: "YPC SUSU LOANS",
  },
  {
    value: "STUDENTS LOAN",
    label: "STUDENTS LOAN",
  },
  {
    value: "ADIPA CURRENT ACCOUNT",
    label: "ADIPA CURRENT ACCOUNT",
  },
];

const Statements = [
  {
    value: "Daily",
    label: "Daily",
  },
  {
    value: "Weekly",
    label: "Weekly",
  },
  {
    value: "Bi Weekly",
    label: "Bi Weekly",
  },
  {
    value: "Monthly",
    label: "Monthly",
  },
  {
    value: "Quarterly",
    label: "Quarterly",
  },
  {
    value: "Half Yearly",
    label: "Half Yearly",
  },
  {
    value: "Year",
    label: "Year",
  },
];

const YesNo = [
  {
    value: "Yes",
    label: "Yes",
  },
  {
    value: "No",
    label: "No",
  },
];

const X100Form1 = () => {
  const [currency, setCurrency] = React.useState("NONE");
  const [receiveStatement, setReceiveStatement] = React.useState("");
  const [subSectors, setSubSectors] = React.useState(subSector);
  const [sectorSelet, setSectorSelet] = React.useState(Sectors);
  const [productGroups, setProductGroup] = React.useState("");
  const [productSubGroups, setProductSubGroup] =
    React.useState(productSubGroup);
  const [currencyHelpScreens, setCurrencyHelpScreens] = React.useState("");
  const [fxcurrencys, seFxcurrencys] = React.useState("");
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://swapi-deno.azurewebsites.net/api/starships`
      );
      const dataOptions = await response.json();

      setData(dataOptions);
    };
    getData();
  }, []);

  const handlefxcurrencys = (e) => {
    seFxcurrencys(e.target.value);
  };

  const handleCurrencyHelpScreens = (e) => {
    setCurrencyHelpScreens(e.target.value);
  };

  const handleProductSubGroup = (e) => {
    setProductSubGroup(e.target.value);
  };

  const handleProductGroup = (e) => {
    setProductGroup(e.target.value);
  };

  const handleSectorSelect = (e) => {
    setSectorSelet(e.target.value);
  };

  const handlesubSector = (e) => {
    setSubSectors(e.target.value);
  };

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleChangeStatement = (e) => {
    setReceiveStatement(e.target.value);
  };

  const productGroupHandle = (e) => {};

  return (
    <div className="p-5">
      <div className="">
        <div class="flex flex-wrap -mx-3 mb-6 pt-0">
          <div className="w-full md:w-1/2 mb-6 md:mb-0 p-2 ">
            <Autocomplete
              options={data}
              style={{}}
              renderInput={(params) => (
                <TextField
                  id="combo-box-demo"
                  {...params}
                  label="Customer ID"
                />
              )}
              getOptionLabel={(option) => `${option.name} `}
            />
          </div>

          <div class="w-full md:w-1/2  mb-6 md:mb-0 p-2">
            <TextField
              disabled
              id="filled-basic"
              label="Source Branch"
              variant="filled"
              className="appearance-none bg-gray-100 block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          <div class="w-full px-2 pt-5">
            <TextField
              className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="filled-basic"
              label="Account Name"
              variant="filled"
              size="small"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4  ">
          {/* Product Group Field */}
          <div class="w-full md:w-1/2  mb-6 md:mb-0 p-2">
            <TextField
              id="filled-select-currency"
              select
              label="Product Group"
              value={productGroups}
              onChange={handleProductGroup}
              variant="filled"
              className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              {productGroup.map((eachProductGroup) => (
                <MenuItem
                  key={eachProductGroup.value}
                  value={eachProductGroup.value}
                >
                  {eachProductGroup.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {/* End Select Field */}

          {/* Product Sub Group Field */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 p-2 ">
            <Autocomplete
              options={productSubGroups}
              renderInput={(params) => (
                <TextField
                  id="filled-basic"
                  {...params}
                  label="Product Sub Group"
                  variant="outlined"
                  className="appearance-none block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              )}
              getOptionLabel={(option) => `${option.value} `}
            />
          </div>
          {/* End Select Field */}

          {/* Currency Field */}
          <div class="w-full md:w-1/2  mb-6 md:mb-0 p-2">
            <TextField
              id="filled-select-currency"
              select
              size="small"
              label="Currency"
              value={currencyHelpScreens}
              onChange={handleCurrencyHelpScreens}
              variant="filled"
              className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              {currencyHelpScreen.map((eachcurrencyHelpScreen) => (
                <MenuItem
                  key={eachcurrencyHelpScreen.value}
                  value={eachcurrencyHelpScreen.value}
                >
                  {eachcurrencyHelpScreen.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {/* End Select Field */}

          {/* Select Field */}
          <div class="w-full md:w-1/2  mb-6 md:mb-0 p-2">
            <TextField
              id="filled-select-currency"
              select
              size="small"
              label="FX Category"
              value={fxcurrencys}
              onChange={handlefxcurrencys}
              variant="filled"
              className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {/* End Select Field */}

          <div class="w-full md:w-1/2  mb-6 md:mb-0 p-2">
            <TextField
              
              id="filled-basic"
              label="Acount Mandate"
              size="small"
              variant="filled"
              className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>

          {/* Select Field */}
          <div class="w-full md:w-1/2  mb-6 md:mb-0 p-2">
            <TextField
              id="filled-select-currency"
              select
              size="small"
              label="Statement Required"
              value={receiveStatement}
              onChange={handleChangeStatement}
              variant="filled"
              className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              {YesNo.map((eachYesNo) => (
                <MenuItem key={eachYesNo.value} value={eachYesNo.value}>
                  {eachYesNo.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {/* End Select Field */}
        </div>

        {/* Arm Officer Cardd */}
        <div class="p-0 w-full  bg-white rounded-lg border shadow-md sm:p-0 dark:bg-gray-800 dark:border-gray-700">
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
        </div>

        {/* Arm oofficer end */}

        <div class="flex flex-wrap -mx-3 mb-4  pb-1">
          {/* Sector Field */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 p-2 ">
            <Autocomplete
              options={sectorSelet}
              renderInput={(params) => (
                <TextField
                  id=""
                  {...params}
                  label="Sector"
                  className="appearance-none block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              )}
              getOptionLabel={(option) => `${option.value} `}
            />
          </div>
          {/* End Select Field */}

          {/* Sub Sector Field */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0 p-2 ">
            <Autocomplete
              options={subSectors}
              renderInput={(params) => (
                <TextField id="" {...params} label="Sub Sector" />
              )}
              getOptionLabel={(option) => `${option.value} `}
            />
          </div>
          {/* End Select Field */}

          {/* Select Field */}
          <div class="w-full md:w-1/2  mb-6 md:mb-0 p-2">
            <TextField
              id="filled-select-currency"
              select
              size="small"
              label="Freq. Of Statement"
              value={receiveStatement}
              onChange={handleChangeStatement}
              variant="filled"
              className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            >
              {Statements.map((eachStatement) => (
                <MenuItem key={eachStatement.value} value={eachStatement.value}>
                  {eachStatement.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          {/* End Select Field */}
          <div class="w-full md:w-1/2  mb-6 md:mb-0 p-2">
            <TextField
              id="filled-basic"
              size="small"
              label="Start Date"
              variant="filled"
              type="date"
              defaultValue="2020-05-26"
              className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default X100Form1;

{
  /* <div class="py-5 px-0 lg:m-10 md:m-2 md:w-1/4 sm:w-1/2 w-full ">
              <div class="shadow-2xl shadow-slate-600 border-2 border-gray-500 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110">
              <TextField
                id="filled-basic"
                label="Customer ID"
                variant="filled"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
              </div>
            </div> */
}
