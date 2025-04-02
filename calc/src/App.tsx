import './App.css'
// import React, { useState, flushSync } from 'react';
import { flushSync } from 'react-dom'
import { useState, useEffect} from 'react'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import ButtonBlock from './assets/components/button-block.tsx'
import symbols from './assets/symbols.ts'
import numbers from './assets/numbers.ts'
import Equals from './assets/components/equals.tsx'
import Clear from './assets/components/clear.tsx'
import Display from './assets/components/display.tsx'


interface State {
  calculation: string;
  display: string;
  answer: number | null;
}

const State0 = {
  calculation: '',
  display: '',
  answer: 0,
}

function App() {
  const[state, setState] = useState<State>({...State0})

  // const [forceUpdate, setForceUpdate] = useState(0); // dummy state to trigger re-render


  const clearAll = () => {
    console.log("clear");

    // Using flushSync to make sure the state update is synchronous
    flushSync(() => {
      setState({
        display: '',
        calculation: '',
        answer: 0,
      });
    });

    console.log("State cleared.");
  };

  const equals = ()=>{
    console.log("equals")

    // if(regex1.test(state.calculation)){
    //   setState(prevState => ({
    //     ...prevState, 
    //     calculation:String(state.answer) + state.calculation 
    //   }));    }
    // console.log(state)

    const cleaned = operatorCleaner(state.calculation)
    console.log(cleaned)
    let ans:number
    try{
      ans = eval(cleaned);
    } 
    catch(e){
      console.log(e)
    }
    setState(prevState => ({
      ...prevState, 
      answer: ans,
      display:String(ans),
      calculation:String(ans) 
    }));
  }

  const buttons = (command:string, appearance:string) => {
    const disp = syntaxCleaner(state.display,appearance)
    const calc = syntaxCleaner(state.calculation,command)

    setState(prevState => ({
      ...prevState, 
      calculation: calc,
      display: disp,
    }));
  };


  const operatorCleaner = (expression:string)=>{
    //match minuses preceded by another operator
    const regex = /(?<=[+\-×*/])-\d+(?:\.\d+)?/g;
    // match double math operators
    const regex2 = /[+\-×*/^]+/g;
    // check if starts with operator
    const regex3 = /^[+\-×*/^]/;


    let cleaned = expression.replace(regex, (match) => {
          return `(${match})`; })
    console.log(cleaned)
    cleaned = cleaned.replace(regex2, (match) => {
      return match.slice(-1); })
    console.log(cleaned)
    cleaned = regex3.test(cleaned)? `${state.answer}${cleaned}`: cleaned;
    console.log(cleaned)
  return cleaned
  }

  const syntaxCleaner = (expression:string, addition:string)=>{
 
    const parts = (expression+addition).split(/([+\-*/%])/);
    parts.forEach((part,i, array)=>{
      // remove extra leading zeros
      let cleaned = part.replace(/^00/, '0');
      cleaned = cleaned.replace(/^0(?!\d*\.\d)/,'0');
      array[i] = cleaned.replace(/(?<=\.[^.]*)\./,'');
    })
    const cleaned = parts.join('')
    return cleaned
  }
    // This effect runs every time `state` changes
    useEffect(() => {
      console.log(state);
    }, [state]);


  return (
    <>
    <div id = "wrapper-full" className = "h-[72vh] w-[100vw] border text-2xl">
      <Header title = "Calculator-react"></Header>
      
      <div id = "output" className='h-1/5 w-7/10  mt-[2vh] p-2 flex-row items-center m-auto border bg-black  rounded-2xl'>
        <Display id = "display" display = {state.display? state.display:'0'}></Display>
      </div>

    
    <div id = "all buttons" className = "m-auto mt-[1vh] w-7/10 h-5/7 bg-gray-900 p-2 rounded-2xl border">
        <div className = "h-4/5 w-7/10  flex flex-row m-auto rounded-2xl">

            <div id = "numblock" className = "w-2/3 flex">
              <ButtonBlock content = {numbers} handler = {buttons} style = "h-1/4 w-1/3 btn-warning rounded-2xl"></ButtonBlock>
            </div>

            <div id = "symblock" className = "w-1/3 flex flex-col">
              <ButtonBlock content = {symbols} handler = {buttons} style = "h-1/4 w-full btn-accent rounded-2xl"></ButtonBlock>
            </div>

        </div>

        <div className = "h-[10vh] w-7/10 flex flex-row m-auto">
          <Clear id = "clear" handler = {clearAll} ></Clear>
          <Equals id = "equals" handler = {equals}></Equals>
        </div>
      </div>

      <Footer></Footer>

    </div>


    </>
  )
}

export default App
