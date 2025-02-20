import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(3);

  // let counter = 3;

  const addValue = () => {
    console.log('clicked and the number is : ', counter);
    setCounter(counter + 1)
  }

  const removeValue = () => {
    console.log('clicked and after the deduction the number is : ', counter);
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
