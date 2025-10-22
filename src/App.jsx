import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
