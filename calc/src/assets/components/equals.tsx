import React from 'react';

interface EqualsButtonProps {
    id:string;
    handler:any,
  }

const Equals: React.FC<EqualsButtonProps> = ({id, handler}) => {
  return (
    <div id = {id} onClick = {()=>handler()} className = {`h-full w-1/2 text-3xl rounded-2xl btn btn-primary`}>
       <p>=</p>
    </div>
  );
};

export default Equals;