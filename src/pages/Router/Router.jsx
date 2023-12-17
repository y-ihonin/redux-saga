import { Route, BrowserRouter, Routes } from "react-router-dom";

// pages
import Home from "../Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
