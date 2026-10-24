import { useState, useEffect } from "react";
function App() {
  const [users, setUsers] = useState([])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
    })
  },[])

  return (
    <div> 
      <h2> Day 6</h2>
      {users.map(user => (
        <p key={user.id} > {user.name}</p>
      ))}
    </div>
  )
    
}

export default App