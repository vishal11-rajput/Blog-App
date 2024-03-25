import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
