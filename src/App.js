import Access from "./pages/Access";
import CheckList from "./pages/Checklist";
import CreateAccount from "./pages/CreateAccount";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/Signup";
import Layout from "./components/layout/Layout";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* login */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* private */}
        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/checklist" element={<CheckList />}></Route>
        </Route>
        {/* public */}
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/access" element={<Access />}></Route>
        <Route path="/create-account" element={<CreateAccount />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
