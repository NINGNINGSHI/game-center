// src/pages/Home.tsx
import {useNavigate} from "react-router-dom";

export default function Home() {
    const gameList: string[] = [
        'yinyang',
        'game2'
    ];

    const navigate = useNavigate();

    const handleJoinGame = (gameName: string) => {
        navigate(`/${gameName}`);
    };

    return (
        <div className="min-h-100 flex flex-col items-center justify-center gap-6 p-6">
            <p className="text-6xl text-black">Play online with your friends!</p>
            {
                gameList.map((game: string) => {
                    return <button
                        onClick={() => handleJoinGame(game)}
                        className="text-white bg-amber-400 rounded-xl shadow hover:bg-amber-300 transition px-6 py-3 hover:cursor-pointer"
                    >
                        {game}
                    </button>
                })
            }
        </div>
    );
}