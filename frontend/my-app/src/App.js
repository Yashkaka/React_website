import './App.css';
import React from 'react';
import About from './components/About';
import AdminPanel from './components/AdminPanel';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
<>
<BrowserRouter>
<Routes>


        {/* <Route path="/" element={<Layout />}>    */}
          {/* <Route index element={<Home />} /> */}
          <Route  path="/About" element={<About/>} />
          <Route  path="/AdminPanel" element={<AdminPanel />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}



        </Routes>

    </BrowserRouter>




    </>


    // <div className="App">
    //  <About/>
    //  <AdminPanel/>
    // </div>
  );
}

export default App;
