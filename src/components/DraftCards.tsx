import {Card} from "../types/yinyang/GameType.ts";
import BuildingCard from "./BuildingCard.tsx";

export default function DraftCards(props: { cards: Card[] }) {
    return (
        <div className={"flex"}>
            {props.cards.map((card: Card, index: number) => (
                <BuildingCard key={index} card={card}/>
            ))}
        </div>
    )
}