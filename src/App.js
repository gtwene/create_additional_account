import Body from "./components/Body";
import Header from "./components/Header";
import X100Form3 from "./components/X100Form3";
import ImpressRequest from "./components/ImpressRequest";
import Modal_Element from "./components/Modal";
import Modal from "./components/Modal";
import useDarkMode from "./hook/useDarkMode";
import FormsMUI from "./components/MaterialUI";
import FormUI from "./components/MUIForm2";
import NextForms from "./components/NextForms";
import CardForm from "./components/CardForm";
import X100_MUIForm1 from "./components/X100Form1";
import X100Form1 from "./components/X100Form1";
import X100_MUIForm2 from "./components/X100_MUIForm2";

function App() {
  return (
    <div className="min-h-screen dark:bg-black transition duration-500">
      {/* <CardForm /> */}
      {/* <NextForms /> */}
      {/* <FormsMUI /> */}
      {/* <FormUI /> */}
      {/* <X100Form1 /> */}
      <X100_MUIForm2 />
      {/* <Modal_Element /> */}
      {/* <X100Form3 />   */}
      {/* <ImpressRequest /> */}
      {/* <Header /> */}
      {/* <div className=""><Body /></div> */}
      <div className=""></div>
    </div>
  );
}

export default App;
