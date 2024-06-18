import {create} from "zustand";

const useStore = create((set, get) => ({
    emojies: [
        {id: 1, icon: "✊",name:"stone"},
        {id: 2, icon: "✌️", name:"clippers"},
        {id: 3, icon: "🤚", name:"paper"}
    ],
    gameText: "",
    computer:null,
    player:null,
    logText:[],
    color:"",
    setText: val => set({gameText: val}),
    setComputer: val => set({computer:val}),
    setPlayer: val => set({player:val}),
    setColor: val => set({color:val}),
    addLogText: () => set((state) => ({
        logText: [...state.logText, { text: state.gameText, date: new Date().toLocaleString(),color:state.color }]
    }))
}))

export default useStore