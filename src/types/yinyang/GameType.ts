export type Element = "Jin"| "Mu" | "Shui" | "Huo" | "Tu" | "Yin"| "Yang"| "Qi"
export type BuildingType = "Mine"| "Forest"| "Lake"| "Volcan"| "Field"
export type ProductionRessource = "Jin"| "Mu"| "Shui"| "Huo"| "Tu"
export type General  = "Yin"| "Yang"
export type Sanctuary = "Sanctuary1" | "Sanctuary2" | "Sanctuary3" | "Sanctuary4"

export enum VpType {
    GROSS, COMBO, PAIR, NONE
}

export type GrossVP = {
    score: number
}

export type ComboVP = {
    multiplicator: number,
    building: BuildingType | General,
}

export type PairVP = {
    building1: BuildingType
    building2: BuildingType
}

export type Card = {
    id: string;
    name: string;
    cost: Partial<Record<Element, number>>;
    produces: Partial<Record<Element, number>>;
    vp?: GrossVP | ComboVP| PairVP
    constructionBonus: Element;
    type: BuildingType,
    vpType: VpType
};

export type Player = {
    id: string;
    name: string;
    draftedCards: Card[];
    sanctuaryCards: Card[];
    sanctuary: Sanctuary;
    production: Partial<Record<ProductionRessource, number>>;
    ownResources: Record<Element, number>
};

export type GameState = {
    round: number;
    phase: "draft" | "production" | "construction";
    players: Player[];
    activePlayer: Player;
}
