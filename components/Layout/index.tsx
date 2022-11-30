import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="h-screen overflow-hidden flex items-center justify-center" >
        <div className="bg-blue-500 w-full h-screen font-sans">
          <div className="flex m-4 justify-between">
            <div className="flex">
              <ul className="list-reset text-white hidden md:flex">
                <li className="border-l border-blue-lighter px-2 text-sm">Trello Clone</li>
              </ul>
            </div>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
