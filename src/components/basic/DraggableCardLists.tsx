import * as React from "react";
import {Card} from "../../types/yinyang/GameType";
import BuildingCard from "../BuildingCard.tsx";

type DraggableCardListsProps = {
    topList: Card[];
    bottomList: Card[];
    setTopList: React.Dispatch<React.SetStateAction<Card[]>>;
    setBottomList: React.Dispatch<React.SetStateAction<Card[]>>;
};

export default function DraggableCardLists({topList, bottomList, setTopList, setBottomList}: DraggableCardListsProps) {
    const handleDragStart = (e: React.DragEvent, card: Card) => {
        e.dataTransfer.setData("application/json", JSON.stringify(card));
    };

    const handleDrop = (
        e: React.DragEvent<HTMLDivElement>,
        targetList: 'topList' | 'bottomList'
    ) => {
        e.preventDefault();
        const card: Card = JSON.parse(e.dataTransfer.getData("application/json"));

        setTopList((prev: Card[]) => prev?.filter(c => c.id !== card.id));
        setBottomList((prev: Card[]) => prev.filter(c => c.id !== card.id));

        if (targetList === 'topList') {
            setTopList((prev: Card[]) => [...prev, card]);
        } else {
            setBottomList((prev: Card[]) => [...prev, card]);
        }
    };

    const allowDrop = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

    return (
        <div className="flex flex-col w-full">
            {topList?.length > 0 &&
                <div
                    className="grid grid-cols-7 gap-3 my-8 border-2 border-dashed rounded-md"
                    onDragOver={allowDrop}
                    onDrop={(e) => handleDrop(e, 'topList')}
                >
                    {topList.map(card => (
                        <BuildingCard key={card.id} card={card} onDragStart={handleDragStart}/>
                    ))}
                </div>
            }
            <div
                className="grid grid-cols-7 gap-3 my-8 border-2 border-dashed rounded-md"
                onDragOver={allowDrop}
                onDrop={(e) => handleDrop(e, 'bottomList')}
            >
                {bottomList.map(card => (
                    <BuildingCard key={card.id} card={card} onDragStart={handleDragStart}/>
                ))}
            </div>
        </div>
    );
}