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
            <td><a onClick={onCheck} href="#">Check</a></td>
            <td><a onClick={onDelete} href="#">Delete</a></td>
        </tr>
    )
}

export default Item
