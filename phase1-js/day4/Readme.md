# Day 4 - Async fetch with node.js

I built a simple Node.js script that fetches data from a public API using `async/await`

# Code Explanatation

1. Async/await - handles asynchronous operations that take time
2. fetch()- gets data from the API endpoint
3. res.json() - converts json string repsonse to js object (needs await because its also async)
4. try/catch - prevets app crash when network fails 
5. data.title extracts specific field from resposne

