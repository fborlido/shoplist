import React from "react";
import Item from "../components/Item";

function Table({ items, setItems }) {
  return (
    <section className="section">
      <div className="container is-mobile">
        <ul>
          {items.map((item) => (
            <Item key={item.id} item={item} items={items} setItems={setItems} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Table;
