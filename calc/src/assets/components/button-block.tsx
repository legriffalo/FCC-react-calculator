import React from 'react';
import CalcButton from './calc-button';



interface CalcButtonProps {
  key: number;
  id: string;
  appearance: string;
  code:string;
}

interface ButtonBlockProps {
  content: CalcButtonProps[];
  color:string; // Use the specific type for items in the array
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({ content,color }) => {
  return (
    <div className='h-full w-full border'>
      {content.map((item) => {
        console.log(item); // This logs each item in the content array
        return (
          <CalcButton 
            key={item.key}   // Use item.key as the key for React
            id={item.id}     // Pass item.id to CalcButton
            appearance={item.appearance} 
            code = {item.code} // Pass item.appearance to CalcButton
            color = {color}
          />
        );
      })}
    </div>  
  );
};

export default ButtonBlock;