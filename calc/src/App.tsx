// import { useState } from 'react'
import Footer from './assets/components/footer'
import Header from './assets/components/header'
import ButtonBlock from './assets/components/button-block.tsx'
import symbols from './assets/symbols.ts'
import numbers from './assets/numbers.ts'
import './App.css'

console.log(numbers)
function App() {
  return (
    <>
    <div id = "wrapper-full" className = "h-100 border">
      <Header title = "Calculator-react"></Header>
        <div id = "output">
          <p> calculations appear here</p>
        </div>

      <div className = "h-[100%] w-9/10 flex flex-row border m-auto p-3">

          <div id = "numblock" className = "w-2/3 m-auto flex flex-grid content-fit">
            <ButtonBlock content = {numbers} color = "btn-warning"></ButtonBlock>
          </div>

          <div id = "symblock" className = "w-1/4 m-auto flex flex-grid">
            <ButtonBlock content = {symbols} color = "btn-success"></ButtonBlock>
          </div>

      </div>
      
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
