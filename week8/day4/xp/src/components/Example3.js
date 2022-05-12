import React from 'react';
import a from "./data2.json";

class Example3 extends React.Component {

    render() {
        return (
            <>
                <h1>Example3</h1>
                <h3>{a.Skills[0].Area}</h3>
                <ul>
                    <li>{a.Skills[0].SkillSet[0].Name}</li>
                    <li>{a.Skills[0].SkillSet[1].Name}</li>
                    <li>{a.Skills[0].SkillSet[2].Name}</li>
                </ul>
                <h3>{a.Skills[1].Area}</h3>
                <ul>
                    <li>{a.Skills[1].SkillSet[0].Name}</li>
                    <li>{a.Skills[1].SkillSet[1].Name}</li>
                    <li>{a.Skills[1].SkillSet[2].Name}</li>
                    <li>{a.Skills[1].SkillSet[3].Name}</li>
                    <li>{a.Skills[1].SkillSet[4].Name}</li>
                </ul>
            </>
        )
    }

}

export default Example3