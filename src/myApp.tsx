import React, { useState } from 'react'
import Greeting from './greeting';

type MyAppProps = {

}

const MyApp: React.FC<MyAppProps> = () => {
  const [name, setName] = useState<string>('');
  const [lastName, setlastname] = useState<string>('');

  return (
    <div>
      {/* input for name */}
      <label>
        name:
      <input
      type='text'

      //set input value to value of name
      value={name}
      //using onChange event to set name, every time whent value of input has changed
      onChange={(event) => setName(event.target.value)}
      />
      </label>

    
      <label>
        last name:
        <input
        type='text'
        value={lastName}
        onChange={(event) => setlastname(event.target.value)}
        />
      </label>
      {/* greeting component */}
      <Greeting name={name} lastName={lastName} />
      
    </div>

  )
}

export default MyApp
