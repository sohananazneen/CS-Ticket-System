import { ToastContainer } from "react-toastify";
import "./App.css";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <div className="bg-gray-100">
        <ToastContainer />
        <Home />
      </div>
    </>
  );
}

export default App;
