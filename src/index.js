import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
  return (
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <TodoList />
      <SearchPanel />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
