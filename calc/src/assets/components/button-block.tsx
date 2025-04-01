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
  style:string; // Use the specific type for items in the array
  handler:any;
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({ content,style, handler}) => {
  return (
    <div className='h-full w-full'>
      {content.map((item,index) => {
        return (
          <CalcButton 
            key={item.key}   // Use item.key as the key for React
            id={item.id}     // Pass item.id to CalcButton
            appearance={item.appearance} 
            code = {item.code} // Pass item.appearance to CalcButton
            style = {index==9? "h-1/4 w-2/3 rounded-2xl btn-warning":style}
            handler = {handler}
          />
        );
      })}
    </div>  
  );
};

export default ButtonBlock;