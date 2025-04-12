import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
