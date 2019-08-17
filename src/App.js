import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import "./App.scss";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(users => setUsers(users));
  }, [users]);

  return (
    <div className="container mt-5 App">
      <CardList users={users} />
    </div>
  );
};

export default App;
