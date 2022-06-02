import './App.css';
import React from "react";
import {users} from "./data/data";
import {UsersList} from "./components/UsersList";

function App() {

  return (
    <div className="App">
      <UsersList users={users}/>
    </div>
  );
}

export default App;
