import React from 'react';
import a from "./data2.json";

class Example2 extends React.Component {

    render() {
        return (
            <>
                <h1>Example2</h1>
                <h3>Job1</h3>
                <p>{a.Experiences[0].companyName}</p>
                <p>{a.Experiences[0].logo}</p>
                <p>{a.Experiences[0].url}</p>
                <p>{a.Experiences[0].roles[0].title}</p>
                <p>{a.Experiences[0].roles[0].description}</p>
                <p>{a.Experiences[0].roles[0].startDate}</p>
                <p>{a.Experiences[0].roles[0].endDate}</p>
                <p>{a.Experiences[0].roles[0].location}</p>
                <h3>Job2</h3>
                <p>{a.Experiences[1].companyName}</p>
                <p>{a.Experiences[1].logo}</p>
                <p>{a.Experiences[1].url}</p>
                <p>{a.Experiences[1].roles[0].title}</p>
                <p>{a.Experiences[1].roles[0].description}</p>
                <p>{a.Experiences[1].roles[0].startDate}</p>
                <p>{a.Experiences[1].roles[0].endDate}</p>
                <p>{a.Experiences[1].roles[0].location}</p>
            </>
        )
    }

}

export default Example2