import {useNavigate} from "react-router-dom";

export default function Yinyang() {
    const navigate = useNavigate();

    const handleJoinRoom = (roomId: string) => {
        navigate(`${roomId}`);
    };

    return (
        <div className="min-h-100 flex flex-col items-center justify-center gap-6 p-6">
            <p className="text-6xl text-black">Hello world, this is yinyang</p>
            <p className="text-6xl text-black">Please choose your room</p>
            <button
                onClick={() => handleJoinRoom("room1")}
                className="text-white bg-amber-400 rounded-xl shadow hover:bg-amber-300 transition px-6 py-3 hover:cursor-pointer"
            >
                Play
            </button>
        </div>
    )
}