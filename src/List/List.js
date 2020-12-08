import React from 'react'
import ListItem from "./ListItem";

const styles = {
    ul: {
        listStyle: 'none'
    }
}

export default function List({items}) {

    return (
        <ul style={styles.ul}>
            {items.map((item, index) => <ListItem key={index} item={item}/>)}
        </ul>
    )
}