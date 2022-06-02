import { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import React from 'react';
import { Context } from '../App';
// import React from "react";
// import "./styles.css";
import { EmailShareButton, WhatsappShareButton } from "react-share";
import { EmailIcon, WhatsappIcon } from "react-share";

const Note = () => {
    const { notes, setNotes, edit, setEdit } = useContext(Context);
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
        // setNote(notes)
    }

    const editMode = () => {
        setEdit(true)
    }

    return (
        <div>

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
                                <div className="share">
                                    <EmailShareButton
                                        url={""}
                                        subject={item.title}
                                        body={item.text + "\n\n(sent from 'notesbook')"}
                                        className="Demo__some-network__share-button"
                                    >
                                        <EmailIcon size={32} round />
                                    </EmailShareButton>
                                    <br />
                                    <WhatsappShareButton
                                        title={`*${item.title}*\n${item.text}`}
                                        body={item.text + "\n\n(sent from 'notesbook')"}

                                        url={"\n\n(sent from 'notesbook')"}
                                    >
                                        <WhatsappIcon size={32} round />
                                    </WhatsappShareButton>
                                </div>
                            </div>
                    )

                })
            }
        </div>

    )
}

export default Note

