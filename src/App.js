import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
