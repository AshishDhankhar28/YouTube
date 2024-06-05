import React from "react";
import Navbar from "./component/Navbar/navbar";
import Home from "./Pages/Home/home"
import Video from "./Pages/Video/video"
import { useEffect } from "react";


import { Route ,Routes } from "react-router-dom";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  return (
    <> 
      <Navbar />
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/video/:categoryId/:videoId' element={<Video/>}></Route>
      </Routes>
    </>
  );
};

export default App;
