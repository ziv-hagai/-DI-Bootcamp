import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import MicTwo from './MicTwo';
import { Context } from '../App';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Home = () => {
    const { notes, setNotes, isNew, setIsNew, edit, setEdit } = useContext(Context);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/notes/all')
            .then(res => res.json())
            .then(data => {
                setNotes(data)
                setEdit(false)
            })
            .catch(err => console.log(err));
    }, []);

    const handleDrop = (droppedItem) => {
        if (!droppedItem.destination) return;
        var updatedList = [...notes];
        const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
        updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
        setNotes(updatedList);
        updatedList.forEach((item, i) => {
            fetch(`/notes/${item.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ index: updatedList.length - i })
            })
                .then(res => res.json())
                .catch(err => console.log(err));
        })
    };

    const reset = () => {
        fetch('/notes/all')
            .then(res => res.json())
            .then(data => {
                setNotes(data)
                setEdit(false)
            })
            .catch(err => console.log(err));
    }

    const reverse = () => {
        isNew ?
            notes.sort(function (a, b) {
                const keyA = new Date(a.date),
                    keyB = new Date(b.date);
                if (keyA < keyB) return -1;
                if (keyA > keyB) return 1;
                return 0;
            })
            :
            notes.sort(function (a, b) {
                const keyA = new Date(a.date),
                    keyB = new Date(b.date);
                if (keyA > keyB) return -1;
                if (keyA < keyB) return 1;
                return 0;
            })
        setIsNew(!isNew)
    }

    const search = (text) => {
        fetch(`/notes/search?q=${text}`)
            .then(res => res.json())
            .then(data => {
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
            body: JSON.stringify({ title: `New Note`, text: '', color: 'white', index: notes.length })
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
            <div id="up">
                <div id='search'>
                    <button onClick={reverse}>{isNew ? 'old' : 'new'}</button>
                    <button onClick={reset}>reset</button>
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
                                {notes.map((item, i) => (
                                    <Draggable key={`${item.id}`} draggableId={`${item.id}`} index={i} >
                                        {(provided) => (
                                            <div
                                                className="item-container"
                                                ref={provided.innerRef}
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}
                                            >
                                                <Link style={{ backgroundColor: item.color }} to={`/${item.id}`} className='card tc grow bg-whitesmoke br3 pa3 ma2 dib bw2 shadow-5'>
                                                    <div >
                                                        <h3 >{item.title}</h3>
                                                        <p>{item.text}</p>
                                                        <h6>{Date(item.date).slice(4, 15).replace(' 0', ' ')}</h6>
                                                    </div>
                                                </Link>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    )
}

export default Home