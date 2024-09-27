import React from "react";
import Header from "../components/Shered/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shered/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
