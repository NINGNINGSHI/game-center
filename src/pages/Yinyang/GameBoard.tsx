import {useParams} from "react-router-dom";
import RoundCounter from "../../components/RoundCounter";
import {useState} from "react";
import {GameState} from "../../types/yinyang/GameType";
import {
    mockGameStateRound1,
    mockGameStateRound1PhaseConstruction,
} from "../../mocks/yinyang/GameState.ts";

export default function GameBoard() {
    const { roomId } = useParams();
    const [gameState, setGameState] = useState<GameState>(mockGameStateRound1);

    const goToNextPhase = () => {
        setGameState(mockGameStateRound1PhaseConstruction)
    };

    return (
        <div>
            <p>Here is the game board {roomId}</p>
            <RoundCounter gameState={gameState}></RoundCounter>
            <button
                onClick={goToNextPhase}
                className="text-white bg-amber-400 rounded-xl shadow hover:bg-amber-300 transition px-6 py-3 hover:cursor-pointer"
            >
                Confirm
            </button>
        </div>
    )

}