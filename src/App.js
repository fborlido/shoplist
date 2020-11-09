import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="container">
      <Nav />
      <Form items={items} setItems={setItems} />
      <Table items={items} setItems={setItems} />
    </div>
  );
}

export default App;
