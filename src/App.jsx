import { ToastContainer } from "react-toastify";
import "./App.css";
import Routing from "./Routes/Routing";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div>
        <Routing />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
