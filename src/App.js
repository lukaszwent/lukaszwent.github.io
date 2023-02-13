import { Navigate, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

import Navigation from "./components/layouts/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
