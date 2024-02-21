import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./root.component";
 
const RootComponent: React.FC = () => {
  const basename = window.getOpenmrsSpaBase() + "home";
 
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/reports" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
};
 
export default RootComponent;