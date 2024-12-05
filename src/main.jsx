import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext.jsx";
import { CaptainContextProvider } from "./context/CaptainContext.jsx";
import 'remixicon/fonts/remixicon.css';

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CaptainContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </CaptainContextProvider>
  </BrowserRouter>
);
