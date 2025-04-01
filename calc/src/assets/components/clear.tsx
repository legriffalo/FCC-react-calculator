import React from 'react';

interface ClearButtonProps {
    id:string;
    handler:any,
  }

const Clear: React.FC<ClearButtonProps> = ({id, handler}) => {
  return (
    <div id = {id} onClick = {()=>{handler()}}className = "h-full w-1/2 text-3xl btn btn-error rounded-2xl">
       <p>AC</p>
    </div>

  );
};

export default Clear;