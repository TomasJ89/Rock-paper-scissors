import React from 'react';
import mainStore from "../store/mainStore";

const Comp3 = () => {
    const {computer, player, gameText, } = mainStore()

    return (
        <div className="p-5 border d-flex gap-2">
            <div className="text-center">
                <p>Computer</p>
                <div className="icon border">{computer? computer.icon:""}</div>
            </div>

            <p className="p-2">{gameText}</p>
            <div className="text-center">
                <p>Player</p>
                <div className="icon border">{player? player.icon:""}</div>
            </div>


        </div>
    );
};

export default Comp3;