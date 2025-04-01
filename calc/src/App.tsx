import './App.css'
import { useState, useEffect } from 'react'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import ButtonBlock from './assets/components/button-block.tsx'
import symbols from './assets/symbols.ts'
import numbers from './assets/numbers.ts'
import Equals from './assets/components/equals.tsx'
import Clear from './assets/components/clear.tsx'
import Display from './assets/components/display.tsx'


function App() {
  const[state, setState] = useState({
    calculation:'',
    display: '',
    answer:0,
  })

  const clearAll = ()=>{
    console.log("clear");
    setState(prevState => ({
      ...prevState, 
      display: '',
      calculation:'',
      answer: 0,
    }));
  }

  const equals = ()=>{
    console.log("equals")
    let ans:number
    try{
      ans = eval(state.calculation);
    } 
    catch(e){
      console.log(e)
    }
    setState(prevState => ({
      ...prevState, 
      answer: ans
    }));
  }

  const buttons = async (command:string, appearance:string) => {
    await setState(prevState => ({
      ...prevState, 
      calculation: prevState.calculation + command,
      display: prevState.display + appearance,
    }));
  };

    // This effect runs every time `state` changes
    useEffect(() => {
      console.log(state);
    }, [state]);


  return (
    <>
    <div id = "wrapper-full" className = "h-[72vh] w-[100vw] border text-2xl">
      <Header title = "Calculator-react"></Header>
      
      <div id = "output" className='h-1/5 w-7/10  mt-[2vh] p-2 flex-row items-center m-auto border border-red bg-black  rounded-2xl'>
        <Display id = "display" display = {state.display} answer = {state.answer}></Display>
      </div>

    
    <div id = "all buttons" className = "m-auto mt-[1vh] w-7/10 h-5/7 bg-gray-900 p-2 rounded-2xl">
        <div className = "h-4/5 w-7/10  flex flex-row border m-auto rounded-2xl">

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
