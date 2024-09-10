// import React from "react";
// const Values=()=>{
//     const a=10;
//     const b=20;
// const update=(props)=>{
//     props.updateA(a)
//     props.updateB(b)
// }
//     return(<>
//     <button onClick={update}>Update</button>
//     </>)
// } 
// export  {Values}
import React from 'react';

function Child({ sendDataToParent }) {
  const childData = "Hello from Child!";

  // Function to send data to the parent
  const sendData = () => {
    sendDataToParent(childData); // Pass the data to the parent's function
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
