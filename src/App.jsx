import React, {useState} from 'react'
import "./App.css"

const App = () => {

  const [input, setInput]=useState('5444');

  const calculateResult = (input) => {
    let result;
    try {
      const operator = ['+', '-', '*', '/'];
      let operator2 = null;
  
      for(let i = 0; i < input.length; i++) {
        if(operator.includes(input[i])) {
          operator2 = input[i];
          break;
        }
      }

      if(!operator2) {
        setInput(parseFloat(input).toString());
        return;
      }
  
      const [operand1, operand2] = input.split(operator2).map(parseFloat);
  
      switch(operator2) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '/':
          if(operand2 === 0) {
            throw new Error('Cannot divide by zero');
          }
          result = operand1 / operand2;
          break;
        default:
          throw new Error('Invalid operator');
      }
      setInput(result.toString());
  
    } catch (error) {
      console.log(error.message);
      setInput('Error');
    }
  }


  const handelButtonClick = (val) => { 
    if(val==='C')
    {
      setInput('');
    }
    else if(val==='<')
    {
      setInput(input.slice(0,-1));
    }
    else if(val ==="=")
    {
      calculateResult(input);
      
    }
    else 
    {
      setInput((prev)=> prev + val);
    }
  }

  return (
    <div className='container'>
      <div className='clac'>
        <h1 id='input'>{input}</h1>
        <div>
          <button onClick={()=>handelButtonClick('C')}>C</button>
          <button onClick={()=>handelButtonClick('<')}>&lt;</button>
          <button onClick={()=>handelButtonClick('%')}>%</button>
          <button onClick={()=>handelButtonClick('/')}>/</button>
        </div>
        <div>
          <button onClick={()=>handelButtonClick('7')}>7</button>
          <button onClick={()=>handelButtonClick('8')}>8</button>
          <button onClick={()=>handelButtonClick('9')}>9</button>
          <button onClick={()=>handelButtonClick('*')}>*</button>
        </div>
        <div>
          <button onClick={()=>handelButtonClick('4')}>4</button>
          <button onClick={()=>handelButtonClick('5')}>5</button>
          <button onClick={()=>handelButtonClick('6')}>6</button>
          <button onClick={()=>handelButtonClick('-')}>-</button>
        </div>
        <div>
          <button onClick={()=>handelButtonClick('1')}>1</button>
          <button onClick={()=>handelButtonClick('2')}>2</button>
          <button onClick={()=>handelButtonClick('3')}>3</button>
          <button onClick={()=>handelButtonClick('+')}>+</button>
        </div>
        <div>
          <button onClick={()=>handelButtonClick('0')}>0</button>
          <button onClick={()=>handelButtonClick('00')}>00</button>
          <button onClick={()=>handelButtonClick('.')}>.</button>
          <button onClick={()=>handelButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
