import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const SharedLayout = ({ openNav, setOpenNav, modal, setModal }) => {
  return (
    <>

    
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
