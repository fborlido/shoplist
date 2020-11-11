import React from "react";

function Item({ item, items, setItems }) {
  function onCheck() {
    setItems(
      items.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            checked: !el.checked,
          };
        }
        return el;
      })
    );
  }

  function onDelete() {
    setItems(items.filter((el) => el.id !== item.id));
  }

  return (
    <li className="field has-addons level is-mobile" style={{borderBottom: "1px solid rgb(166, 166, 166)"}}>
      <div
        className="control is-expanded"
        style={item.checked ? { textDecoration: "line-through"} : {}}
      >
        {item.item}
      </div>
      <button className="control button is-primary" onClick={onCheck}>
        <i className="far fa-check-square"></i>
      </button>
      <button className="control button is-danger" onClick={onDelete}>
        <i className="far fa-trash-alt"></i>
      </button>
    </li>
  );
}

export default Item;
