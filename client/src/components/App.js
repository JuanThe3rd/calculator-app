import React, {useState} from "react";

function App() {
  const [ans, setAns] = useState(0);
  const [firstNum, setFirstNum] = useState(0);
  const [operator, setOperator] = useState('');

  return (
    <div>
      <h1 className='title' >Calculator</h1>
        <div className='ans-container'>
          <div className='ans'>{ans}</div>
        </div>

        <div className='input-container'>
          <button name='clear' onClick={handleClick} className='input'>AC</button>
          <button name='negative' onClick={handleClick} className='input'>+/-</button>
          <button name='percent' onClick={handleClick} className='input'>%</button>
          <button name='divide' onClick={handleClick} className='input'>÷</button>

          <button name='seven' onClick={handleClick} className='input'>7</button>
          <button name='eight' onClick={handleClick} className='input'>8</button>
          <button name='nine' onClick={handleClick} className='input'>9</button>
          <button name='multiply' onClick={handleClick} className='input'>x</button>
          
          <button name='four' onClick={handleClick} className='input'>4</button>
          <button name='five' onClick={handleClick} className='input'>5</button>
          <button name='six' onClick={handleClick} className='input'>6</button>
          <button name='subtract' onClick={handleClick} className='input'>-</button>

          <button name='one' onClick={handleClick} className='input'>1</button>
          <button name='two' onClick={handleClick} className='input'>2</button>
          <button name='three' onClick={handleClick} className='input'>3</button>
          <button name='add' onClick={handleClick} className='input'>+</button>

          <button name='zero' onClick={handleClick} className='special-input'>0</button>
          <div name='zero' onClick={handleClick} className='empty-cell'></div>
          <button name='decimal' onClick={handleClick} className='input'>.</button>
          <button name='equals' onClick={handleClick} className='input btm-right'>=</button>
        </div>
    </div>
  )

  function handleClick(e){
    const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

    if (nums.includes(e.target.name)){
      if (ans === 0){
        setAns(nums.indexOf(e.target.name))
      } else {
        const input = nums.indexOf(e.target.name)
        const new_num = ans.toString() + input.toString()
        setAns(parseFloat(new_num))
      }
    } else if (e.target.name === 'clear'){
      setFirstNum(0);
      setAns(0);
      setOperator('');
    } else if (e.target.name === 'negative'){
      setAns(ans * -1);
    } else if (e.target.name === 'percent'){
      setAns(ans * 0.01);
    } else if (e.target.name === 'decimal'){
      const ans_num = ans.toString();
      if (!(ans_num.includes('.'))){
        setAns(ans_num + '.')
      }
    } else if (e.target.name === 'equals'){
      if (operator === 'add'){
        setAns(ans + firstNum);
      } else if (operator === 'subtract'){
        setAns(firstNum - ans);
      } else if (operator === 'multiply'){
        setAns(firstNum * ans);
      } else if (operator === 'divide'){
        setAns(firstNum / ans);
      }
    } else {
      setOperator(e.target.name);
      setFirstNum(ans);
      setAns(0);
    }
  }
}

export default App;
