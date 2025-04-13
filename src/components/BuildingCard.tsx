import {Card, ComboVP, GrossVP, PairVP, VpType} from "../types/yinyang/GameType.ts";

export default function BuildingCard(props: { card: Card }) {
    const renderVP = () => {
        const vp = props.card.vp;
        if (!vp) {
            return "";
        }
        switch (props.card.vpType) {
            case VpType.GROSS :
                return `${(vp as GrossVP).score}`
            case VpType.COMBO :
                return `${(vp as ComboVP).multiplicator} x ${(vp as ComboVP).building}`
            case VpType.PAIR :
                return `${(vp as PairVP).building1} & ${(vp as PairVP).building2}`
            default :
                return ""
        }
    };

    return (
        <div
            className="bg-white text-black rounded-xl p-4 shadow-md w-64 cursor-pointer hover:scale-105 transition"
        >
            <h3 className="text-lg font-bold mb-2">{props.card.name}</h3>
            <p className="text-sm text-gray-700 mb-1">Type: {props.card.type}</p>
            <p className="text-sm mb-1">
                Cost: {Object.entries(props.card.cost || {}).map(([el, amt]) => `${el}: ${amt}`).join(", ")}
            </p>
            <p className="text-sm mb-1">
                Produces: {Object.entries(props.card.produces || {}).map(([el, amt]) => `${el}: ${amt}`).join(", ")}
            </p>
            <p className="text-sm mb-1">Bonus: {props.card.constructionBonus}</p>
            <p className="text-sm font-semibold">VP: {renderVP()}</p>
        </div>
    );
}