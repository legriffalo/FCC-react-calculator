import React from 'react';
// import { useState } from 'react';

interface EqualsButtonProps {
    id:string;
  }

const Equals: React.FC<EqualsButtonProps> = ({id}) => {
  return (
    <div id = {id} className = {`h-full w-1/2 btn btn-primary`}>
       <p>=</p>

</div>

  );
};

export default Equals;