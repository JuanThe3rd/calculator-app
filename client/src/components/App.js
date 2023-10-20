import React, {useState} from "react";

function App() {
  const [answer, setAnswer] = useState(0);

  return (
    <div>
      <h1 className='title' >Calculator</h1>
      

      <div className='calc-container'>
        <button className='input'>AC</button>
        <button className='input'>+/-</button>
        <button className='input'>%</button>
        <button className='input'>÷</button>

        <button className='input'>7</button>
        <button className='input'>8</button>
        <button className='input'>9</button>
        <button className='input'>x</button>
        
        <button className='input'>4</button>
        <button className='input'>5</button>
        <button className='input'>6</button>
        <button className='input'>-</button>

        <button className='input'>1</button>
        <button className='input'>2</button>
        <button className='input'>3</button>
        <button className='input'>+</button>

        <button className='special-input'>0</button>
        <div className='empty-cell'></div>
        <button className='input'>.</button>
        <button className='input'>=</button>
      </div>
    </div>
  )
}

export default App;
