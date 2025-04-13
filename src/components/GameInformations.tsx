import {GameState} from "../types/yinyang/GameType.ts";

export default function GameInformations(props: {gameState: GameState}) {
    return (
        <div>
            <p>Coucou ! {props.gameState.activePlayer.name}</p>
        </div>
    )
}