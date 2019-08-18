import React, { useState, useEffect } from "react";
import CardList from "./components/Card-list/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.scss";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(users => setUsers(users));
  }, [users]);
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchField.toLowerCase())
  )
  return (
    <div className="container mt-5 App">
      <SearchBox setSearchField={setSearchField} />
      <CardList users={filteredUsers} />
    </div>
  );
};

export default App;
