import React from 'react';

interface DisplayProps {
    id:string;
    answer?:number;
    display:string;
  }

const Display: React.FC<DisplayProps> = ({id,answer, display }) => {
  return (
    <div id = {id} className = "m-auto w-9/10 h-9/10 text-white flex flex-row items-center gap-[3vw]">
       <p id = "calculation" className='w-7/10 h-2/3 flex items-center font-calculator'>
            <span className = "text-4xl align-middle">
                {display}
            </span> 
        </p>
       {/* <p id = "answer" className='w-3/10 h-2/3 text-5xl font-calculator'>{answer}</p> */}
    </div>

  );
};

export default Display;



