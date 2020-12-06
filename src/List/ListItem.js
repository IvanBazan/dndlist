import React, {useContext} from 'react'
import {Context} from "../Context"

export default function ListItem ({number, title}){

    const {sortItems} = useContext(Context)

    const onDragStart = () => {
        sortItems()
    }

    return(
        <li draggable={"true"}
             onDragStart={onDragStart}
            // onDragOver={onDragStart2}
        >
            {number}{title}
        </li>
    )
}