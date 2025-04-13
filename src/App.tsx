import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Yinyang from "./pages/Yinyang/Yinyang.tsx";
import GameBoard from "./pages/Yinyang/GameBoard.tsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/yinyang" element={(<Yinyang/>)}/>
            <Route path="/yinyang/:roomId" element={(<GameBoard />)}/>
        </Routes>
    );
}
