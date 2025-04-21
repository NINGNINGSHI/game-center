import {GameState, Player} from "../types/yinyang/GameType.ts";
import ProductionStepper from "./ProductionStepper.tsx";

export default function RoundCounter(props: { gameState: GameState }) {
    return (
        <div className="grid grid-cols-6 gap-4">
            <p>Round {props.gameState.round}/4</p>
            <p>Phase {props.gameState.phase}</p>
            <ul>
                {
                    props.gameState.players.map((player: Player, index: number) => {
                        return <li key={index}>{player.name}</li>
                    })
                }
            </ul>
            <div className="grid col-span-3 gap-4">
                <ProductionStepper></ProductionStepper>
            </div>
        </div>
    )
}