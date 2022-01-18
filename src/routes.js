import React from "react";
import Home from "./component/home";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./component/header";


const AllRoutes = () => (

  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>

)

export default AllRoutes;
