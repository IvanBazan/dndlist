import React, {useState, useRef} from 'react'
import {Map, YMaps} from "react-yandex-maps";
import AddItem from "./List/AddItem";


const styles = {
    map: {
        width: '600px',
        height: '800px'
    }
}

function App() {

    const draggingItem = useRef();
    const dragOverItem = useRef();

    const [list, setList] = useState([]);

    const [center, setCenter] = useState([55.75, 37.57]);

    const handleDragStart = (e, position) => {
        draggingItem.current = position;
        console.log(e.target.innerHTML);
    };

    function addItem(title) {
        setList(list.concat({title: title, center: center}))
    }

    const handleDragEnter = (e, position) => {
        dragOverItem.current = position;
        console.log(e.target.innerHTML);
    };

    const handleDragEnd = (e) => {
        const listCopy = [...list];
        const draggingItemContent = listCopy[draggingItem.current];
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);

        draggingItem.current = null;
        dragOverItem.current = null;
        setList(listCopy);
    };

    const getCenter = e => {
        setCenter(e.get('target').getCenter())
        console.log(center)
    }

    return (
        <div className="wrapper">
            <h1>Drag and Drop</h1>
            <div className="content">
            <ul>
                {list &&
                list.map((item, index) => (
                    <li
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnter={(e) => handleDragEnter(e, index)}
                        onDragEnd={handleDragEnd}
                        key={index}
                        draggable
                    >
                        {item.title}
                    </li>
                ))}
                <AddItem onCreate={addItem}/>
            </ul>
            <YMaps>
                <Map defaultState={{ center: center, zoom: 12 }} style={styles.map} onBoundsChange={e => getCenter(e)}/>
            </YMaps>
            </div>
        </div>
    );
}

export default App;
