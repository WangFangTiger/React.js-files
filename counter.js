import React, { useState } from 'react';

function Counter() {
  // Define a piece of state called "count", starting at 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>You clicked {count} times</h2>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
