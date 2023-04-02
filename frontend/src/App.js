import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'
import Login from "./pages/auth/login";
import Forgotpassword from "./pages/auth/forgotpassword";
import Resetpassword from "./pages/auth/resetpassword";
import NotFound from "./Utils/NotFound";
import Dashboard from "./pages/dashboard/dashboard";
import Users from "./pages/dashboard/Users/users";
import Categorie from "./pages/dashboard/Categorie/categorie";
import Service from "./pages/dashboard/Service/service";
import Rendez_vous from "./pages/dashboard/Rendez_vous/rendez_vous";
import Commantaire from "./pages/dashboard/commantaire";
import Home from "./pages/client/home"
import ProtectRoute from "./Utils/ProtectRoute";



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

          <Route element={<ProtectRoute />}  >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/categorie" element={<Categorie />} />
            <Route path="/service" element={<Service />} />
            <Route path="/rendez-vous" element={<Rendez_vous />} />
            <Route path="/commentaire" element={<Commantaire />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>


  );
}

export default App;
