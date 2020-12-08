import React, { useContext, useRef} from 'react'
import {Context} from "../Context"

export default function ListItem(props) {

    const draggingItem = useRef();
    const dragOverItem = useRef();

    const {items, setItems} = useContext(Context)


    const handleDragStart = (e, position) => {
        draggingItem.current = position;
        console.log(e.target.innerHTML);
    };

    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
    };

    const handleDragEnd = (e) => {
        const listCopy = [...items];
        const draggingItemContent = listCopy[draggingItem.current];

        listCopy.splice(draggingItem.current, 1);
        console.log(draggingItem.current)
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);
        console.log('вставили', listCopy)

        draggingItem.current = null;
        dragOverItem.current = null;
        setItems(listCopy);
    };

    const aaa = props.item

    return (
        <li draggable={"true"}
            onDragStart={(e) => handleDragStart (e, props.key)}
            onDragEnter={(e) => handleDragEnter (e, props.key)}
            onDragEnd={handleDragEnd}
            // onDrop={onDragOver}
        >{aaa}
        </li>
    )
}