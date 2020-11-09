import React, { useState } from "react";

function Form({ items, setItems }) {
  const [inputText, setInputText] = useState("");

  function onChangeText(e) {
    setInputText(e.target.value);
  }

  function submitText(e) {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: Math.round(Math.random() * 1000),
        item: inputText,
        checked: false,
      },
    ]);
    setInputText('')
  }

  return (
    <section className="section">
      <div className="container is-mobile">
        <div className="field is-grouped">
          <div className="control is-expanded">
            <input
              type="text"
              className="input"
              placeholder="Enter your item"
              onChange={onChangeText}
              value={inputText}
            />
          </div>
          <div className="control">
            <button
              onClick={submitText}
              type="submit"
              className="button is-info"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
