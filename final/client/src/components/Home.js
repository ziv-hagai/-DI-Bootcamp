import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import MicTwo from './MicTwo';
import { Context } from '../App';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Home = () => {
    const { notes, setNotes, isNew, setIsNew, edit, setEdit } = useContext(Context);
    const navigate = useNavigate()

    // const [searchText, setSearchText] = useState([]);
    useEffect(() => {
        fetch('/notes/all')
            .then(res => res.json())
            .then(data => {
                isNew && data.reverse()
                // console.log(data.reverse());
                // const arr = data.sort()
                setNotes(data)
                setEdit(false)
                // setItemList([...data])
            })
            .catch(err => console.log(err));
    }, []);

    const handleDrop = (droppedItem) => {
        console.log('hd');

        if (!droppedItem.destination) return;
        var updatedList = [...notes];
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        setNotes(updatedList);
    };

    const reverse = () => {
        setNotes(notes.reverse())
        setIsNew(!isNew)
    }

    const search = (text) => {
        fetch(`/notes/search?q=${text}`)
            .then(res => res.json())
            .then(data => {
                // const arr = data.sort()
                setNotes(data)
            })
            .catch(err => console.log(err));
    };

    const add = (e) => {
        e.preventDefault()
        fetch(`/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: `New Note`, text: '' })
        })
            .then(res => res.json())
            .then(data => {
                notes.push(data[0])
                setNotes([...notes])
                setEdit(true)
                navigate(`/${notes[notes.length - 1].id}`)
            })
            .catch(err => console.log(err));
    }

    return (

        <div>
            {/* {console.log(itemList)} */}
            <div id="up">
                <div id='search'>
                    {/* <input type='text' onChange={(e) => setSearchText(e.target.value)} />*/}
                    <button onClick={reverse}>{isNew ? 'old' : 'new'}</button>
                    <input type='text' onChange={(e) => search(e.target.value)} />Q
                </div>
                <MicTwo />
                <button id='plus' onClick={add}>+</button>
            </div>
            <div id="board">
                <DragDropContext onDragEnd={handleDrop}>
                    <Droppable droppableId="list-container" direction="horizontal">
                        {(provided) => (
                            <div
                                className="list-container"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {notes.map((item, index) => (
                                    <Draggable key={`${item.id}`} draggableId={`${item.id}`} index={index} >
                                        {(provided) => (
                                            <div
                                                className="item-container"
                                                ref={provided.innerRef}
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}
                                            >
                                                <Link to={`/${item.id}`} className='card tc grow bg-whitesmoke br3 pa3 ma2 dib bw2 shadow-5'>
                                                    <div >
                                                        <h3 >{item.title}</h3>
                                                        <p>{item.text}</p>
                                                        <h6>{item.date.slice(0, 10)}</h6>
                                                    </div>
                                                </Link>                                        </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                {/* {
                    notes.map(item => {
                        return (
                            <Link to={`/${item.id}`} key={item.id} className='card tc grow bg-whitesmoke br3 pa3 ma2 dib bw2 shadow-5'>
                                <div >
                                    <h3 >{item.title}</h3>
                                    <p>{item.text}</p>
                                    <h6>{item.date.slice(0, 10)}</h6>
                                </div>
                            </Link>
                        )
                    })
                } */}
            </div>
        </div>
    )
}

export default Home