import Body from "./components/Body";
import Header from "./components/Header";
import ImpressOrigination from "./components/ImpressOrigination";
import ImpressRequest from "./components/ImpressRequest";
import useDarkMode from "./hook/useDarkMode";

function App() {
  return (
    <div className="min-h-screen dark:bg-black transition duration-500">
      <ImpressOrigination />
      {/* <ImpressRequest /> */}
      {/* <Header /> */}
      <div className="">{/* <Body /> */}</div>
      <div className=""></div>
    </div>
  );
}

export default App;
