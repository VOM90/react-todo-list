import React from "react";
import ReactDOM from "react-dom";

const el = (
    <div>
        <h1>Todo List</h1>
        <input placeholder="search" />
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
    </div>
)

ReactDOM.render(el, document.getElementById("root"));
