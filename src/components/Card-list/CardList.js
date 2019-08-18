import React from "react";
import Card from "../Card/Card";
import "./card-list.scss";

export default function CardList({ users }) {
  return (
    <div className="card-list">
      {users.map((user, key) => (
        <Card key={key} user={user} />
      ))}
    </div>
  );
}
