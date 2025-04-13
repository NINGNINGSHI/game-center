import RoundCounter from "../../components/RoundCounter";
import {useEffect, useState} from "react";
import {GameState} from "../../types/yinyang/GameType";
import {mockGameStateRound1, mockGameStateRound1PhaseConstruction,} from "../../mocks/yinyang/GameState.ts";
import DraftCards from "../../components/DraftCards.tsx";
import SanctuaryCards from "../../components/SanctuaryCards.tsx";
import GameInformations from "../../components/GameInformations.tsx";

export default function GameBoard() {
    const [gameState, setGameState] = useState<GameState>(mockGameStateRound1);

    const goToNextPhase = () => {
        setGameState(mockGameStateRound1PhaseConstruction)
    };

    useEffect(() => {
        //TODO call api to get gamestate
        setGameState(mockGameStateRound1);
    }, []);


    return (
        <div className={"flex flex-col"}>
            <RoundCounter gameState={gameState}></RoundCounter>
            <DraftCards cards={gameState.activePlayer.draftedCards}/>
            <button
                onClick={goToNextPhase}
                className="text-white bg-amber-400 rounded-xl shadow hover:bg-amber-300 transition px-6 py-3 hover:cursor-pointer"
            >
                Confirm
            </button>
            <SanctuaryCards cards={gameState.activePlayer.sanctuaryCards}/>
            <GameInformations gameState={gameState}/>
        </div>
    )
}