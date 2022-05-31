import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import MicOne from './MicOne';

const Home = (props) => {

    const [notes, setNotes] = useState([]);
    const [searchText, setSearchText] = useState([]);
    const [title, setTitle] = useState([]);
    const [text, setText] = useState([]);

    useEffect(() => {
        fetch('/notes/all')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // const arr = data.sort()
                setNotes(data)
            })
            .catch(err => console.log(err));
    }, []);

    const search = () => {
        fetch(`/notes/search?q=${searchText}`)
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
            body: JSON.stringify({ title, text })
        })
            .then(res => res.json())
            .then(data => setNotes(data))
            .catch(err => console.log(err));
    }

    return (
        <div>


            <div id="up">
                <div id='search'>
                    <input type='text' onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={search}>Search</button>
                </div>
                <MicOne />

                <button id='plus'>+</button>
                {/* <form onSubmit={add}>
                    title:<input type='text' onChange={(e) => setTitle(e.target.value)} /><br />
                    text:<input type='text' onChange={(e) => setText(e.target.value)} />
                    <input type='submit' value='add' />
                </form> */}
            </div>
            <div id="board">
                {
                    notes.map(item => {
                        return (
                            <div key={item.id} className='card tc grow bg-whitesmoke br3 pa3 ma2 dib bw2 shadow-5'>
                                <h3 >{item.title}</h3>
                                <p>{item.text}</p>
                                <h6>{item.date.slice(0, 10)}</h6>
                                {/* <button><Link to={`/${item.id}`}>edit</Link></button> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home