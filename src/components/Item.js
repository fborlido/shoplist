import React from 'react'

function Item({item, items, setItems}) {

    function onCheck() {
        setItems(items.map((el) => {
            if(el.id === item.id) {
                return {
                    ...el, checked: !el.checked
                }
            }
            return el
        }))
    }

    function onDelete() {
        setItems(items.filter((el) => el.id !== item.id))
    }

    return (
        <tr>
            <td style={item.checked ? {textDecoration: "line-through"} : {}}>{item.item}</td>
            <td><button className="button is-text" onClick={onCheck}>Check</button></td>
            <td><button className="button is-text" onClick={onDelete}>Delete</button></td>
        </tr>
    )
}

export default Item
