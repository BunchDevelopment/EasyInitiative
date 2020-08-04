import React, { useState } from 'react';

const CreateBattleModal = ({modalTitle}) => {
    let [numberOfPeeps, setNumberOfPeeps] = useState(0)
    let items = []
    for(let ind = 0; ind < 16; ind++){
        items.push(<option value={ind}>{ind}</option>)
    }
    return (
        <>
        <h3>{modalTitle}</h3>
        <form style={{margin: '20px', textAlign: 'left'}}>
            <label for="battleName">Name of the Battle: </label>
                <input type="text" name="battleName"></input>
            <br/>
            <label for="numberOfPeeps">How Many People Will There Be: </label>
                <select name="numberOfPeeps" value={numberOfPeeps} onChange={(e) => setNumberOfPeeps(numberOfPeeps = e.target.value)}>
                    {items.map(curr => curr)}
                </select>
            
        </form>
        </>
    );
}

export default CreateBattleModal;
