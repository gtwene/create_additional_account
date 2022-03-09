import Body from "./components/Body";
import Header from "./components/Header";
import ImpressOrigination from "./components/ImpressOrigination";
import ImpressRequest from "./components/ImpressRequest";
import Modal_Element from "./components/Modal";
import Modal from "./components/Modal";
import useDarkMode from "./hook/useDarkMode";
import FormsMUI from "./components/MaterialUI";
import MUIForm from "./components/MUIForm1";
import FormUI from "./components/MUIForm2";
import NextForms from "./components/NextForms";
import CardForm from "./components/CardForm";

function App() {
  return (
    <div className="min-h-screen dark:bg-black transition duration-500">
    {/* <CardForm /> */}
    {/* <NextForms /> */}
      {/* <FormsMUI /> */}
      {/* <FormUI /> */}
        <MUIForm /> 
      {/* <Modal_Element /> */}
      {/* <ImpressOrigination />   */}
        {/* <ImpressRequest /> */}
      {/* <Header /> */}
      <div className="">{/* <Body /> */}</div>
      <div className=""></div>
    </div>
  );
}

export default App;
