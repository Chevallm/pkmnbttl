import { Attack, StatusCondition } from './Attack';

export interface Pokemon {
    id: number,
    name: string;
    type: [string, string?];     // Types du Pokémon (ex: ["Fire"] ou ["Water", "Flying"])
    stats: Stats;                // Statistiques du Pokémon
    attacks?: Attack[];           // Liste des attaques du Pokémon
    currentHp?: number;           // Points de vie actuels (mis à jour pendant les combats)
    statBoosts?: StatBoosts;      // Boosts temporaires des stats (appliqués durant le combat)
    statusCondition?: StatusCondition;  // Condition de statut (optionnel)
    evolution: {
        next?: [string, string][],
        prev?: [string, string]
    },
    image: {
        sprite: string,
        thumbnail: string,
        hires: string
    }
}

export interface Stats {
    hp: number;              // Points de vie
    attack: number;          // Attaque physique
    defense: number;         // Défense physique
    specialAttack: number;   // Attaque spéciale
    specialDefense: number;  // Défense spéciale
    speed: number;           // Vitesse
}

export interface StatBoosts {
    attack: number;          // Augmentation ou réduction temporaire de l'attaque
    defense: number;         // Augmentation ou réduction temporaire de la défense
    specialAttack: number;   // Augmentation ou réduction temporaire de l'attaque spéciale
    specialDefense: number;  // Augmentation ou réduction temporaire de la défense spéciale
    speed: number;           // Augmentation ou réduction temporaire de la vitesse
}
