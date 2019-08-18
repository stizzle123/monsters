import React from "react";
import "./card.scss";

export default function Card({ user }) {
  return (
    <div className="card-container">
      <img
        alt={user.id}
        src={`https://robohash.org/${user.id}.png?set=set1&size=180x180`}
      />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}
