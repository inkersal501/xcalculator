import React, {useState} from 'react';
import './App.css';

function App() {

  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const handleClick = (val) => {
    if(val === "="){
      if(value !==""){
        // eslint-disable-next-line
        setResult(eval(value));
      }else{
        setResult("");
      }
    }else if(val === "C"){
      setValue("");
      setResult("");
    }else{
      setValue((prev)=>prev+val);
    }
  };
 
  return (
    <div className="App">
        <h1>React Calculator</h1>
        <input type="text" value={value}/>
        <h5>{result}</h5>
        <div style={{display:"flex", gap:"10px", justifyContent:"center",margin:"15px 0px 10px 0px"}}>
          <button className='btn' onClick={()=>handleClick('7')}>7</button>
          <button className='btn' onClick={()=>handleClick('8')}>8</button>
          <button className='btn' onClick={()=>handleClick('9')}>9</button>
          <button className='btn' onClick={()=>handleClick('+')}>+</button>
        </div>
        <div style={{display:"flex", gap:"10px", justifyContent:"center",margin:"10px 0px 10px 0px"}}>
          <button className='btn' onClick={()=>handleClick('4')}>4</button>
          <button className='btn' onClick={()=>handleClick('5')}>5</button>
          <button className='btn' onClick={()=>handleClick('6')}>6</button>
          <button className='btn' onClick={()=>handleClick('-')}>-</button>
        </div>
        <div style={{display:"flex", gap:"10px", justifyContent:"center",margin:"10px 0px 10px 0px"}}>
          <button className='btn' onClick={()=>handleClick('1')}>1</button>
          <button className='btn' onClick={()=>handleClick('2')}>2</button>
          <button className='btn' onClick={()=>handleClick('3')}>3</button>
          <button className='btn' onClick={()=>handleClick('*')}>*</button>
        </div>
        <div style={{display:"flex", gap:"10px", justifyContent:"center",margin:"10px 0px 10px 0px"}}>
          <button className='btn' onClick={()=>handleClick('C')}>C</button>
          <button className='btn' onClick={()=>handleClick('0')}>0</button>
          <button className='btn' onClick={()=>handleClick('=')}>=</button>
          <button className='btn' onClick={()=>handleClick('/')}>/</button>
        </div>
    </div>
  );
}

export default App;
