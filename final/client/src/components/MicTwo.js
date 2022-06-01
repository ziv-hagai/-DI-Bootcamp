import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import React from 'react';
import { useRef, useState, useContext } from "react";
import { Context } from '../App';

const MicTwo = () => {
    const { notes, setNotes, isNew, setIsNew } = useContext(Context);

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    const add = (e) => {
        e.preventDefault()
        SpeechRecognition.stopListening()
        console.log(notes[notes.length - 1].id);

        fetch(`/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: `Voice Note`, text: transcript })
        })
            .then(res => res.json())
            .then(data => {
                isNew ? notes.unshift(data[0]) : notes.push(data[0]);
                setNotes([...notes])
                resetTranscript();
                // setIsListening(false);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            {listening ?
                <button onClick={add}>Stop</button>
                :
                <button onClick={SpeechRecognition.startListening}>Start</button>
            }
            {/* <button onClick={resetTranscript}>Reset</button>
             <p>{transcript}</p> */}
        </div>
    );
};
export default MicTwo;