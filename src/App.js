import { Navigate, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
