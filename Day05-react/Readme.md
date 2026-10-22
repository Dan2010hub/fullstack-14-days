## Intro to React 

    React is a javascript libary developed and mainted by meta for building user interface. it allows developers to create resuable UI componets and build fast, interactive , single-page applications, instead of manipulating the DOM directly like in vanilla js, React uses a virtual DOm to efficentely update and render only the parts of the page that have been changes

## Architecture - How the files are connected

The application runs through a chain of three core files, Each files has a specific role

*Execution flow:*
index.html => src/main.jsx => src/App/jsx

1. Index.html 
it contains a single root element, it also includes a script tag that points to main.jsx. its only job is to provide an empty container where the react application will be mounted

2. main.jsx - The react entry point
     imports the main App componets,locate the root div from index.html, renders the app componets inside it using ReactDom

3. App.jsx
    useState: manages state, it stores the count value and provides setCOunt to update it, when state changes React automatically re-renders the ui

    return: return the jsx which defines the user interface, including the counter display and buttons

    export deafualt App: exports the componets so it can be imported ad used by main.jsx


    