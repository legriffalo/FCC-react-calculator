import React from 'react';

interface ClearButtonProps {
    id:string;
  }

const Clear: React.FC<ClearButtonProps> = ({id}) => {
  return (
    <div id = {id} className = "h-full w-1/2 btn btn-error">
       <p>AC</p>
    </div>

  );
};

export default Clear;