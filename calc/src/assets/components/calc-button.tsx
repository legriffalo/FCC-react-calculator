import React from 'react';



interface CalcButtonProps {
    id:string;
    appearance:string;
    key:number;
    code:string;
    style:string;


  }

const CalcButton: React.FC<CalcButtonProps> = ({appearance,style }) => {
  return (
    <div className = {`btn ${style}`}>
       <p>{appearance}</p>
    </div>

  );
};

export default CalcButton;



