async function getData() {
    try {
        console.log("Loading ...........");
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
        if (!res.ok) throw new Error("Failed");
        const data = await res.json();
        console.log("Title:", data.title);
    } catch (err) {
        console.log("Error", err.message);
    }
}

getData();