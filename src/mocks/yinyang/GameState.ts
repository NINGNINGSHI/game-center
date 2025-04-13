import {Card, GameState, Player} from "../../types/yinyang/GameType";


export const player1: Player = {
    id: "p1",
    name: "Aoki",
    draftedCards: [],
    sanctuary: [],
    production: { Jin: 1, Shui: 1 },
    ownResources: {
        Jin: 1, Mu: 0, Shui: 1, Huo: 0, Tu: 0, Yin: 0, Yang: 0, Qi: 0,
    },
};

export const player2: Player = {
    id: "p2",
    name: "Kaen",
    draftedCards: [],
    sanctuary: [],
    production: { Huo: 1, Tu: 1 },
    ownResources: {
        Jin: 0, Mu: 1, Shui: 0, Huo: 2, Tu: 1, Yin: 0, Yang: 0, Qi: 0,
    },
};

const hand1: Card[] = [
    {
        id: "c1",
        name: "Sacred Lake",
        cost: { Shui: 2 },
        produces: { Yang: 1 },
        constructionBonus: "Shui",
        type: "Lake",
        vp: { score: 3 },
    },
    {
        id: "c2",
        name: "Ancient Forest",
        cost: { Mu: 2, Tu: 1 },
        produces: { Mu: 2 },
        constructionBonus: "Mu",
        type: "Forest",
        vp: { multiplicator: 1, building: "Lake" },
    },
    {
        id: "c3",
        name: "Volcano Forge",
        cost: { Huo: 3 },
        produces: { Jin: 1 },
        constructionBonus: "Huo",
        type: "Volcan",
        vp: { score: 2 },
    },
    {
        id: "c4",
        name: "Crystal Mine",
        cost: { Jin: 2 },
        produces: { Jin: 2 },
        constructionBonus: "Jin",
        type: "Mine",
        vp: { building1: "Mine", building2: "Lake" },
    },
    {
        id: "c5",
        name: "Yin Temple",
        cost: { Yin: 1, Shui: 1 },
        produces: { Yin: 1 },
        constructionBonus: "Yin",
        type: "Lake",
        vp: { score: 4 },
    },
    {
        id: "c6",
        name: "Balance Shrine",
        cost: { Jin: 1, Yang: 1 },
        produces: { Qi: 1 },
        constructionBonus: "Qi",
        type: "Forest",
        vp: { score: 5 },
    },
    {
        id: "c7",
        name: "Lava Garden",
        cost: { Tu: 2, Huo: 2 },
        produces: { Huo: 2 },
        constructionBonus: "Tu",
        type: "Field",
        vp: { multiplicator: 2, building: "Volcan" },
    },
];

const hand2: Card[] = [
    {
        id: "c8",
        name: "Moonlight Lake",
        cost: { Shui: 2 },
        produces: { Yin: 1 },
        constructionBonus: "Shui",
        type: "Lake",
        vp: { score: 2 },
    },
    {
        id: "c9",
        name: "Lush Grove",
        cost: { Mu: 2 },
        produces: { Mu: 2 },
        constructionBonus: "Mu",
        type: "Forest",
        vp: { multiplicator: 1, building: "Field" },
    },
    {
        id: "c10",
        name: "Blazing Volcano",
        cost: { Huo: 3 },
        produces: { Tu: 1 },
        constructionBonus: "Huo",
        type: "Volcan",
        vp: { score: 3 },
    },
    {
        id: "c11",
        name: "Deep Mine",
        cost: { Jin: 2 },
        produces: { Jin: 1 },
        constructionBonus: "Jin",
        type: "Mine",
        vp: { score: 2 },
    },
    {
        id: "c12",
        name: "Yang Temple",
        cost: { Yang: 1, Huo: 1 },
        produces: { Yang: 1 },
        constructionBonus: "Yang",
        type: "Volcan",
        vp: { score: 4 },
    },
    {
        id: "c13",
        name: "Balance Grove",
        cost: { Tu: 1, Yin: 1 },
        produces: { Qi: 1 },
        constructionBonus: "Qi",
        type: "Forest",
        vp: { score: 5 },
    },
    {
        id: "c14",
        name: "Flame Farm",
        cost: { Huo: 2, Tu: 1 },
        produces: { Huo: 1 },
        constructionBonus: "Huo",
        type: "Field",
        vp: { building1: "Field", building2: "Forest" },
    },
];

export const mockGameStateRound1: GameState = {
    round: 1,
    phase: "draft",
    players: [player1, player2],
    activePlayer: player1
};

export const mockGameStateRound2: GameState = {
    round: 2,
    phase: "draft",
    players: [player1, player2],
    activePlayer: player1
};

export const mockGameStateRound1PhaseConstruction: GameState = {
    round: 1,
    phase: "construction",
    players: [player1, player2],
    activePlayer: player1
};
