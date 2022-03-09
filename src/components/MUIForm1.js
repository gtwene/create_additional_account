import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Sectors = [
  {
    value: "AGRICULTURE AND FORESTRY",
    label: "AGRICULTURE AND FORESTRY",
  },
  {
    value: "BUSINESS SERVICES",
    label: "BUSINESS SERVICES",
  },
  {
    value: "COMMERCE & FINANCE",
    label: "COMMERCE & FINANCE",
  },
  {
    value: "COMMUNICATION",
    label: "COMMUNICATION",
  },
  {
    value: "CONSTRUCTION",
    label: "CONSTRUCTION",
  },
  {
    value: "MANUFACTURING",
    label: "MANUFACTURING",
  },
  {
    value: "MARINE RESOURCES",
    label: "MARINE RESOURCES",
  },
  {
    value: "MINING AND QUARRYING",
    label: "MINING AND QUARRYING",
  },
  {
    value: "MISCELLANEOUS",
    label: "MISCELLANEOUS",
  },
  {
    value: "OTHER SERVICES",
    label: "OTHER SERVICES",
  },
  {
    value: "PERSONAL SERVICES",
    label: "PERSONAL SERVICES",
  },
  {
    value: "PETROLEUM",
    label: "PETROLEUM",
  },
  {
    value: "TRANSPORTATION AND STORAGE",
    label: "TRANSPORTATION AND STORAGE",
  },
  {
    value: "UTILITY SERVICES",
    label: "UTILITY SERVICES",
  },
];

const subSector = [
  {
    value: "LEGAL SERVICES",
    label: "LEGAL SERVICES",
  },
  {
    value: "ARCHITECTURAL DESIGN",
    label: "ARCHITECTURAL DESIGN",
  },
  {
    value: "VEHICLE AND EQUIPMENT HIRE SERVICES",
    label: "ARCHITECTURAL DESIGN",
  },
  {
    value: "AUDIT, TAXATION AND ACCOUNTANCY",
    label: "AUDIT, TAXATION AND ACCOUNTANCY",
  },
  {
    value: "CAR DEALERSHIP",
    label: "CAR DEALERSHIP",
  },
  {
    value: "DEBIT COLLECTIONS",
    label: "DEBIT COLLECTIONS",
  },
  {
    value: "INSPECTIONS",
    label: "INSPECTIONS",
  },
  {
    value: "QUANTITY SURVEYS",
    label: "QUANTITY SURVEYS",
  },
  {
    value: "OTHER BUSINESS SERVICES",
    label: "OTHER BUSINESS SERVICE",
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

const MUIForm = () => {
  const [currency, setCurrency] = React.useState("NONE");
  const [receiveStatement, setReceiveStatement] = React.useState("");
  const [subSectors, setSubSectors] = React.useState("");
  const [sectorSelet, setSectorSelet] = React.useState("");
  const [productGroups, setProductGroup] = React.useState("");
  const [productSubGroups, setProductSubGroup] = React.useState("");
  const [currencyHelpScreens, setCurrencyHelpScreens] = React.useState("");
  const [fxcurrencys, seFxcurrencys] = React.useState("");

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
    <div className="m-5 p-10">
      <div class="p-4 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className=" p-2 m-2">
          <div class="flex flex-wrap -mx-3 mb-6 pt-0">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 p-5 ">
              <TextField
                id="filled-basic"
                label="Customer ID"
                variant="filled"
                className="appearance-none block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>

            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                disabled
                id="filled-basic"
                label="Source Branch"
                variant="filled"
                className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>

            <div class="w-full px-5 pt-5">
              <TextField
                className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="filled-basic"
                label="Account Name"
                variant="filled"
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-4  ">
            {/* Product Group Field */}
            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
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
            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                id="filled-select-currency"
                select
                label="Product Sub Group"
                value={productSubGroups}
                onChange={handleProductSubGroup}
                variant="filled"
                className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                {productSubGroup.map((eachProductSubGroup) => (
                  <MenuItem
                    key={eachProductSubGroup.value}
                    value={eachProductSubGroup.value}
                  >
                    {eachProductSubGroup.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            {/* End Select Field */}

            {/* Currency Field */}
            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                id="filled-select-currency"
                select
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
            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                id="filled-select-currency"
                select
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

            <div class="w-full px-5 pt-5">
              <TextField
                id="filled-basic"
                label="Account Mandate"
                variant="filled"
                className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>
          </div>

          {/* Arm Officer Cardd */}
          <div class="p-4 w-full  bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex flex-wrap -mx-3 mb-6 pt-0">
              <div className="w-full md:w-1/2 mb-6 md:mb-0 p-5 ">
                <TextField
                  id="filled-basic"
                  label="Arm Officer"
                  variant="filled"
                  className="appearance-none block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div class=" w-full md:w-1/2  mb-6 md:mb-0 p-5">
                <TextField
                  disabled
                  id="filled-basic"
                  label=""
                  variant="filled"
                  className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full md:w-1/2 mb-6 md:mb-0 p-5 ">
                <TextField
                  id="filled-basic"
                  label="Customer Segment"
                  variant="filled"
                  className="appearance-none block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
                <TextField
                  disabled
                  id="filled-basic"
                  label=""
                  variant="filled"
                  className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div className="w-full md:w-1/2 mb-6 md:mb-0 p-5 ">
                <TextField
                  id="filled-basic"
                  label="Cust. Sub Segment"
                  variant="filled"
                  className="appearance-none block w-full  text-gray-700 border px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>

              <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
                <TextField
                  disabled
                  id="filled-basic"
                  label=""
                  variant="filled"
                  className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                />
              </div>
            </div>
          </div>

          {/* Arm oofficer end */}

          <div class="flex flex-wrap -mx-3 mb-4  pb-1">
            {/* Sector Field */}
            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                id="filled-select-currency"
                select
                label="Sector"
                value={sectorSelet}
                onChange={handleSectorSelect}
                variant="filled"
                className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                {Sectors.map((eachSector) => (
                  <MenuItem key={eachSector.value} value={eachSector.value}>
                    {eachSector.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            {/* End Select Field */}

            {/* Sub Sector Field */}
            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                id="filled-select-currency"
                select
                label="Sub Sector"
                value={subSectors}
                onChange={handlesubSector}
                variant="filled"
                className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                {subSector.map((eachsubSector) => (
                  <MenuItem
                    key={eachsubSector.value}
                    value={eachsubSector.value}
                  >
                    {eachsubSector.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            {/* End Select Field */}

            {/* Select Field */}
            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                id="filled-select-currency"
                select
                label="Freq. Of Statement"
                value={receiveStatement}
                onChange={handleChangeStatement}
                variant="filled"
                className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                {Statements.map((eachStatement) => (
                  <MenuItem
                    key={eachStatement.value}
                    value={eachStatement.value}
                  >
                    {eachStatement.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            {/* End Select Field */}
            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                id="filled-basic"
                label="Start Date"
                variant="filled"
                type="date"
                defaultValue="2020-05-26"
                className="appearance-none block w-full  text-gray-700 border rounded px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              />
            </div>

            {/* Select Field */}
            <div class="w-full md:w-1/2  mb-6 md:mb-0 p-5">
              <TextField
                id="filled-select-currency"
                select
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
        </div>
      </div>
    </div>
  );
};

export default MUIForm;

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
