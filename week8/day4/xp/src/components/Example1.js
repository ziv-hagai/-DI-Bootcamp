import React from 'react';
import a from "./data2.json";

class Example1 extends React.Component {

    render() {
        return (
            <>
                <h1>Example1</h1>
                <p>{a.SocialMedias[0]}</p>
                <p>{a.SocialMedias[1]}</p>
                <p>{a.SocialMedias[2]}</p>
            </>
        )
    }

}

export default Example1