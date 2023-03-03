import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import Login from "./pages/auth/login";
import Forgotpassword from "./pages/auth/forgotpassword";
import Resetpassword from "./pages/auth/resetpassword";
import NotFound from "./Utils/NotFound";
import Home from "./pages/dashboard/home";

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/resetpassword/:token" element={<Resetpassword />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
