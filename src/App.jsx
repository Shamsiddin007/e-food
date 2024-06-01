import React from "react";
import "./App.css";
import Pages from "./Components/Pages/Pages";
import Pages2 from "./Components/Pages2/Pages2";
import Pages4 from './Components/Pages4/Pages4'
import Pages5 from './Components/Pages5/Pages5'
import Footer from "./Footer/Footer";
import Navbar from "./Components/Navbar/Navbars";
import Top from './Top/Top'
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Shop from "./Components/Pages2/shop/Shop";
import Pages3 from "./Components/Pages3/Pages3";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navbar />}>
        <Route path="/" element={<Pages />} />
        <Route path="menyu" element={<Pages2/>}/>
        <Route path="branches" element={<Pages3/>} />
        <Route path="about" element={<Pages4/>} />
        <Route path="connection" element={<Pages5/>} />
        <Route path="shop" element={<Shop/>} />
      </Route>
    )
  );


  return (
    <div className="cont-cont">
      <RouterProvider router={routes} />
      <Footer />
      <Top/>
    </div>
  );
}

export default App;






