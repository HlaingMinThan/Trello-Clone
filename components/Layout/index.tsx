import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="h-screen overflow-hidden flex items-center justify-center" >
        <div className="bg-blue-500 w-full h-screen font-sans">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
