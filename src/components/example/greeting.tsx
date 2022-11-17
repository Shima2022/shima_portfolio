import React from 'react'

// set the necessary props
type GreetingProps = {
  name: string;
  lastName: string;
}
// use props like a parameters(name, lastname)
const Greeting: React.FC<GreetingProps> = ({name, lastName}) => {
  return (
    // != defined is false or not
    // $= identifies object in the same way that a name or variable does
    <div>
      <p> 'Hello, ${name} ${lastName}!'</p>
    </div>
  )
}

export default Greeting
