import React from 'react';
import mainStore from "../store/mainStore";

const Comp1 = () => {
    const {emojies, setPlayer} = mainStore()

    function addPlayerEmoji(x) {
        setPlayer(x)
    }

    return (
        <div className="d-flex p-2 border">
            {emojies.map((x, i) => <div key={x.id}
                                        className="icon"
                                        onClick={() => addPlayerEmoji(x)}
            >{x.icon}</div>)}
        </div>
    );
};

export default Comp1;