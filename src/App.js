import backgroundTrans from "./components/backgroundTrans";
import Body from "./components/Body";
import Header from "./components/Header";
import ImpressOrigination from "./components/ImpressOrigination";
import ImpressRequest from "./components/ImpressRequest";
import Modal from "./components/Modal";
import useDarkMode from "./hook/useDarkMode";

function App() {
  return (
    <div className="min-h-screen dark:bg-black transition duration-500">
      {/* <Modal /> */}
      {/* <backgroundTrans /> */}
      <ImpressOrigination />
      {/* <ImpressRequest /> */}
      {/* <Header /> */}
      {/* <div className=""><Body /></div> */}
      <div className=""></div>
    </div>
  );
}

export default App;
