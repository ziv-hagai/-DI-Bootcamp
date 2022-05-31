import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import MicOne from './MicOne';
import { Context } from '../App';

const Home = () => {
    const { notes, setNotes } = useContext(Context);
    const navigate = useNavigate()

    const [searchText, setSearchText] = useState([]);

    useEffect(() => {
        fetch('/notes/all')
            .then(res => res.json())
            .then(data => {
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
        console.log(notes[notes.length - 1].id);
        fetch(`/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: `Note ${notes[notes.length - 1].id + 1}`, text: '' })
        })
            .then(res => res.json())
            .then(data => {
                notes.push(data[0])
                setNotes([...notes])
                console.log(notes[notes.length - 1]);
                navigate(`/${notes[notes.length - 1].id}`)
            })
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
                <button id='plus' onClick={add}>+</button>
            </div>
            <div id="board">
                {
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
                }
            </div>
        </div>
    )
}

export default Home