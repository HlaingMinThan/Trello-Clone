import React from 'react';

const Header = () => {
  return (
        <div className="flex p-2 bg-blue-700 items-center">
            <div className="hidden md:flex justify-start">
                <button className="bg-blue-light rounded p-2 font-bold text-white text-sm mr-2 flex">
                    <svg className="fill-current text-white h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z"/></svg>
                    Pannels
                </button>
            </div>
            <div className="mx-0 md:mx-auto">
                <h1 className="text-blue-lighter text-xl flex items-center font-sans italic">
                    <svg className="fill-current h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M41 4H9C6.24 4 4 6.24 4 9v32c0 2.76 2.24 5 5 5h32c2.76 0 5-2.24 5-5V9c0-2.76-2.24-5-5-5zM21 36c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v24zm19-12c0 1.1-.9 2-2 2h-7c-1.1 0-2-.9-2-2V12c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v12z"/></svg>
                    Trello
                </h1>
            </div>
            <div className="flex items-center ml-auto">
                <img src="https://i.imgur.com/OZaT7jl.png" className="rounded-full" />
            </div>
        </div>
  );
};

export default Header;
