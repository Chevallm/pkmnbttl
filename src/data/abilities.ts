import { Attack } from "../types/Attack";

export const abilities: Attack[] = [
    {
        name: 'Hit',
        type: 'Normal',
        accuracy: 100,
        power: 30,
        category: "Physical",
        pp: 30
    },
    {
        name: 'Roar',
        type: 'Normal',
        category: 'Status',
        pp: 40,
        accuracy: 95,
        power: 0,
        effect: {
            chance: 100,
            type: "stat_boost",
            stats: {
                defense: -1
            }
        }
    },
    {
        name: 'Punch',
        type: 'Fighting',
        category: "Physical",
        power: 50,
        accuracy: 100,
        pp: 20
    },
    {
        name: 'Sting',
        type: 'Bug',
        category: 'Physical',
        power: 50,
        accuracy: 100,
        pp: 20
    },
    {
        name: 'Buble',
        type: 'Water',
        category: 'Special',
        power: 50,
        accuracy: 100,
        pp: 20
    },
    {
        name: 'Ember',
        type: 'Fire',
        category: 'Special',
        power: 50,
        accuracy: 100,
        pp: 20
    },
    {
        name: 'Rock throw',
        type: 'Rock',
        category: 'Physical',
        power: 50,
        accuracy: 100,
        pp: 20
    },
    {
        name: 'Sand blast',
        type: 'Ground',
        category: 'Special',
        power: 50,
        accuracy: 100,
        pp: 20
    },
    {
        name: 'Venom',
        type: 'Poison',
        category: 'Status',
        power: 0,
        accuracy: 100,
        pp: 20,
        effect: {
            chance: 80,
            type: "status_condition",
            statusCondition: 'Poisoned'
        }
    },
    {
        name: 'Wind slash',
        type: 'Flying',
        category: "Physical",
        power: 50,
        accuracy: 100,
        pp: 20
    },
    {
        name: 'Frozen Orb',
        type: 'Ice',
        category: 'Special',
        power: 50,
        accuracy: 90,
        pp: 20,
        effect: {
            chance: 30,
            type: "status_condition",
            statusCondition: 'Frozen'
        }
    },
    {
        name: 'Static Touch',
        type: "Electric",
        category: "Physical",
        power: 30,
        pp: 25,
        accuracy: 100,
        effect: {
            chance: 40,
            type: "status_condition",
            statusCondition: "Paralyzed"
        }
    },
    {
        name: "Mental breakdown",
        type: "Psychic",
        power: 10,
        accuracy: 100,
        pp: 20,
        category: "Status",
        effect: {
            chance: 100,
            type: "stat_boost",
            stats: {
                specialAttack: -2,
                attack: -2
            }
        }
    }
]