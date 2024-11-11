import { ToastContainer } from "react-toastify";
import "./App.css";
import { useEffect } from "react";
import Routing from "./Routes/Routing";
import "react-toastify/dist/ReactToastify.css";
import { logoutUser } from "./Stores/Slices/AuthSilce";
import { useDispatch } from "react-redux";

function App() {
  return (
    <>
      <div>
        <Routing />
        <ToastContainer autoClose={800} />
      </div>
    </>
  );
}

export default App;

// const dispatch = useDispatch();
// useEffect(() => {
//   const expiryTime = Date.now(localStorage.getItem("expiry"));
//   console.log(expiryTime);
//   // Check if the token has expired
//   if (expiryTime && Date.now() >= expiryTime) {
//     dispatch(logoutUser()); // If expired, log out immediately
//   } else if (expiryTime) {
//     // Set timeout to log out when the token is close to expiry
//     const remainingTime = expiryTime - Date.now();
//     console.log(remainingTime);
//     setTimeout(() => {
//       dispatch(logoutUser());
//     }, remainingTime);
//   }
// }, [dispatch]);
