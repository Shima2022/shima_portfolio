import { count } from 'console'
import React, { useEffect, useState } from 'react';

function ClickCount() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

useEffect (() => {
 document.title = 'Clicked ${count} times';
});

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount (count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ClickCount
