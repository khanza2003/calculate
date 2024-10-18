

import { useState } from 'react'
import './App.css'

  
function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
      setInput(input + value);
  };

  const handleClear = () => {
      setInput('');
      setResult('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1)); 
  };

  const handleCalculate = () => {
      try {
          setResult(eval(input)); 
      } catch (error) {
          setResult('Error');
      }
    };

  
  return (
    <>
      <div className='continer' style={{background:"orangered" ,width:"100VW" ,height:"100vh"}}>
         <div className='calculator' style={{background:"aliceblue", height:'500px', width:'400px', marginLeft:'500px',paddingTop:"10px", borderRadius:'10px'}}>
         
         <div className='Display' style={{background: "black",height: "100px",width: "400px",color: "white",display: 'flex',flexDirection:'column',justifyContent: 'space-between',alignItems: 'flex-end',padding: '10px',borderRadius: '8px',marginBottom:'10px',boxSizing: 'border-box'}}>
        <div style={{fontSize: '20px',color: 'white',overflow: 'hidden',whiteSpace: 'nowrap',textOverflow: 'ellipsis',width: '100%',textAlign: 'right',background: 'transparent'}}>{input || "0"}</div><div style={{fontSize: '28px',color: 'red',width: '100%',textAlign: 'right',background: 'transparent' }}>{result}</div></div>
  
          <button onClick={handleClear} style={{color:"black", background:"white", width:"200px", height:'70px', marginTop:'10px', border:"none"}}>AC</button>
            <button onClick={handleDelete}  style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>DEL</button>
            <button onClick={()=> handleClick('/')}  style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>/</button> <br/>
  
            <button onClick={()=> handleClick('7')}  style={{color:"black",background:"white",width:"100px" ,height:'70px',marginTop:'10px',border:"none"}}>7</button>
            <button onClick={()=> handleClick('8')}  style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>8</button>
            <button onClick={()=> handleClick('9')}  style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>9</button>
            <button onClick={()=> handleClick('*')}  style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>*</button> <br/>
  
            <button onClick={()=> handleClick('4')}  style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none",marginTop:'10px'}}>4</button>
            <button onClick={()=> handleClick('5')}  style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>5</button>
            <button onClick={()=> handleClick('6')}  style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>6</button>
            <button onClick={()=> handleClick('+')} style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>+</button> <br/>
  
            <button onClick={()=> handleClick('1')} style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none",marginTop:'10px'}}>1</button>
            <button onClick={()=> handleClick('2')} style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>2</button>
            <button onClick={()=> handleClick('3')} style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>3</button>
            <button onClick={()=> handleClick('-')} style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>-</button> <br/>
  
            <button onClick={()=> handleClick('0')} style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none",marginTop:'10px'}}>0</button>
            <button onClick={()=> handleClick('.')} style={{color:"black",background:"white",width:"100px" ,height:'70px',border:"none"}}>.</button>
            <button onClick={handleCalculate} style={{color:"black", background:"white", width:"200px", height:'70px', border:"none"}}>=</button>
        </div>
      </div>
    </>
  )
}

export default App
