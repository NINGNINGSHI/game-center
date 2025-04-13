export type Element = "Jin"| "Mu" | "Shui" | "Huo" | "Tu" | "Yin"| "Yang"| "Qi"
export type Building = "Mine"| "Forest"| "Lake"| "Volcan"| "Field"
export type ProductionRessource = "Jin"| "Mu"| "Shui"| "Huo"| "Tu"
export type General  = "Yin"| "Yang"

export type GrossVP = {
    score: number
}

export type ComboVP = {
    multiplicator: number,
    building: Building | General,
}

export type PairVP = {
    building1: Building
    building2: Building
}

export type Card = {
    id: string;
    name: string;
    cost: Partial<Record<Element, number>>;
    produces: Partial<Record<Element, number>>;
    vp?: GrossVP | ComboVP| PairVP
    constructionBonus: Element;
    type: Building
};

export type Player = {
    id: string;
    name: string;
    draftedCards: Card[];
    sanctuary: Card[];
    production: Partial<Record<ProductionRessource, number>>;
    ownResources: Record<Element, number>
};

export type GameState = {
    round: number;
    phase: "draft" | "production" | "construction";
    players: Player[];
    activePlayer: Player;
}
