import React from "react";
import { BrowserRouter,Route,Routes  } from "react-router-dom";

import Search from "./pages/Search";
import Details from "./pages/Details";


 function Routers(){
    return (
        <div className="app">
            <BrowserRouter>
            <Routes>
            <Route path="/" element = {<Search/>}>
            </Route>
            <Route path="/details" element = {<Details/>}>
            </Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
 }

 export default Routers;