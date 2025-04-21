import RoundCounter from "../../components/RoundCounter";
import {useEffect, useState} from "react";
import {Card, GameState} from "../../types/yinyang/GameType";
import {hand1, hand2, mockGameStateRound1,} from "../../mocks/yinyang/GameState.ts";
import GameInformations from "../../components/GameInformations.tsx";
import ActionPanel from "../../components/ActionPanel.tsx";
import DraggableCardLists from "../../components/basic/DraggableCardLists.tsx";

export default function GameBoard() {
    const [gameState, setGameState] = useState<GameState>(mockGameStateRound1);
    const [pendingItems, setPendingItems] = useState<Card[]>(hand1);
    const [resolvedItems, setResolvedItems] = useState<Card[]>(hand2);

    useEffect(() => {
        switch (gameState.phase) {
            case 'draft' :
                setPendingItems(gameState.activePlayer.draftingCards)
                setResolvedItems(gameState.activePlayer.draftedCards)
                return;
            case 'planning' :
                setPendingItems(gameState.activePlayer.draftedCards)
                setResolvedItems(gameState.activePlayer.sanctuaryCards)
                return;
            default:
                return;
        }
    }, [gameState])

    const handleConfirm = () => {
        //TODO emit web socket event
        console.log("Confirmed")
    }

    const handleRecycle = () => {
        setGameState(gameState)
    }

    return (
        <div className={"flex flex-col px-8"}>
            <RoundCounter gameState={gameState}></RoundCounter>
            <DraggableCardLists
                topList={pendingItems}
                bottomList={resolvedItems}
                setTopList={setPendingItems}
                setBottomList={setResolvedItems}
            />
            <ActionPanel gameState={gameState} onConfirm={handleConfirm} onRecycle={handleRecycle}></ActionPanel>
            <GameInformations gameState={gameState}/>
        </div>
    )
}