import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <h1 className="bg-green-500 rounded-xl p-3 text-black m-3">
        Sujal Agarwal
      </h1>
    <Cards userName={"Sujal"}/>
    <Cards/>
      </>
  );
}

export default App;
