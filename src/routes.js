import React from "react";
import { BrowserRouter,Route,Routes  } from "react-router-dom";

import Search from "./pages/Search";
import Details from "./pages/Details";
import Home from "./pages/Home";


 function Routers(){
    return (
        <div className="app">
            <BrowserRouter>
            <Routes>
            <Route exact path="/" index element = {<Home/>}/>
            <Route path="/search" element = {<Search/>}/>
            <Route path="/details/:name/*" element = {<Details/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
 }

 export default Routers;