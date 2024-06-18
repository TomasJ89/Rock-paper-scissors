import './App.css';
import Comp1 from "./components/comp1";
import Comp2 from "./components/comp2";
import Comp3 from "./components/comp3";
import mainStore from "./store/mainStore";
import helpers from "./plugins/helpers";
import {useEffect} from "react";

function App() {
    const {emojies, setComputer,player,computer,setText,setPlayer, setColor, addLogText} = mainStore()
    function addComputerEmoji() {
        if (!player) return;
        const randomIndex = helpers.rnd(emojies.length-1);
        setComputer(emojies[randomIndex]);

    }

    function compare() {
        if (player && computer) {
            if (computer.id === player.id) {
                setText("Draw");
                setColor("yellow")


            } else if ((player.id === 1 && computer.id === 2) ||
                (player.id === 2 && computer.id === 3) ||
                (player.id === 3 && computer.id === 1)) {
                setText("Player Win!");
                setColor("green")


            } else {
                setText("Computer Win!");
                setColor("red")

            }
            addLogText()

            // Clear the state after a short delay
            setTimeout(() => {
                cleanHTML()
            }, 2000);
        }
    }

    function cleanHTML () {
        setText(null);
        setComputer(null);
        setPlayer(null);
    }

    useEffect(() => {
        compare();
    }, [computer, player]);
    return (
        <div className="p-5 border m-5 d-flex h-100">
            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                <div>
                    <Comp3/>
                </div>
                <button className="btn btn-dark my-2" onClick={addComputerEmoji}>Play</button>
                <div>
                    <Comp1/>
                </div>
            </div>
            <div className="p-5 border flex-grow-1 overflow-y-scroll box">
                <Comp2/>
            </div>


        </div>
    );
}

export default App;
