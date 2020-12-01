import { useState } from 'react';

function Home() {
  return <div>
    <h1>Home</h1>
    <Contador />
  </div>
}

function Contador() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  return <div>
    <div>{count}</div>
    <button onClick={addCount}>Adicionar</button>
  </div>
}

export default Home;