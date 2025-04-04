import React from "react";

interface HeaderProps {
    title:string;
  }

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <div className = "fixed h-[15vh] top-0 left-0 footer flex flex-row justify-center text-2xl md:text-5xl font-calculator text-white font-bold bg-blue-900 p-10">
        <h1> {title} </h1>
    </div>
  );
};

export default Header;