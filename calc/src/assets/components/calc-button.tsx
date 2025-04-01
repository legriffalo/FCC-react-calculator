import React from 'react';

interface CalcButtonProps {
    id:string;
    appearance:string;
    key:number;
    code:string;
    style:string;
    handler:any
  }

const CalcButton: React.FC<CalcButtonProps> = ({appearance,style, id, handler, code}) => {
  return (
    <div id = {id} onClick = {()=>handler(code, appearance)} className = {`btn text-3xl ${style}`}>
       <p>{appearance}</p>
    </div>

  );
};

export default CalcButton;



