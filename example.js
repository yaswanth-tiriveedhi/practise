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
