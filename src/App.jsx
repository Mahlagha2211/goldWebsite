import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import { Routes, Route } from "react-router-dom";
import Categorytype from "./components/Categories/Categorytype";

import AllCategory from "./components/Categories/AllCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Categories />}>
          <Route index element={<AllCategory />} />
          <Route path=":category" element={<Categorytype />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
