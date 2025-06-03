import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import { Routes, Route } from "react-router-dom";
import Categorytype from "./components/Categories/Categorytype";

import AllCategory from "./components/Categories/AllCategory";
import Top from "./components/Top";

function App() {
  return (
    <>
      <Top />
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
