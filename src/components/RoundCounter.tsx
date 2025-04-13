import {GameState, Player} from "../types/yinyang/GameType.ts";
import ProductionStepper from "./ProductionStepper.tsx";

export default function RoundCounter(props: { gameState: GameState }) {
    return (
        <div className="flex justify-between">
            <p>Round {props.gameState.round}/4</p>
            <p>Phase {props.gameState.phase}</p>
            <ul>
                {
                    props.gameState.players.map((player: Player, index: number) => {
                        return <li key={index}>{player.name}</li>
                    })
                }
            </ul>
            <ProductionStepper></ProductionStepper>
        </div>
    )
}