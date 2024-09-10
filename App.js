// import './App.css';
// import  {Values,update} from "./function04.js";
// import Addition from './function02.js';
// import {Complexity,Addition,Subtraction} from './function.js';

// // function App() {
// //   let a=0;
// //   let b=0;
// //   // const Name="veda"
// //   // const domain="veda@gmail.com";
// //   // const C=document.getElementById('Cvalue').value
// //   // const D=document.getElementById('Dvalue').value
// //   // console.log("dVslue",D);
// //   // console.log("Cvalue",C);
// //   function updateA(data){
// //     a=data
// //     console.log(a)
// //   }
// //   function updateB(data){
// //     b=data
// //     console.log(b)
// //   }
// //   return (
// //     <>
// //     {/* <div className='values'>
// //        <h3><input type='number' id="Cvalue"/></h3>
// //        <h3><input type='number' id="Dvalue"/></h3> 
// //       <h1>Welcome Props</h1>
// //       <h2>A value = {a}</h2>
// //       <h2>B value = {b}</h2>
// //       <h3><input type='number' id="Cvalue"/></h3>
// //        <h3><input type='number' id="Dvalue"/></h3> 
// //       </div>
// //       <div className='rowone'>
// //     <div className='colone'>
// //         <Addition A={a}B={b} />
// //     </div>
// //     <div className='coltwo'> 
// //       <Multiplication A={a} B={b} />
// //     </div>
// //     </div>
// //     <div className='rowtwo' >
// //       <Classone A={a} B={b} />
// //     </div> */}
// //     <div className='complex'>
// //       <Values  Aval={updateA} Bval={updateB}/>
// //       </div>
// //       {/* <div>
// //         <Addition />
// //       </div>
// //       <div>
// //         <Subtraction />
// //       </div>
// //       <div>
// //         <Complexity />
// //       </div> */}
// //       </>
// //     );
// // }

// // export default App;



// import React from 'react';
// import Child from  './example'
// function Parent() {
//   // Function to handle data passed from child
//   const handleDataFromChild = (childData) => {
//     console.log("Data received from child: ", childData);
//     // Do something with childData
//   };

//   return (
//     <div>
//       <h1>Parent Component</h1>
//       {/* Pass the handleDataFromChild function to the child */}
//       <Child sendDataToParent={handleDataFromChild} />
//     </div>
//   );
// }

// export default Parent;
import React, { useState } from "react";
import './App.css';

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [operater,setOperater] = useState("_");
  // const [message,setMessage] = useState("")

  // Function to handle arithmetic operations
  const handleOperation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Please enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "+":
        res = number1 + number2;
        break;
      case "-":
        res = number1 - number2;
        break;
      case "*":
        res = number1 * number2;
        break;
      default:
        res = "Invalid Operation";
    }

    setResult(res);
  };

  return (
    <div className="App">
      <h1>Arithmetic Operations</h1>
      <div>
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}

          placeholder="Enter first number"
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <div>
        <button onClick={() =>{ handleOperation("+")
           setOperater("+")}}>Addition</button>
        <button onClick={() =>{ handleOperation("-"); setOperater("-")}}>Subtraction</button>
        <button onClick={() => { handleOperation("*");setOperater("*")}}>Multiplication</button>
        {/* <button onClick={() => handleOperation("/")}>Division</button> */}
      </div>
      {result !== null && (
        <div>
          <h2>A {operater} B value={result}</h2>
        </div>
      )}
      {/* <h2>{setMessage}</h2> */}
    </div>
  );
}

export default App;
