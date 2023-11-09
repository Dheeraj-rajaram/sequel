
import GetStarted from "./components/getStarted/GetStarted";
import CustomNav from "./components/navbar/CustomNav";
import Access from "./pages/Access";
import CheckList from "./pages/Checklist";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import ResetPassword from "./pages/ResetPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/dashboard" exact element={<Dashboard />}></Route>
        <Route path="/access" element={<Access />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
        <Route path="/checklist" element={<CheckList />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
