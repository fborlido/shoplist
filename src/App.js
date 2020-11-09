import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Form from './components/Form'
import Table from './components/Table'

function App() {

  const initItems = [
    {
      id: 1,
      item: 'Carrots',
      checked: true
    },
    {
      id: 2,
      item: 'Bananas',
      checked: false
    },
    {
      id: 3,
      item: 'Potatoes',
      checked: false
    }
  ]

  const [items, setItems] = useState(initItems)

  return (
    <div className="container">
      <Nav />
      <Form />
      <Table items={items} setItems={setItems} />
    </div>
  );
}

export default App;
