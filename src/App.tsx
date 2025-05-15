import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import SubAppContainer from "./pages/SubAppContainer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sub-vue-app" element={<SubAppContainer />} />
      </Routes>
    </>
  );
}

export default App;
