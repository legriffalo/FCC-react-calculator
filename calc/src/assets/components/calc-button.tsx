import React from 'react';



interface CalcButtonProps {
    id:string;
    appearance:string;
    key:number;
    code:string;
    color:string;


  }

const CalcButton: React.FC<CalcButtonProps> = ({appearance,color }) => {
  return (
    <div className = {`h-full w-1/3 btn ${color}`}>
       <p>{appearance}</p>

</div>

  );
};

export default CalcButton;



