import React, {useState} from 'react'
import List from './List/List'
import {Context} from "./Context";



function App() {
    // const  initialDnDState = {
    //     draggedFrom: null,
    //     draggedTo: null,
    //     isDragging: false,
    //     originalOrder: [],
    //     updatedOrder: []
    // }

    const [items, setItems] = useState([{number: 5, title: "🇦🇷 Argentina"},
        {number: 2, title: "🤩 YASS"},
        {number: 3, title: "👩🏼‍💻 Tech Girl"},
        {number: 4, title: "💋 Lipstick & Code"},
        {number: 1, title: "💃🏼 Latina"}])

    const sortItems = () => {
        const sortedItems = [...items].sort((a, b) => {
            return a.number - b.number
        })
        setItems(sortedItems)
    }

    return (
        <Context.Provider value={{sortItems}}>
            <div className="wrapper">
                <h1>Drag and Drop</h1>
                <List items={items}/>
                <button onClick={sortItems} value='update'>Сортировка</button>
            </div>
        </Context.Provider>
    )
}

export default App;
