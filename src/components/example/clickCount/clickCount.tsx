
import React, { useEffect, useState } from 'react';
import styles from './clickCount.module.scss'

type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

useEffect (() => {
 document.title = `You Clicked ${count} times`;
},[count]);

  return (
    <div className={styles.container}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount (count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ClickCount



