import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { Component } from 'react';

const Note = (props) => {
    const [note, setNote] = useState([]);
    const params = useParams();
    const [title, setTitle] = useState([]);
    const [text, setText] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`/notes/n/${params.id}`)
            .then(res => res.json())
            .then(data => {
                // const arr = data.sort()
                setNote(data)
                setTitle(data[0].title);
                setText(data[0].text)
            })
            .catch(err => console.log(err));
    }, []);

    const update = (e) => {
        e.preventDefault()
        fetch(`/notes/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, text })
        })
            .then(res => res.json())
            .then(data => {
                setNote(data);

            })
            .catch(err => console.log(err));
    }

    const del = (e) => {
        e.preventDefault()
        fetch(`/notes/${params.id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div>
                <h2>Update</h2>
                <form onSubmit={update}>
                    title:<input type='text' onChange={(e) => setTitle(e.target.value)} value={title} /><br />
                    text:<input type='text' onChange={(e) => setText(e.target.value)} value={text} />
                    <input type='submit' value='update' />
                </form>
            </div>
            <h2>Delete</h2>
            <button onClick={del}>Delete</button>
            {
                note.map(item => {
                    return (
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.text}</p>
                            <Link to={`/`}> Show ALL</Link>

                        </div>
                    )

                })
            }
        </div>

    )
}

export default Note