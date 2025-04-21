import {GameState} from "../types/yinyang/GameType.ts";

type CardsBoardProps = {
    gameState: GameState;
    onConfirm: () => void;
    onRecycle: () => void;
}

export default function ActionPanel({gameState, onConfirm, onRecycle}: CardsBoardProps) {
    return (
        <div>
            <button
                onClick={onConfirm}
            >
                Confirm
            </button>
            {gameState.phase === 'planning' &&
                <button
                    onClick={onRecycle}
                >
                    Recycle
                </button>
                &&
                <span>X elements to distribute</span>
            }
            {gameState.phase === 'construction' &&
                <span>You will receive x elements, you got the supremacy</span>
            }
        </div>
    )
}