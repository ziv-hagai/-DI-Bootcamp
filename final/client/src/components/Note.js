import { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import React from 'react';

const Note = () => {
    const [note, setNote] = useState([]);
    const params = useParams();
    const [title, setTitle] = useState([]);
    const [text, setText] = useState([]);
    const navigate = useNavigate()
    const [notes, setNotes] = useState([]);
    const [edit, setEdit] = useState(/*title == '' && text == '' ? true :*/ false);
    // console.log(note);
    // useContext
    useEffect(() => {
        fetch(`/notes/n/${params.id}`)
            .then(res => res.json())
            .then(data => {
                // const arr = data.sort()
                setNote(data)
                setTitle(data[0].title);
                setText(data[0].text)
                console.log(data);
                if (data[0].title === '' && data[0].text === '') {
                    setEdit(true)
                }
            })
            .catch(err => console.log(err));
    }, []);

    const update = (e) => {
        setEdit(false)
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

    const editMode = () => {
        setEdit(!edit)
    }
    return (
        <div>
            {/* <div>
                <form onSubmit={update}>
                    title:<input type='text' onChange={(e) => setTitle(e.target.value)} value={title} /><br />
                    text:<input type='text' onChange={(e) => setText(e.target.value)} value={text} />
                    <input type='submit' value='update' />
                </form>
            </div> */}
            {
                note.map(item => {
                    return (
                        edit ?
                            <div key={item.id} id='editable'>
                                <form onSubmit={update}>
                                    <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
                                    <textarea type='text' onChange={(e) => setText(e.target.value)} value={text} />
                                    <input type='submit' value='done' />
                                </form>
                            </div>
                            :
                            <div key={item.id}>
                                <h2>{edit ? 'edit' : item.title}</h2>
                                <p>{item.text}</p>
                                <Link to={`/`}> <button>back</button></Link>
                                <button onClick={editMode}>edit</button>
                                <button onClick={del}>Delete</button>
                            </div>
                    )

                })
            }
        </div>

    )
}

export default Note

{/* <div contenteditable="true">can be edited</div> */ }