import React from "react";

export default function CardList({ users }) {
  return (
    <ul className="list-group">
      {users.map((user, key) => (
        <li className="list-group-item" key={key}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}
