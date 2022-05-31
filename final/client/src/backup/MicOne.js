import { useRef, useState } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import microPhoneIcon from "./microphone.svg";
import React from 'react';

function MicOne() {
    const { transcript, resetTranscript } = useSpeechRecognition();
    const [isListening, setIsListening] = useState(false);
    const microphoneRef = useRef(null);
    const [notes, setNotes] = useState([]);

    // if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    //     return (
    //         <div className="mircophone-container">
    //             Browser is not Support Speech Recognition.
    //         </div>
    //     );
    // }
    const handleListing = () => {
        setIsListening(true);
        microphoneRef.current.classList.add("listening");
        SpeechRecognition.startListening({
            continuous: true,
        });
    };
    const stopHandle = () => {
        setIsListening(false);
        microphoneRef.current.classList.remove("listening");
        SpeechRecognition.stopListening();
    };
    const handleReset = () => {
        stopHandle();
        resetTranscript();
    };
    // console.log(transcript);

    const add = (e) => {
        e.preventDefault()
        console.log(transcript);

        fetch(`/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: 'Recorded Note', text: transcript })
        })
            .then(res => res.json())
            .then(data => {
                setNotes(data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="microphone-wrapper">
            {/* <div className="mircophone-container"> */}
            <div
                className="microphone-icon-container"
                ref={microphoneRef}
                onClick={handleListing}
            >
                <img src={microPhoneIcon} className="microphone-icon" />
            </div>
            {/* <div className="microphone-status">
                    {isListening ? "Listening........." : "Click to start Listening"}
                </div> */}
            {isListening && (
                <button className="microphone-stop btn" onClick={stopHandle}>
                    Stop
                </button>
            )}
            {/* </div> */}
            {transcript && (
                <div className="microphone-result-container">
                    {/* <div className="microphone-result-text">{transcript}</div> */}
                    <button className="microphone-reset btn" onClick={handleReset}>
                        Reset
                    </button>
                    <button className="save btn" onClick={add}>
                        save
                    </button>
                </div>
            )}
        </div>
    );
}
export default MicOne;


