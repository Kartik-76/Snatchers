import React from 'react'
import Routes from "./Routes"
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

// ReactDOM.render(<Routes/>, document.getElementById("root"))
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Routes/>)
