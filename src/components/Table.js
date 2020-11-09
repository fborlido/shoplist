import React from "react";
import Item from "../components/Item";

function Table({ items, setItems }) {
  return (
    <section className="section">
      <div className="container is-mobile">
        <table className="table is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Item</th>
              <th>Check</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <Item
                key={item.id}
                item={item}
                items={items}
                setItems={setItems}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Table;
