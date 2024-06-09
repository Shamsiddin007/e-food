import React, { useEffect, useState } from "react";
import "./App.css";
import Pages from "./Components/Pages/Pages";
import Pages2 from "./Components/Pages2/Pages2";
import Pages4 from "./Components/Pages4/Pages4";
import Pages5 from "./Components/Pages5/Pages5";
import Footer from "./Footer/Footer";
import Navbar from "./Components/Navbar/Navbars";
import Top from "./Top/Top";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Shop from "./Components/Pages2/shop/Shop";
import Pages3 from "./Components/Pages3/Pages3";
import Iteminfo from "./Components/ItemInfo/Iteminfo";
import { products } from "./Components/constants";
import Loader from "./Loader/Loader";
import "./Scrolls.css"

function App() {
  const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        setIsLoading(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const handleScroll = () => {
            if (window.pageYOffset === 0) {
                setIsLoading(false);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);



  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fakeDateFetch = () => {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    };
    fakeDateFetch();
  }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navbar />}>
        <Route path="/" element={<Pages />} />
        <Route path="menyu" element={<Pages2/>}/>
        <Route path="branches" element={<Pages3/>} />
        <Route path="about" element={<Pages4/>} />
        <Route path="connection" element={<Pages5/>} />
        <Route path="shop" element={<Shop/>} />
        <Route path="iteminfo/:id" element={<Iteminfo products={products}/>}/>
      </Route>
    )
  );


  return loader ? (
    <div className="cont-cont">
      <Loader />
    </div>
  ) : (
    <div className="cont-cont">
      <RouterProvider router={routes} />
      <Footer />
      {/* <ScrollAuto/> */}
      <Top />
    </div>
  );
}

export default App;