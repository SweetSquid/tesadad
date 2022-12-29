import React from "react";
import { items } from "./data";
import Card from "./card.component";
import { Link } from "react-router-dom";

export default function List() {
  return (
    <>
      <h1>Hello CodeSandbox</h1>
      <div className="list">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/product/${item.id}`}
            className={`card-open-link`}
          >
            <Card {...item} />
          </Link>
        ))}
      </div>
    </>
  );
}
