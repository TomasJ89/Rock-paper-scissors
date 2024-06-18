import React from 'react';
import mainStore from "../store/mainStore";


const Comp2 = () => {
    const {logText} = mainStore()
    console.log(logText)


    return (
        <div>
            {logText.map((x,i)=><div key={i} className={"p-2 border"} style={{backgroundColor:x.color}}>
                <h2>{x.text}</h2>
                <p>{x.date}</p>
            </div>)}
        </div>
    );
};

export default Comp2;