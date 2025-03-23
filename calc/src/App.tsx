// import { useState } from 'react'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import ButtonBlock from './assets/components/button-block.tsx'
import symbols from './assets/symbols.ts'
import numbers from './assets/numbers.ts'
import './App.css'
import Equals from './assets/components/equals.tsx'
import Clear from './assets/components/clear.tsx'

console.log(numbers)
function App() {
  return (
    <>
    <div id = "wrapper-full" className = "h-[65vh] w-[100vw] border">
      <Header title = "Calculator-react"></Header>
      
      <div id = "output" className='h-1/5 border bg-black w-9/10 m-auto p-2 flex-row'>
        <p> calculations appear here...</p>
        <p> Answers appear here...</p>
      </div>

    
      <div className = "h-3/5 w-9/10 flex flex-row border m-auto">

          <div id = "numblock" className = "w-2/3 flex">
            <ButtonBlock content = {numbers} style = "h-1/4 w-1/3 btn-warning"></ButtonBlock>
          </div>

          <div id = "symblock" className = "w-1/3 flex flex-col">
            <ButtonBlock content = {symbols} style = "h-1/4 w-full btn-accent"></ButtonBlock>
          </div>

      </div>

      <div className = "h-[10vh] w-9/10 flex flex-row m-auto">
        <Clear id = "clear"></Clear>
        <Equals id = "equals"></Equals>
      </div>

      <Footer></Footer>

    </div>


    </>
  )
}

export default App
