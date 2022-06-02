import './App.css';
import React from "react";
import {users} from "./data/data";
import {UsersList} from "./components/UsersList";

function App() {
const user = [...users];
const userSort = user.sort((a,b)=> {
    if(a.username < b.username) {
        return -1
    }

    if(a.username > b.username) {
        return 1
    }

    return 0
});

  return (
    <div className="App">
      <UsersList users={userSort}/>
    </div>
  );
}

export default App;
