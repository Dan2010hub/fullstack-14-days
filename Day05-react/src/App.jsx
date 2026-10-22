import { useState } from "react";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div style={{ textAlign: 'center', marginTop: '100px'}}>
            <h1> Count: {count}</h1>

            <button onClick={() => setCount(count +1)}> +Add </button>
            <button onClick={() => setCount(count -1)} style={{ marginLeft: '10px'}}> -Minus </button>
            <button onClick={() => setCount(count (0))} style={{ marginLeft: '10px'}}> Reset </button>
        
        </div>
    )
}

export default App