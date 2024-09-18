import { Pokemon } from "../types/Pokemon";

export const pokedexData: Pokemon[] = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "2",
                    "Level 16"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/001.png",
            "thumbnail": "./thumbnails/001.png",
            "hires": "./hires/001.png"
        },
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 45
        }
    },
    {
        "id": 2,
        "name": "Ivysaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "1",
                "Level 16"
            ],
            "next": [
                [
                    "3",
                    "Level 32"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/002.png",
            "thumbnail": "./thumbnails/002.png",
            "hires": "./hires/002.png"
        },
        "stats": {
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 60
        }
    },
    {
        "id": 3,
        "name": "Venusaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "2",
                "Level 32"
            ]
        },
        "image": {
            "sprite": "./sprites/003.png",
            "thumbnail": "./thumbnails/003.png",
            "hires": "./hires/003.png"
        },
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 83,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 80
        }
    },
    {
        "id": 4,
        "name": "Charmander",
        "type": [
            "Fire"
        ],
        "evolution": {
            "next": [
                [
                    "5",
                    "Level 16"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/004.png",
            "thumbnail": "./thumbnails/004.png",
            "hires": "./hires/004.png"
        },
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "specialAttack": 60,
            "specialDefense": 50,
            "speed": 65
        }
    },
    {
        "id": 5,
        "name": "Charmeleon",
        "type": [
            "Fire"
        ],
        "evolution": {
            "prev": [
                "4",
                "Level 16"
            ],
            "next": [
                [
                    "6",
                    "Level 36"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/005.png",
            "thumbnail": "./thumbnails/005.png",
            "hires": "./hires/005.png"
        },
        "stats": {
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "specialAttack": 80,
            "specialDefense": 65,
            "speed": 80
        }
    },
    {
        "id": 6,
        "name": "Charizard",
        "type": [
            "Fire",
            "Flying"
        ],
        "evolution": {
            "prev": [
                "5",
                "Level 36"
            ]
        },
        "image": {
            "sprite": "./sprites/006.png",
            "thumbnail": "./thumbnails/006.png",
            "hires": "./hires/006.png"
        },
        "stats": {
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "specialAttack": 109,
            "specialDefense": 85,
            "speed": 100
        }
    },
    {
        "id": 7,
        "name": "Squirtle",
        "type": [
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "8",
                    "Level 16"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/007.png",
            "thumbnail": "./thumbnails/007.png",
            "hires": "./hires/007.png"
        },
        "stats": {
            "hp": 44,
            "attack": 48,
            "defense": 65,
            "specialAttack": 50,
            "specialDefense": 64,
            "speed": 43
        }
    },
    {
        "id": 8,
        "name": "Wartortle",
        "type": [
            "Water"
        ],
        "evolution": {
            "prev": [
                "7",
                "Level 16"
            ],
            "next": [
                [
                    "9",
                    "Level 36"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/008.png",
            "thumbnail": "./thumbnails/008.png",
            "hires": "./hires/008.png"
        },
        "stats": {
            "hp": 59,
            "attack": 63,
            "defense": 80,
            "specialAttack": 65,
            "specialDefense": 80,
            "speed": 58
        }
    },
    {
        "id": 9,
        "name": "Blastoise",
        "type": [
            "Water"
        ],
        "evolution": {
            "prev": [
                "8",
                "Level 36"
            ]
        },
        "image": {
            "sprite": "./sprites/009.png",
            "thumbnail": "./thumbnails/009.png",
            "hires": "./hires/009.png"
        },
        "stats": {
            "hp": 79,
            "attack": 83,
            "defense": 100,
            "specialAttack": 85,
            "specialDefense": 105,
            "speed": 78
        }
    },
    {
        "id": 10,
        "name": "Caterpie",
        "type": [
            "Bug"
        ],
        "evolution": {
            "next": [
                [
                    "11",
                    "Level 7"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/010.png",
            "thumbnail": "./thumbnails/010.png",
            "hires": "./hires/010.png"
        },
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 35,
            "specialAttack": 20,
            "specialDefense": 20,
            "speed": 45
        }
    },
    {
        "id": 11,
        "name": "Metapod",
        "type": [
            "Bug"
        ],
        "evolution": {
            "prev": [
                "10",
                "Level 7"
            ],
            "next": [
                [
                    "12",
                    "Level 10"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/011.png",
            "thumbnail": "./thumbnails/011.png",
            "hires": "./hires/011.png"
        },
        "stats": {
            "hp": 50,
            "attack": 20,
            "defense": 55,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 30
        }
    },
    {
        "id": 12,
        "name": "Butterfree",
        "type": [
            "Bug",
            "Flying"
        ],
        "evolution": {
            "prev": [
                "11",
                "Level 10"
            ]
        },
        "image": {
            "sprite": "./sprites/012.png",
            "thumbnail": "./thumbnails/012.png",
            "hires": "./hires/012.png"
        },
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 50,
            "specialAttack": 90,
            "specialDefense": 80,
            "speed": 70
        }
    },
    {
        "id": 13,
        "name": "Weedle",
        "type": [
            "Bug",
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "14",
                    "Level 7"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/013.png",
            "thumbnail": "./thumbnails/013.png",
            "hires": "./hires/013.png"
        },
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "specialAttack": 20,
            "specialDefense": 20,
            "speed": 50
        }
    },
    {
        "id": 14,
        "name": "Kakuna",
        "type": [
            "Bug",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "13",
                "Level 7"
            ],
            "next": [
                [
                    "15",
                    "Level 10"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/014.png",
            "thumbnail": "./thumbnails/014.png",
            "hires": "./hires/014.png"
        },
        "stats": {
            "hp": 45,
            "attack": 25,
            "defense": 50,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 35
        }
    },
    {
        "id": 15,
        "name": "Beedrill",
        "type": [
            "Bug",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "14",
                "Level 10"
            ]
        },
        "image": {
            "sprite": "./sprites/015.png",
            "thumbnail": "./thumbnails/015.png",
            "hires": "./hires/015.png"
        },
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 40,
            "specialAttack": 45,
            "specialDefense": 80,
            "speed": 75
        }
    },
    {
        "id": 16,
        "name": "Pidgey",
        "type": [
            "Normal",
            "Flying"
        ],
        "evolution": {
            "next": [
                [
                    "17",
                    "Level 18"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/016.png",
            "thumbnail": "./thumbnails/016.png",
            "hires": "./hires/016.png"
        },
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 56
        }
    },
    {
        "id": 17,
        "name": "Pidgeotto",
        "type": [
            "Normal",
            "Flying"
        ],
        "evolution": {
            "prev": [
                "16",
                "Level 18"
            ],
            "next": [
                [
                    "18",
                    "Level 36"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/017.png",
            "thumbnail": "./thumbnails/017.png",
            "hires": "./hires/017.png"
        },
        "stats": {
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 71
        }
    },
    {
        "id": 18,
        "name": "Pidgeot",
        "type": [
            "Normal",
            "Flying"
        ],
        "evolution": {
            "prev": [
                "17",
                "Level 36"
            ]
        },
        "image": {
            "sprite": "./sprites/018.png",
            "thumbnail": "./thumbnails/018.png",
            "hires": "./hires/018.png"
        },
        "stats": {
            "hp": 83,
            "attack": 80,
            "defense": 75,
            "specialAttack": 70,
            "specialDefense": 70,
            "speed": 101
        }
    },
    {
        "id": 19,
        "name": "Rattata",
        "type": [
            "Normal"
        ],
        "evolution": {
            "next": [
                [
                    "20",
                    "Level 20"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/019.png",
            "thumbnail": "./thumbnails/019.png",
            "hires": "./hires/019.png"
        },
        "stats": {
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "specialAttack": 25,
            "specialDefense": 35,
            "speed": 72
        }
    },
    {
        "id": 20,
        "name": "Raticate",
        "type": [
            "Normal"
        ],
        "evolution": {
            "prev": [
                "19",
                "Level 20"
            ]
        },
        "image": {
            "sprite": "./sprites/020.png",
            "thumbnail": "./thumbnails/020.png",
            "hires": "./hires/020.png"
        },
        "stats": {
            "hp": 55,
            "attack": 81,
            "defense": 60,
            "specialAttack": 50,
            "specialDefense": 70,
            "speed": 97
        }
    },
    {
        "id": 21,
        "name": "Spearow",
        "type": [
            "Normal",
            "Flying"
        ],
        "evolution": {
            "next": [
                [
                    "22",
                    "Level 20"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/021.png",
            "thumbnail": "./thumbnails/021.png",
            "hires": "./hires/021.png"
        },
        "stats": {
            "hp": 40,
            "attack": 60,
            "defense": 30,
            "specialAttack": 31,
            "specialDefense": 31,
            "speed": 70
        }
    },
    {
        "id": 22,
        "name": "Fearow",
        "type": [
            "Normal",
            "Flying"
        ],
        "evolution": {
            "prev": [
                "21",
                "Level 20"
            ]
        },
        "image": {
            "sprite": "./sprites/022.png",
            "thumbnail": "./thumbnails/022.png",
            "hires": "./hires/022.png"
        },
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 65,
            "specialAttack": 61,
            "specialDefense": 61,
            "speed": 100
        }
    },
    {
        "id": 23,
        "name": "Ekans",
        "type": [
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "24",
                    "Level 22"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/023.png",
            "thumbnail": "./thumbnails/023.png",
            "hires": "./hires/023.png"
        },
        "stats": {
            "hp": 35,
            "attack": 60,
            "defense": 44,
            "specialAttack": 40,
            "specialDefense": 54,
            "speed": 55
        }
    },
    {
        "id": 24,
        "name": "Arbok",
        "type": [
            "Poison"
        ],
        "evolution": {
            "prev": [
                "23",
                "Level 22"
            ]
        },
        "image": {
            "sprite": "./sprites/024.png",
            "thumbnail": "./thumbnails/024.png",
            "hires": "./hires/024.png"
        },
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 69,
            "specialAttack": 65,
            "specialDefense": 79,
            "speed": 80
        }
    },
    {
        "id": 25,
        "name": "Pikachu",
        "type": [
            "Electric"
        ],
        "evolution": {
            "prev": [
                "172",
                "high Friendship"
            ],
            "next": [
                [
                    "26",
                    "use Thunder Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/025.png",
            "thumbnail": "./thumbnails/025.png",
            "hires": "./hires/025.png"
        },
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 90
        }
    },
    {
        "id": 26,
        "name": "Raichu",
        "type": [
            "Electric"
        ],
        "evolution": {
            "prev": [
                "25",
                "use Thunder Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/026.png",
            "thumbnail": "./thumbnails/026.png",
            "hires": "./hires/026.png"
        },
        "stats": {
            "hp": 60,
            "attack": 90,
            "defense": 55,
            "specialAttack": 90,
            "specialDefense": 80,
            "speed": 110
        }
    },
    {
        "id": 27,
        "name": "Sandshrew",
        "type": [
            "Ground"
        ],
        "evolution": {
            "next": [
                [
                    "28",
                    "Level 22"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/027.png",
            "thumbnail": "./thumbnails/027.png",
            "hires": "./hires/027.png"
        },
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 85,
            "specialAttack": 20,
            "specialDefense": 30,
            "speed": 40
        }
    },
    {
        "id": 28,
        "name": "Sandslash",
        "type": [
            "Ground"
        ],
        "evolution": {
            "prev": [
                "27",
                "Level 22"
            ]
        },
        "image": {
            "sprite": "./sprites/028.png",
            "thumbnail": "./thumbnails/028.png",
            "hires": "./hires/028.png"
        },
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 110,
            "specialAttack": 45,
            "specialDefense": 55,
            "speed": 65
        }
    },
    {
        "id": 29,
        "name": "Nidoran♀",
        "type": [
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "30",
                    "Level 16"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/029.png",
            "thumbnail": "./thumbnails/029.png",
            "hires": "./hires/029.png"
        },
        "stats": {
            "hp": 55,
            "attack": 47,
            "defense": 52,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 41
        }
    },
    {
        "id": 30,
        "name": "Nidorina",
        "type": [
            "Poison"
        ],
        "evolution": {
            "prev": [
                "29",
                "Level 16"
            ],
            "next": [
                [
                    "31",
                    "use Moon Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/030.png",
            "thumbnail": "./thumbnails/030.png",
            "hires": "./hires/030.png"
        },
        "stats": {
            "hp": 70,
            "attack": 62,
            "defense": 67,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 56
        }
    },
    {
        "id": 31,
        "name": "Nidoqueen",
        "type": [
            "Poison",
            "Ground"
        ],
        "evolution": {
            "prev": [
                "30",
                "use Moon Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/031.png",
            "thumbnail": "./thumbnails/031.png",
            "hires": "./hires/031.png"
        },
        "stats": {
            "hp": 90,
            "attack": 92,
            "defense": 87,
            "specialAttack": 75,
            "specialDefense": 85,
            "speed": 76
        }
    },
    {
        "id": 32,
        "name": "Nidoran♂",
        "type": [
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "33",
                    "Level 16"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/032.png",
            "thumbnail": "./thumbnails/032.png",
            "hires": "./hires/032.png"
        },
        "stats": {
            "hp": 46,
            "attack": 57,
            "defense": 40,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 50
        }
    },
    {
        "id": 33,
        "name": "Nidorino",
        "type": [
            "Poison"
        ],
        "evolution": {
            "prev": [
                "32",
                "Level 16"
            ],
            "next": [
                [
                    "34",
                    "use Moon Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/033.png",
            "thumbnail": "./thumbnails/033.png",
            "hires": "./hires/033.png"
        },
        "stats": {
            "hp": 61,
            "attack": 72,
            "defense": 57,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 65
        }
    },
    {
        "id": 34,
        "name": "Nidoking",
        "type": [
            "Poison",
            "Ground"
        ],
        "evolution": {
            "prev": [
                "33",
                "use Moon Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/034.png",
            "thumbnail": "./thumbnails/034.png",
            "hires": "./hires/034.png"
        },
        "stats": {
            "hp": 81,
            "attack": 102,
            "defense": 77,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 85
        }
    },
    {
        "id": 35,
        "name": "Clefairy",
        "type": [
            "Fairy"
        ],
        "evolution": {
            "prev": [
                "173",
                "high Friendship"
            ],
            "next": [
                [
                    "36",
                    "use Moon Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/035.png",
            "thumbnail": "./thumbnails/035.png",
            "hires": "./hires/035.png"
        },
        "stats": {
            "hp": 70,
            "attack": 45,
            "defense": 48,
            "specialAttack": 60,
            "specialDefense": 65,
            "speed": 35
        }
    },
    {
        "id": 36,
        "name": "Clefable",
        "type": [
            "Fairy"
        ],
        "evolution": {
            "prev": [
                "35",
                "use Moon Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/036.png",
            "thumbnail": "./thumbnails/036.png",
            "hires": "./hires/036.png"
        },
        "stats": {
            "hp": 95,
            "attack": 70,
            "defense": 73,
            "specialAttack": 95,
            "specialDefense": 90,
            "speed": 60
        }
    },
    {
        "id": 37,
        "name": "Vulpix",
        "type": [
            "Fire"
        ],
        "evolution": {
            "next": [
                [
                    "38",
                    "use Fire Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/037.png",
            "thumbnail": "./thumbnails/037.png",
            "hires": "./hires/037.png"
        },
        "stats": {
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 65,
            "speed": 65
        }
    },
    {
        "id": 38,
        "name": "Ninetales",
        "type": [
            "Fire"
        ],
        "evolution": {
            "prev": [
                "37",
                "use Fire Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/038.png",
            "thumbnail": "./thumbnails/038.png",
            "hires": "./hires/038.png"
        },
        "stats": {
            "hp": 73,
            "attack": 76,
            "defense": 75,
            "specialAttack": 81,
            "specialDefense": 100,
            "speed": 100
        }
    },
    {
        "id": 39,
        "name": "Jigglypuff",
        "type": [
            "Normal",
            "Fairy"
        ],
        "evolution": {
            "prev": [
                "174",
                "high Friendship"
            ],
            "next": [
                [
                    "40",
                    "use Moon Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/039.png",
            "thumbnail": "./thumbnails/039.png",
            "hires": "./hires/039.png"
        },
        "stats": {
            "hp": 115,
            "attack": 45,
            "defense": 20,
            "specialAttack": 45,
            "specialDefense": 25,
            "speed": 20
        }
    },
    {
        "id": 40,
        "name": "Wigglytuff",
        "type": [
            "Normal",
            "Fairy"
        ],
        "evolution": {
            "prev": [
                "39",
                "use Moon Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/040.png",
            "thumbnail": "./thumbnails/040.png",
            "hires": "./hires/040.png"
        },
        "stats": {
            "hp": 140,
            "attack": 70,
            "defense": 45,
            "specialAttack": 85,
            "specialDefense": 50,
            "speed": 45
        }
    },
    {
        "id": 41,
        "name": "Zubat",
        "type": [
            "Poison",
            "Flying"
        ],
        "evolution": {
            "next": [
                [
                    "42",
                    "Level 22"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/041.png",
            "thumbnail": "./thumbnails/041.png",
            "hires": "./hires/041.png"
        },
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "specialAttack": 30,
            "specialDefense": 40,
            "speed": 55
        }
    },
    {
        "id": 42,
        "name": "Golbat",
        "type": [
            "Poison",
            "Flying"
        ],
        "evolution": {
            "prev": [
                "41",
                "Level 22"
            ],
            "next": [
                [
                    "169",
                    "high Friendship"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/042.png",
            "thumbnail": "./thumbnails/042.png",
            "hires": "./hires/042.png"
        },
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 70,
            "specialAttack": 65,
            "specialDefense": 75,
            "speed": 90
        }
    },
    {
        "id": 43,
        "name": "Oddish",
        "type": [
            "Grass",
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "44",
                    "Level 21"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/043.png",
            "thumbnail": "./thumbnails/043.png",
            "hires": "./hires/043.png"
        },
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 55,
            "specialAttack": 75,
            "specialDefense": 65,
            "speed": 30
        }
    },
    {
        "id": 44,
        "name": "Gloom",
        "type": [
            "Grass",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "43",
                "Level 21"
            ],
            "next": [
                [
                    "45",
                    "use Leaf Stone"
                ],
                [
                    "182",
                    "use Sun Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/044.png",
            "thumbnail": "./thumbnails/044.png",
            "hires": "./hires/044.png"
        },
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 70,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 40
        }
    },
    {
        "id": 45,
        "name": "Vileplume",
        "type": [
            "Grass",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "44",
                "use Leaf Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/045.png",
            "thumbnail": "./thumbnails/045.png",
            "hires": "./hires/045.png"
        },
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 85,
            "specialAttack": 110,
            "specialDefense": 90,
            "speed": 50
        }
    },
    {
        "id": 46,
        "name": "Paras",
        "type": [
            "Bug",
            "Grass"
        ],
        "evolution": {
            "next": [
                [
                    "47",
                    "Level 24"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/046.png",
            "thumbnail": "./thumbnails/046.png",
            "hires": "./hires/046.png"
        },
        "stats": {
            "hp": 35,
            "attack": 70,
            "defense": 55,
            "specialAttack": 45,
            "specialDefense": 55,
            "speed": 25
        }
    },
    {
        "id": 47,
        "name": "Parasect",
        "type": [
            "Bug",
            "Grass"
        ],
        "evolution": {
            "prev": [
                "46",
                "Level 24"
            ]
        },
        "image": {
            "sprite": "./sprites/047.png",
            "thumbnail": "./thumbnails/047.png",
            "hires": "./hires/047.png"
        },
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 80,
            "specialAttack": 60,
            "specialDefense": 80,
            "speed": 30
        }
    },
    {
        "id": 48,
        "name": "Venonat",
        "type": [
            "Bug",
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "49",
                    "Level 31"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/048.png",
            "thumbnail": "./thumbnails/048.png",
            "hires": "./hires/048.png"
        },
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 55,
            "speed": 45
        }
    },
    {
        "id": 49,
        "name": "Venomoth",
        "type": [
            "Bug",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "48",
                "Level 31"
            ]
        },
        "image": {
            "sprite": "./sprites/049.png",
            "thumbnail": "./thumbnails/049.png",
            "hires": "./hires/049.png"
        },
        "stats": {
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "specialAttack": 90,
            "specialDefense": 75,
            "speed": 90
        }
    },
    {
        "id": 50,
        "name": "Diglett",
        "type": [
            "Ground"
        ],
        "evolution": {
            "next": [
                [
                    "51",
                    "Level 26"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/050.png",
            "thumbnail": "./thumbnails/050.png",
            "hires": "./hires/050.png"
        },
        "stats": {
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "specialAttack": 35,
            "specialDefense": 45,
            "speed": 95
        }
    },
    {
        "id": 51,
        "name": "Dugtrio",
        "type": [
            "Ground"
        ],
        "evolution": {
            "prev": [
                "50",
                "Level 26"
            ]
        },
        "image": {
            "sprite": "./sprites/051.png",
            "thumbnail": "./thumbnails/051.png",
            "hires": "./hires/051.png"
        },
        "stats": {
            "hp": 35,
            "attack": 100,
            "defense": 50,
            "specialAttack": 50,
            "specialDefense": 70,
            "speed": 120
        }
    },
    {
        "id": 52,
        "name": "Meowth",
        "type": [
            "Normal"
        ],
        "evolution": {
            "next": [
                [
                    "53",
                    "Level 28"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/052.png",
            "thumbnail": "./thumbnails/052.png",
            "hires": "./hires/052.png"
        },
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 90
        }
    },
    {
        "id": 53,
        "name": "Persian",
        "type": [
            "Normal"
        ],
        "evolution": {
            "prev": [
                "52",
                "Level 28"
            ]
        },
        "image": {
            "sprite": "./sprites/053.png",
            "thumbnail": "./thumbnails/053.png",
            "hires": "./hires/053.png"
        },
        "stats": {
            "hp": 65,
            "attack": 70,
            "defense": 60,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 115
        }
    },
    {
        "id": 54,
        "name": "Psyduck",
        "type": [
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "55",
                    "Level 33"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/054.png",
            "thumbnail": "./thumbnails/054.png",
            "hires": "./hires/054.png"
        },
        "stats": {
            "hp": 50,
            "attack": 52,
            "defense": 48,
            "specialAttack": 65,
            "specialDefense": 50,
            "speed": 55
        }
    },
    {
        "id": 55,
        "name": "Golduck",
        "type": [
            "Water"
        ],
        "evolution": {
            "prev": [
                "54",
                "Level 33"
            ]
        },
        "image": {
            "sprite": "./sprites/055.png",
            "thumbnail": "./thumbnails/055.png",
            "hires": "./hires/055.png"
        },
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 78,
            "specialAttack": 95,
            "specialDefense": 80,
            "speed": 85
        }
    },
    {
        "id": 56,
        "name": "Mankey",
        "type": [
            "Fighting"
        ],
        "evolution": {
            "next": [
                [
                    "57",
                    "Level 28"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/056.png",
            "thumbnail": "./thumbnails/056.png",
            "hires": "./hires/056.png"
        },
        "stats": {
            "hp": 40,
            "attack": 80,
            "defense": 35,
            "specialAttack": 35,
            "specialDefense": 45,
            "speed": 70
        }
    },
    {
        "id": 57,
        "name": "Primeape",
        "type": [
            "Fighting"
        ],
        "evolution": {
            "prev": [
                "56",
                "Level 28"
            ]
        },
        "image": {
            "sprite": "./sprites/057.png",
            "thumbnail": "./thumbnails/057.png",
            "hires": "./hires/057.png"
        },
        "stats": {
            "hp": 65,
            "attack": 105,
            "defense": 60,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 95
        }
    },
    {
        "id": 58,
        "name": "Growlithe",
        "type": [
            "Fire"
        ],
        "evolution": {
            "next": [
                [
                    "59",
                    "use Fire Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/058.png",
            "thumbnail": "./thumbnails/058.png",
            "hires": "./hires/058.png"
        },
        "stats": {
            "hp": 55,
            "attack": 70,
            "defense": 45,
            "specialAttack": 70,
            "specialDefense": 50,
            "speed": 60
        }
    },
    {
        "id": 59,
        "name": "Arcanine",
        "type": [
            "Fire"
        ],
        "evolution": {
            "prev": [
                "58",
                "use Fire Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/059.png",
            "thumbnail": "./thumbnails/059.png",
            "hires": "./hires/059.png"
        },
        "stats": {
            "hp": 90,
            "attack": 110,
            "defense": 80,
            "specialAttack": 100,
            "specialDefense": 80,
            "speed": 95
        }
    },
    {
        "id": 60,
        "name": "Poliwag",
        "type": [
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "61",
                    "Level 25"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/060.png",
            "thumbnail": "./thumbnails/060.png",
            "hires": "./hires/060.png"
        },
        "stats": {
            "hp": 40,
            "attack": 50,
            "defense": 40,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 90
        }
    },
    {
        "id": 61,
        "name": "Poliwhirl",
        "type": [
            "Water"
        ],
        "evolution": {
            "prev": [
                "60",
                "Level 25"
            ],
            "next": [
                [
                    "62",
                    "use Water Stone"
                ],
                [
                    "186",
                    "trade holding Kings Rock"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/061.png",
            "thumbnail": "./thumbnails/061.png",
            "hires": "./hires/061.png"
        },
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 65,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 90
        }
    },
    {
        "id": 62,
        "name": "Poliwrath",
        "type": [
            "Water",
            "Fighting"
        ],
        "evolution": {
            "prev": [
                "61",
                "use Water Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/062.png",
            "thumbnail": "./thumbnails/062.png",
            "hires": "./hires/062.png"
        },
        "stats": {
            "hp": 90,
            "attack": 95,
            "defense": 95,
            "specialAttack": 70,
            "specialDefense": 90,
            "speed": 70
        }
    },
    {
        "id": 63,
        "name": "Abra",
        "type": [
            "Psychic"
        ],
        "evolution": {
            "next": [
                [
                    "64",
                    "Level 16"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/063.png",
            "thumbnail": "./thumbnails/063.png",
            "hires": "./hires/063.png"
        },
        "stats": {
            "hp": 25,
            "attack": 20,
            "defense": 15,
            "specialAttack": 105,
            "specialDefense": 55,
            "speed": 90
        }
    },
    {
        "id": 64,
        "name": "Kadabra",
        "type": [
            "Psychic"
        ],
        "evolution": {
            "prev": [
                "63",
                "Level 16"
            ],
            "next": [
                [
                    "65",
                    "Trade"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/064.png",
            "thumbnail": "./thumbnails/064.png",
            "hires": "./hires/064.png"
        },
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "specialAttack": 120,
            "specialDefense": 70,
            "speed": 105
        }
    },
    {
        "id": 65,
        "name": "Alakazam",
        "type": [
            "Psychic"
        ],
        "evolution": {
            "prev": [
                "64",
                "Trade"
            ]
        },
        "image": {
            "sprite": "./sprites/065.png",
            "thumbnail": "./thumbnails/065.png",
            "hires": "./hires/065.png"
        },
        "stats": {
            "hp": 55,
            "attack": 50,
            "defense": 45,
            "specialAttack": 135,
            "specialDefense": 95,
            "speed": 120
        }
    },
    {
        "id": 66,
        "name": "Machop",
        "type": [
            "Fighting"
        ],
        "evolution": {
            "next": [
                [
                    "67",
                    "Level 28"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/066.png",
            "thumbnail": "./thumbnails/066.png",
            "hires": "./hires/066.png"
        },
        "stats": {
            "hp": 70,
            "attack": 80,
            "defense": 50,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 35
        }
    },
    {
        "id": 67,
        "name": "Machoke",
        "type": [
            "Fighting"
        ],
        "evolution": {
            "prev": [
                "66",
                "Level 28"
            ],
            "next": [
                [
                    "68",
                    "Trade"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/067.png",
            "thumbnail": "./thumbnails/067.png",
            "hires": "./hires/067.png"
        },
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "specialAttack": 50,
            "specialDefense": 60,
            "speed": 45
        }
    },
    {
        "id": 68,
        "name": "Machamp",
        "type": [
            "Fighting"
        ],
        "evolution": {
            "prev": [
                "67",
                "Trade"
            ]
        },
        "image": {
            "sprite": "./sprites/068.png",
            "thumbnail": "./thumbnails/068.png",
            "hires": "./hires/068.png"
        },
        "stats": {
            "hp": 90,
            "attack": 130,
            "defense": 80,
            "specialAttack": 65,
            "specialDefense": 85,
            "speed": 55
        }
    },
    {
        "id": 69,
        "name": "Bellsprout",
        "type": [
            "Grass",
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "70",
                    "Level 21"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/069.png",
            "thumbnail": "./thumbnails/069.png",
            "hires": "./hires/069.png"
        },
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 35,
            "specialAttack": 70,
            "specialDefense": 30,
            "speed": 40
        }
    },
    {
        "id": 70,
        "name": "Weepinbell",
        "type": [
            "Grass",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "69",
                "Level 21"
            ],
            "next": [
                [
                    "71",
                    "use Leaf Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/070.png",
            "thumbnail": "./thumbnails/070.png",
            "hires": "./hires/070.png"
        },
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 50,
            "specialAttack": 85,
            "specialDefense": 45,
            "speed": 55
        }
    },
    {
        "id": 71,
        "name": "Victreebel",
        "type": [
            "Grass",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "70",
                "use Leaf Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/071.png",
            "thumbnail": "./thumbnails/071.png",
            "hires": "./hires/071.png"
        },
        "stats": {
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "specialAttack": 100,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 72,
        "name": "Tentacool",
        "type": [
            "Water",
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "73",
                    "Level 30"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/072.png",
            "thumbnail": "./thumbnails/072.png",
            "hires": "./hires/072.png"
        },
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "specialAttack": 50,
            "specialDefense": 100,
            "speed": 70
        }
    },
    {
        "id": 73,
        "name": "Tentacruel",
        "type": [
            "Water",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "72",
                "Level 30"
            ]
        },
        "image": {
            "sprite": "./sprites/073.png",
            "thumbnail": "./thumbnails/073.png",
            "hires": "./hires/073.png"
        },
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 65,
            "specialAttack": 80,
            "specialDefense": 120,
            "speed": 100
        }
    },
    {
        "id": 74,
        "name": "Geodude",
        "type": [
            "Rock",
            "Ground"
        ],
        "evolution": {
            "next": [
                [
                    "75",
                    "Level 25"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/074.png",
            "thumbnail": "./thumbnails/074.png",
            "hires": "./hires/074.png"
        },
        "stats": {
            "hp": 40,
            "attack": 80,
            "defense": 100,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 20
        }
    },
    {
        "id": 75,
        "name": "Graveler",
        "type": [
            "Rock",
            "Ground"
        ],
        "evolution": {
            "prev": [
                "74",
                "Level 25"
            ],
            "next": [
                [
                    "76",
                    "Trade"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/075.png",
            "thumbnail": "./thumbnails/075.png",
            "hires": "./hires/075.png"
        },
        "stats": {
            "hp": 55,
            "attack": 95,
            "defense": 115,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 35
        }
    },
    {
        "id": 76,
        "name": "Golem",
        "type": [
            "Rock",
            "Ground"
        ],
        "evolution": {
            "prev": [
                "75",
                "Trade"
            ]
        },
        "image": {
            "sprite": "./sprites/076.png",
            "thumbnail": "./thumbnails/076.png",
            "hires": "./hires/076.png"
        },
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 130,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 45
        }
    },
    {
        "id": 77,
        "name": "Ponyta",
        "type": [
            "Fire"
        ],
        "evolution": {
            "next": [
                [
                    "78",
                    "Level 40"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/077.png",
            "thumbnail": "./thumbnails/077.png",
            "hires": "./hires/077.png"
        },
        "stats": {
            "hp": 50,
            "attack": 85,
            "defense": 55,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 90
        }
    },
    {
        "id": 78,
        "name": "Rapidash",
        "type": [
            "Fire"
        ],
        "evolution": {
            "prev": [
                "77",
                "Level 40"
            ]
        },
        "image": {
            "sprite": "./sprites/078.png",
            "thumbnail": "./thumbnails/078.png",
            "hires": "./hires/078.png"
        },
        "stats": {
            "hp": 65,
            "attack": 100,
            "defense": 70,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 105
        }
    },
    {
        "id": 79,
        "name": "Slowpoke",
        "type": [
            "Water",
            "Psychic"
        ],
        "evolution": {
            "next": [
                [
                    "80",
                    "Level 37"
                ],
                [
                    "199",
                    "trade holding Kings Rock"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/079.png",
            "thumbnail": "./thumbnails/079.png",
            "hires": "./hires/079.png"
        },
        "stats": {
            "hp": 90,
            "attack": 65,
            "defense": 65,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 15
        }
    },
    {
        "id": 80,
        "name": "Slowbro",
        "type": [
            "Water",
            "Psychic"
        ],
        "evolution": {
            "prev": [
                "79",
                "Level 37"
            ]
        },
        "image": {
            "sprite": "./sprites/080.png",
            "thumbnail": "./thumbnails/080.png",
            "hires": "./hires/080.png"
        },
        "stats": {
            "hp": 95,
            "attack": 75,
            "defense": 110,
            "specialAttack": 100,
            "specialDefense": 80,
            "speed": 30
        }
    },
    {
        "id": 81,
        "name": "Magnemite",
        "type": [
            "Electric",
            "Steel"
        ],
        "evolution": {
            "next": [
                [
                    "82",
                    "Level 30"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/081.png",
            "thumbnail": "./thumbnails/081.png",
            "hires": "./hires/081.png"
        },
        "stats": {
            "hp": 25,
            "attack": 35,
            "defense": 70,
            "specialAttack": 95,
            "specialDefense": 55,
            "speed": 45
        }
    },
    {
        "id": 82,
        "name": "Magneton",
        "type": [
            "Electric",
            "Steel"
        ],
        "evolution": {
            "prev": [
                "81",
                "Level 30"
            ],
            "next": [
                [
                    "462",
                    "level up in a Magnetic Field area"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/082.png",
            "thumbnail": "./thumbnails/082.png",
            "hires": "./hires/082.png"
        },
        "stats": {
            "hp": 50,
            "attack": 60,
            "defense": 95,
            "specialAttack": 120,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 83,
        "name": "Farfetch'd",
        "type": [
            "Normal",
            "Flying"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/083.png",
            "thumbnail": "./thumbnails/083.png",
            "hires": "./hires/083.png"
        },
        "stats": {
            "hp": 52,
            "attack": 90,
            "defense": 55,
            "specialAttack": 58,
            "specialDefense": 62,
            "speed": 60
        }
    },
    {
        "id": 84,
        "name": "Doduo",
        "type": [
            "Normal",
            "Flying"
        ],
        "evolution": {
            "next": [
                [
                    "85",
                    "Level 31"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/084.png",
            "thumbnail": "./thumbnails/084.png",
            "hires": "./hires/084.png"
        },
        "stats": {
            "hp": 35,
            "attack": 85,
            "defense": 45,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 75
        }
    },
    {
        "id": 85,
        "name": "Dodrio",
        "type": [
            "Normal",
            "Flying"
        ],
        "evolution": {
            "prev": [
                "84",
                "Level 31"
            ]
        },
        "image": {
            "sprite": "./sprites/085.png",
            "thumbnail": "./thumbnails/085.png",
            "hires": "./hires/085.png"
        },
        "stats": {
            "hp": 60,
            "attack": 110,
            "defense": 70,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 110
        }
    },
    {
        "id": 86,
        "name": "Seel",
        "type": [
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "87",
                    "Level 34"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/086.png",
            "thumbnail": "./thumbnails/086.png",
            "hires": "./hires/086.png"
        },
        "stats": {
            "hp": 65,
            "attack": 45,
            "defense": 55,
            "specialAttack": 45,
            "specialDefense": 70,
            "speed": 45
        }
    },
    {
        "id": 87,
        "name": "Dewgong",
        "type": [
            "Water",
            "Ice"
        ],
        "evolution": {
            "prev": [
                "86",
                "Level 34"
            ]
        },
        "image": {
            "sprite": "./sprites/087.png",
            "thumbnail": "./thumbnails/087.png",
            "hires": "./hires/087.png"
        },
        "stats": {
            "hp": 90,
            "attack": 70,
            "defense": 80,
            "specialAttack": 70,
            "specialDefense": 95,
            "speed": 70
        }
    },
    {
        "id": 88,
        "name": "Grimer",
        "type": [
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "89",
                    "Level 38"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/088.png",
            "thumbnail": "./thumbnails/088.png",
            "hires": "./hires/088.png"
        },
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 25
        }
    },
    {
        "id": 89,
        "name": "Muk",
        "type": [
            "Poison"
        ],
        "evolution": {
            "prev": [
                "88",
                "Level 38"
            ]
        },
        "image": {
            "sprite": "./sprites/089.png",
            "thumbnail": "./thumbnails/089.png",
            "hires": "./hires/089.png"
        },
        "stats": {
            "hp": 105,
            "attack": 105,
            "defense": 75,
            "specialAttack": 65,
            "specialDefense": 100,
            "speed": 50
        }
    },
    {
        "id": 90,
        "name": "Shellder",
        "type": [
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "91",
                    "use Water Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/090.png",
            "thumbnail": "./thumbnails/090.png",
            "hires": "./hires/090.png"
        },
        "stats": {
            "hp": 30,
            "attack": 65,
            "defense": 100,
            "specialAttack": 45,
            "specialDefense": 25,
            "speed": 40
        }
    },
    {
        "id": 91,
        "name": "Cloyster",
        "type": [
            "Water",
            "Ice"
        ],
        "evolution": {
            "prev": [
                "90",
                "use Water Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/091.png",
            "thumbnail": "./thumbnails/091.png",
            "hires": "./hires/091.png"
        },
        "stats": {
            "hp": 50,
            "attack": 95,
            "defense": 180,
            "specialAttack": 85,
            "specialDefense": 45,
            "speed": 70
        }
    },
    {
        "id": 92,
        "name": "Gastly",
        "type": [
            "Ghost",
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "93",
                    "Level 25"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/092.png",
            "thumbnail": "./thumbnails/092.png",
            "hires": "./hires/092.png"
        },
        "stats": {
            "hp": 30,
            "attack": 35,
            "defense": 30,
            "specialAttack": 100,
            "specialDefense": 35,
            "speed": 80
        }
    },
    {
        "id": 93,
        "name": "Haunter",
        "type": [
            "Ghost",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "92",
                "Level 25"
            ],
            "next": [
                [
                    "94",
                    "Trade"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/093.png",
            "thumbnail": "./thumbnails/093.png",
            "hires": "./hires/093.png"
        },
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 45,
            "specialAttack": 115,
            "specialDefense": 55,
            "speed": 95
        }
    },
    {
        "id": 94,
        "name": "Gengar",
        "type": [
            "Ghost",
            "Poison"
        ],
        "evolution": {
            "prev": [
                "93",
                "Trade"
            ]
        },
        "image": {
            "sprite": "./sprites/094.png",
            "thumbnail": "./thumbnails/094.png",
            "hires": "./hires/094.png"
        },
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 60,
            "specialAttack": 130,
            "specialDefense": 75,
            "speed": 110
        }
    },
    {
        "id": 95,
        "name": "Onix",
        "type": [
            "Rock",
            "Ground"
        ],
        "evolution": {
            "next": [
                [
                    "208",
                    "trade holding Metal Coat"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/095.png",
            "thumbnail": "./thumbnails/095.png",
            "hires": "./hires/095.png"
        },
        "stats": {
            "hp": 35,
            "attack": 45,
            "defense": 160,
            "specialAttack": 30,
            "specialDefense": 45,
            "speed": 70
        }
    },
    {
        "id": 96,
        "name": "Drowzee",
        "type": [
            "Psychic"
        ],
        "evolution": {
            "next": [
                [
                    "97",
                    "Level 26"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/096.png",
            "thumbnail": "./thumbnails/096.png",
            "hires": "./hires/096.png"
        },
        "stats": {
            "hp": 60,
            "attack": 48,
            "defense": 45,
            "specialAttack": 43,
            "specialDefense": 90,
            "speed": 42
        }
    },
    {
        "id": 97,
        "name": "Hypno",
        "type": [
            "Psychic"
        ],
        "evolution": {
            "prev": [
                "96",
                "Level 26"
            ]
        },
        "image": {
            "sprite": "./sprites/097.png",
            "thumbnail": "./thumbnails/097.png",
            "hires": "./hires/097.png"
        },
        "stats": {
            "hp": 85,
            "attack": 73,
            "defense": 70,
            "specialAttack": 73,
            "specialDefense": 115,
            "speed": 67
        }
    },
    {
        "id": 98,
        "name": "Krabby",
        "type": [
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "99",
                    "Level 28"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/098.png",
            "thumbnail": "./thumbnails/098.png",
            "hires": "./hires/098.png"
        },
        "stats": {
            "hp": 30,
            "attack": 105,
            "defense": 90,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 50
        }
    },
    {
        "id": 99,
        "name": "Kingler",
        "type": [
            "Water"
        ],
        "evolution": {
            "prev": [
                "98",
                "Level 28"
            ]
        },
        "image": {
            "sprite": "./sprites/099.png",
            "thumbnail": "./thumbnails/099.png",
            "hires": "./hires/099.png"
        },
        "stats": {
            "hp": 55,
            "attack": 130,
            "defense": 115,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 75
        }
    },
    {
        "id": 100,
        "name": "Voltorb",
        "type": [
            "Electric"
        ],
        "evolution": {
            "next": [
                [
                    "101",
                    "Level 30"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/100.png",
            "thumbnail": "./thumbnails/100.png",
            "hires": "./hires/100.png"
        },
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 50,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 100
        }
    },
    {
        "id": 101,
        "name": "Electrode",
        "type": [
            "Electric"
        ],
        "evolution": {
            "prev": [
                "100",
                "Level 30"
            ]
        },
        "image": {
            "sprite": "./sprites/101.png",
            "thumbnail": "./thumbnails/101.png",
            "hires": "./hires/101.png"
        },
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 150
        }
    },
    {
        "id": 102,
        "name": "Exeggcute",
        "type": [
            "Grass",
            "Psychic"
        ],
        "evolution": {
            "next": [
                [
                    "103",
                    "use Leaf Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/102.png",
            "thumbnail": "./thumbnails/102.png",
            "hires": "./hires/102.png"
        },
        "stats": {
            "hp": 60,
            "attack": 40,
            "defense": 80,
            "specialAttack": 60,
            "specialDefense": 45,
            "speed": 40
        }
    },
    {
        "id": 103,
        "name": "Exeggutor",
        "type": [
            "Grass",
            "Psychic"
        ],
        "evolution": {
            "prev": [
                "102",
                "use Leaf Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/103.png",
            "thumbnail": "./thumbnails/103.png",
            "hires": "./hires/103.png"
        },
        "stats": {
            "hp": 95,
            "attack": 95,
            "defense": 85,
            "specialAttack": 125,
            "specialDefense": 75,
            "speed": 55
        }
    },
    {
        "id": 104,
        "name": "Cubone",
        "type": [
            "Ground"
        ],
        "evolution": {
            "next": [
                [
                    "105",
                    "Level 28"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/104.png",
            "thumbnail": "./thumbnails/104.png",
            "hires": "./hires/104.png"
        },
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 95,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 35
        }
    },
    {
        "id": 105,
        "name": "Marowak",
        "type": [
            "Ground"
        ],
        "evolution": {
            "prev": [
                "104",
                "Level 28"
            ]
        },
        "image": {
            "sprite": "./sprites/105.png",
            "thumbnail": "./thumbnails/105.png",
            "hires": "./hires/105.png"
        },
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 110,
            "specialAttack": 50,
            "specialDefense": 80,
            "speed": 45
        }
    },
    {
        "id": 106,
        "name": "Hitmonlee",
        "type": [
            "Fighting"
        ],
        "evolution": {
            "prev": [
                "236",
                "Level 20, Attack > Defense"
            ]
        },
        "image": {
            "sprite": "./sprites/106.png",
            "thumbnail": "./thumbnails/106.png",
            "hires": "./hires/106.png"
        },
        "stats": {
            "hp": 50,
            "attack": 120,
            "defense": 53,
            "specialAttack": 35,
            "specialDefense": 110,
            "speed": 87
        }
    },
    {
        "id": 107,
        "name": "Hitmonchan",
        "type": [
            "Fighting"
        ],
        "evolution": {
            "prev": [
                "236",
                "Level 20, Attack < Defense"
            ]
        },
        "image": {
            "sprite": "./sprites/107.png",
            "thumbnail": "./thumbnails/107.png",
            "hires": "./hires/107.png"
        },
        "stats": {
            "hp": 50,
            "attack": 105,
            "defense": 79,
            "specialAttack": 35,
            "specialDefense": 110,
            "speed": 76
        }
    },
    {
        "id": 108,
        "name": "Lickitung",
        "type": [
            "Normal"
        ],
        "evolution": {
            "next": [
                [
                    "463",
                    "after Rollout learned"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/108.png",
            "thumbnail": "./thumbnails/108.png",
            "hires": "./hires/108.png"
        },
        "stats": {
            "hp": 90,
            "attack": 55,
            "defense": 75,
            "specialAttack": 60,
            "specialDefense": 75,
            "speed": 30
        }
    },
    {
        "id": 109,
        "name": "Koffing",
        "type": [
            "Poison"
        ],
        "evolution": {
            "next": [
                [
                    "110",
                    "Level 35"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/109.png",
            "thumbnail": "./thumbnails/109.png",
            "hires": "./hires/109.png"
        },
        "stats": {
            "hp": 40,
            "attack": 65,
            "defense": 95,
            "specialAttack": 60,
            "specialDefense": 45,
            "speed": 35
        }
    },
    {
        "id": 110,
        "name": "Weezing",
        "type": [
            "Poison"
        ],
        "evolution": {
            "prev": [
                "109",
                "Level 35"
            ]
        },
        "image": {
            "sprite": "./sprites/110.png",
            "thumbnail": "./thumbnails/110.png",
            "hires": "./hires/110.png"
        },
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 120,
            "specialAttack": 85,
            "specialDefense": 70,
            "speed": 60
        }
    },
    {
        "id": 111,
        "name": "Rhyhorn",
        "type": [
            "Ground",
            "Rock"
        ],
        "evolution": {
            "next": [
                [
                    "112",
                    "Level 42"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/111.png",
            "thumbnail": "./thumbnails/111.png",
            "hires": "./hires/111.png"
        },
        "stats": {
            "hp": 80,
            "attack": 85,
            "defense": 95,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 25
        }
    },
    {
        "id": 112,
        "name": "Rhydon",
        "type": [
            "Ground",
            "Rock"
        ],
        "evolution": {
            "prev": [
                "111",
                "Level 42"
            ],
            "next": [
                [
                    "464",
                    "trade holding Protector"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/112.png",
            "thumbnail": "./thumbnails/112.png",
            "hires": "./hires/112.png"
        },
        "stats": {
            "hp": 105,
            "attack": 130,
            "defense": 120,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 40
        }
    },
    {
        "id": 113,
        "name": "Chansey",
        "type": [
            "Normal"
        ],
        "evolution": {
            "prev": [
                "440",
                "hold Oval Stone, Daytime"
            ],
            "next": [
                [
                    "242",
                    "high Friendship"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/113.png",
            "thumbnail": "./thumbnails/113.png",
            "hires": "./hires/113.png"
        },
        "stats": {
            "hp": 250,
            "attack": 5,
            "defense": 5,
            "specialAttack": 35,
            "specialDefense": 105,
            "speed": 50
        }
    },
    {
        "id": 114,
        "name": "Tangela",
        "type": [
            "Grass"
        ],
        "evolution": {
            "next": [
                [
                    "465",
                    "after Ancient Power learned"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/114.png",
            "thumbnail": "./thumbnails/114.png",
            "hires": "./hires/114.png"
        },
        "stats": {
            "hp": 65,
            "attack": 55,
            "defense": 115,
            "specialAttack": 100,
            "specialDefense": 40,
            "speed": 60
        }
    },
    {
        "id": 115,
        "name": "Kangaskhan",
        "type": [
            "Normal"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/115.png",
            "thumbnail": "./thumbnails/115.png",
            "hires": "./hires/115.png"
        },
        "stats": {
            "hp": 105,
            "attack": 95,
            "defense": 80,
            "specialAttack": 40,
            "specialDefense": 80,
            "speed": 90
        }
    },
    {
        "id": 116,
        "name": "Horsea",
        "type": [
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "117",
                    "Level 32"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/116.png",
            "thumbnail": "./thumbnails/116.png",
            "hires": "./hires/116.png"
        },
        "stats": {
            "hp": 30,
            "attack": 40,
            "defense": 70,
            "specialAttack": 70,
            "specialDefense": 25,
            "speed": 60
        }
    },
    {
        "id": 117,
        "name": "Seadra",
        "type": [
            "Water"
        ],
        "evolution": {
            "prev": [
                "116",
                "Level 32"
            ],
            "next": [
                [
                    "230",
                    "trade holding Dragon Scale"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/117.png",
            "thumbnail": "./thumbnails/117.png",
            "hires": "./hires/117.png"
        },
        "stats": {
            "hp": 55,
            "attack": 65,
            "defense": 95,
            "specialAttack": 95,
            "specialDefense": 45,
            "speed": 85
        }
    },
    {
        "id": 118,
        "name": "Goldeen",
        "type": [
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "119",
                    "Level 33"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/118.png",
            "thumbnail": "./thumbnails/118.png",
            "hires": "./hires/118.png"
        },
        "stats": {
            "hp": 45,
            "attack": 67,
            "defense": 60,
            "specialAttack": 35,
            "specialDefense": 50,
            "speed": 63
        }
    },
    {
        "id": 119,
        "name": "Seaking",
        "type": [
            "Water"
        ],
        "evolution": {
            "prev": [
                "118",
                "Level 33"
            ]
        },
        "image": {
            "sprite": "./sprites/119.png",
            "thumbnail": "./thumbnails/119.png",
            "hires": "./hires/119.png"
        },
        "stats": {
            "hp": 80,
            "attack": 92,
            "defense": 65,
            "specialAttack": 65,
            "specialDefense": 80,
            "speed": 68
        }
    },
    {
        "id": 120,
        "name": "Staryu",
        "type": [
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "121",
                    "use Water Stone"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/120.png",
            "thumbnail": "./thumbnails/120.png",
            "hires": "./hires/120.png"
        },
        "stats": {
            "hp": 30,
            "attack": 45,
            "defense": 55,
            "specialAttack": 70,
            "specialDefense": 55,
            "speed": 85
        }
    },
    {
        "id": 121,
        "name": "Starmie",
        "type": [
            "Water",
            "Psychic"
        ],
        "evolution": {
            "prev": [
                "120",
                "use Water Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/121.png",
            "thumbnail": "./thumbnails/121.png",
            "hires": "./hires/121.png"
        },
        "stats": {
            "hp": 60,
            "attack": 75,
            "defense": 85,
            "specialAttack": 100,
            "specialDefense": 85,
            "speed": 115
        }
    },
    {
        "id": 122,
        "name": "Mr. Mime",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "evolution": {
            "prev": [
                "439",
                "after Mimic learned"
            ]
        },
        "image": {
            "sprite": "./sprites/122.png",
            "thumbnail": "./thumbnails/122.png",
            "hires": "./hires/122.png"
        },
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 65,
            "specialAttack": 100,
            "specialDefense": 120,
            "speed": 90
        }
    },
    {
        "id": 123,
        "name": "Scyther",
        "type": [
            "Bug",
            "Flying"
        ],
        "evolution": {
            "next": [
                [
                    "212",
                    "trade holding Metal Coat"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/123.png",
            "thumbnail": "./thumbnails/123.png",
            "hires": "./hires/123.png"
        },
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "specialAttack": 55,
            "specialDefense": 80,
            "speed": 105
        }
    },
    {
        "id": 124,
        "name": "Jynx",
        "type": [
            "Ice",
            "Psychic"
        ],
        "evolution": {
            "prev": [
                "238",
                "Level 30"
            ]
        },
        "image": {
            "sprite": "./sprites/124.png",
            "thumbnail": "./thumbnails/124.png",
            "hires": "./hires/124.png"
        },
        "stats": {
            "hp": 65,
            "attack": 50,
            "defense": 35,
            "specialAttack": 115,
            "specialDefense": 95,
            "speed": 95
        }
    },
    {
        "id": 125,
        "name": "Electabuzz",
        "type": [
            "Electric"
        ],
        "evolution": {
            "prev": [
                "239",
                "Level 30"
            ],
            "next": [
                [
                    "466",
                    "trade holding Electirizer"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/125.png",
            "thumbnail": "./thumbnails/125.png",
            "hires": "./hires/125.png"
        },
        "stats": {
            "hp": 65,
            "attack": 83,
            "defense": 57,
            "specialAttack": 95,
            "specialDefense": 85,
            "speed": 105
        }
    },
    {
        "id": 126,
        "name": "Magmar",
        "type": [
            "Fire"
        ],
        "evolution": {
            "prev": [
                "240",
                "Level 30"
            ],
            "next": [
                [
                    "467",
                    "trade holding Magmarizer"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/126.png",
            "thumbnail": "./thumbnails/126.png",
            "hires": "./hires/126.png"
        },
        "stats": {
            "hp": 65,
            "attack": 95,
            "defense": 57,
            "specialAttack": 100,
            "specialDefense": 85,
            "speed": 93
        }
    },
    {
        "id": 127,
        "name": "Pinsir",
        "type": [
            "Bug"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/127.png",
            "thumbnail": "./thumbnails/127.png",
            "hires": "./hires/127.png"
        },
        "stats": {
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "specialAttack": 55,
            "specialDefense": 70,
            "speed": 85
        }
    },
    {
        "id": 128,
        "name": "Tauros",
        "type": [
            "Normal"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/128.png",
            "thumbnail": "./thumbnails/128.png",
            "hires": "./hires/128.png"
        },
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 95,
            "specialAttack": 40,
            "specialDefense": 70,
            "speed": 110
        }
    },
    {
        "id": 129,
        "name": "Magikarp",
        "type": [
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "130",
                    "Level 20"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/129.png",
            "thumbnail": "./thumbnails/129.png",
            "hires": "./hires/129.png"
        },
        "stats": {
            "hp": 20,
            "attack": 10,
            "defense": 55,
            "specialAttack": 15,
            "specialDefense": 20,
            "speed": 80
        }
    },
    {
        "id": 130,
        "name": "Gyarados",
        "type": [
            "Water",
            "Flying"
        ],
        "evolution": {
            "prev": [
                "129",
                "Level 20"
            ]
        },
        "image": {
            "sprite": "./sprites/130.png",
            "thumbnail": "./thumbnails/130.png",
            "hires": "./hires/130.png"
        },
        "stats": {
            "hp": 95,
            "attack": 125,
            "defense": 79,
            "specialAttack": 60,
            "specialDefense": 100,
            "speed": 81
        }
    },
    {
        "id": 131,
        "name": "Lapras",
        "type": [
            "Water",
            "Ice"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/131.png",
            "thumbnail": "./thumbnails/131.png",
            "hires": "./hires/131.png"
        },
        "stats": {
            "hp": 130,
            "attack": 85,
            "defense": 80,
            "specialAttack": 85,
            "specialDefense": 95,
            "speed": 60
        }
    },
    {
        "id": 132,
        "name": "Ditto",
        "type": [
            "Normal"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/132.png",
            "thumbnail": "./thumbnails/132.png",
            "hires": "./hires/132.png"
        },
        "stats": {
            "hp": 48,
            "attack": 48,
            "defense": 48,
            "specialAttack": 48,
            "specialDefense": 48,
            "speed": 48
        }
    },
    {
        "id": 133,
        "name": "Eevee",
        "type": [
            "Normal"
        ],
        "evolution": {
            "next": [
                [
                    "134",
                    "use Water Stone"
                ],
                [
                    "135",
                    "use Thunder Stone"
                ],
                [
                    "136",
                    "use Fire Stone"
                ],
                [
                    "196",
                    "high Friendship, Daytime"
                ],
                [
                    "197",
                    "high Friendship, Nighttime"
                ],
                [
                    "470",
                    "level up near a Mossy Rock"
                ],
                [
                    "471",
                    "level up near an Icy Rock"
                ],
                [
                    "700",
                    "High Affection and knowing Fairy move"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/133.png",
            "thumbnail": "./thumbnails/133.png",
            "hires": "./hires/133.png"
        },
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 50,
            "specialAttack": 45,
            "specialDefense": 65,
            "speed": 55
        }
    },
    {
        "id": 134,
        "name": "Vaporeon",
        "type": [
            "Water"
        ],
        "evolution": {
            "prev": [
                "133",
                "use Water Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/134.png",
            "thumbnail": "./thumbnails/134.png",
            "hires": "./hires/134.png"
        },
        "stats": {
            "hp": 130,
            "attack": 65,
            "defense": 60,
            "specialAttack": 110,
            "specialDefense": 95,
            "speed": 65
        }
    },
    {
        "id": 135,
        "name": "Jolteon",
        "type": [
            "Electric"
        ],
        "evolution": {
            "prev": [
                "133",
                "use Thunder Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/135.png",
            "thumbnail": "./thumbnails/135.png",
            "hires": "./hires/135.png"
        },
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "specialAttack": 110,
            "specialDefense": 95,
            "speed": 130
        }
    },
    {
        "id": 136,
        "name": "Flareon",
        "type": [
            "Fire"
        ],
        "evolution": {
            "prev": [
                "133",
                "use Fire Stone"
            ]
        },
        "image": {
            "sprite": "./sprites/136.png",
            "thumbnail": "./thumbnails/136.png",
            "hires": "./hires/136.png"
        },
        "stats": {
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "specialAttack": 95,
            "specialDefense": 110,
            "speed": 65
        }
    },
    {
        "id": 137,
        "name": "Porygon",
        "type": [
            "Normal"
        ],
        "evolution": {
            "next": [
                [
                    "233",
                    "trade holding Upgrade"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/137.png",
            "thumbnail": "./thumbnails/137.png",
            "hires": "./hires/137.png"
        },
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 70,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 40
        }
    },
    {
        "id": 138,
        "name": "Omanyte",
        "type": [
            "Rock",
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "139",
                    "Level 40"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/138.png",
            "thumbnail": "./thumbnails/138.png",
            "hires": "./hires/138.png"
        },
        "stats": {
            "hp": 35,
            "attack": 40,
            "defense": 100,
            "specialAttack": 90,
            "specialDefense": 55,
            "speed": 35
        }
    },
    {
        "id": 139,
        "name": "Omastar",
        "type": [
            "Rock",
            "Water"
        ],
        "evolution": {
            "prev": [
                "138",
                "Level 40"
            ]
        },
        "image": {
            "sprite": "./sprites/139.png",
            "thumbnail": "./thumbnails/139.png",
            "hires": "./hires/139.png"
        },
        "stats": {
            "hp": 70,
            "attack": 60,
            "defense": 125,
            "specialAttack": 115,
            "specialDefense": 70,
            "speed": 55
        }
    },
    {
        "id": 140,
        "name": "Kabuto",
        "type": [
            "Rock",
            "Water"
        ],
        "evolution": {
            "next": [
                [
                    "141",
                    "Level 40"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/140.png",
            "thumbnail": "./thumbnails/140.png",
            "hires": "./hires/140.png"
        },
        "stats": {
            "hp": 30,
            "attack": 80,
            "defense": 90,
            "specialAttack": 55,
            "specialDefense": 45,
            "speed": 55
        }
    },
    {
        "id": 141,
        "name": "Kabutops",
        "type": [
            "Rock",
            "Water"
        ],
        "evolution": {
            "prev": [
                "140",
                "Level 40"
            ]
        },
        "image": {
            "sprite": "./sprites/141.png",
            "thumbnail": "./thumbnails/141.png",
            "hires": "./hires/141.png"
        },
        "stats": {
            "hp": 60,
            "attack": 115,
            "defense": 105,
            "specialAttack": 65,
            "specialDefense": 70,
            "speed": 80
        }
    },
    {
        "id": 142,
        "name": "Aerodactyl",
        "type": [
            "Rock",
            "Flying"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/142.png",
            "thumbnail": "./thumbnails/142.png",
            "hires": "./hires/142.png"
        },
        "stats": {
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "specialAttack": 60,
            "specialDefense": 75,
            "speed": 130
        }
    },
    {
        "id": 143,
        "name": "Snorlax",
        "type": [
            "Normal"
        ],
        "evolution": {
            "prev": [
                "446",
                "high Friendship"
            ]
        },
        "image": {
            "sprite": "./sprites/143.png",
            "thumbnail": "./thumbnails/143.png",
            "hires": "./hires/143.png"
        },
        "stats": {
            "hp": 160,
            "attack": 110,
            "defense": 65,
            "specialAttack": 65,
            "specialDefense": 110,
            "speed": 30
        }
    },
    {
        "id": 144,
        "name": "Articuno",
        "type": [
            "Ice",
            "Flying"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/144.png",
            "thumbnail": "./thumbnails/144.png",
            "hires": "./hires/144.png"
        },
        "stats": {
            "hp": 90,
            "attack": 85,
            "defense": 100,
            "specialAttack": 95,
            "specialDefense": 125,
            "speed": 85
        }
    },
    {
        "id": 145,
        "name": "Zapdos",
        "type": [
            "Electric",
            "Flying"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/145.png",
            "thumbnail": "./thumbnails/145.png",
            "hires": "./hires/145.png"
        },
        "stats": {
            "hp": 90,
            "attack": 90,
            "defense": 85,
            "specialAttack": 125,
            "specialDefense": 90,
            "speed": 100
        }
    },
    {
        "id": 146,
        "name": "Moltres",
        "type": [
            "Fire",
            "Flying"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/146.png",
            "thumbnail": "./thumbnails/146.png",
            "hires": "./hires/146.png"
        },
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "specialAttack": 125,
            "specialDefense": 85,
            "speed": 90
        }
    },
    {
        "id": 147,
        "name": "Dratini",
        "type": [
            "Dragon"
        ],
        "evolution": {
            "next": [
                [
                    "148",
                    "Level 30"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/147.png",
            "thumbnail": "./thumbnails/147.png",
            "hires": "./hires/147.png"
        },
        "stats": {
            "hp": 41,
            "attack": 64,
            "defense": 45,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 50
        }
    },
    {
        "id": 148,
        "name": "Dragonair",
        "type": [
            "Dragon"
        ],
        "evolution": {
            "prev": [
                "147",
                "Level 30"
            ],
            "next": [
                [
                    "149",
                    "Level 55"
                ]
            ]
        },
        "image": {
            "sprite": "./sprites/148.png",
            "thumbnail": "./thumbnails/148.png",
            "hires": "./hires/148.png"
        },
        "stats": {
            "hp": 61,
            "attack": 84,
            "defense": 65,
            "specialAttack": 70,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 149,
        "name": "Dragonite",
        "type": [
            "Dragon",
            "Flying"
        ],
        "evolution": {
            "prev": [
                "148",
                "Level 55"
            ]
        },
        "image": {
            "sprite": "./sprites/149.png",
            "thumbnail": "./thumbnails/149.png",
            "hires": "./hires/149.png"
        },
        "stats": {
            "hp": 91,
            "attack": 134,
            "defense": 95,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 80
        }
    },
    {
        "id": 150,
        "name": "Mewtwo",
        "type": [
            "Psychic"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/150.png",
            "thumbnail": "./thumbnails/150.png",
            "hires": "./hires/150.png"
        },
        "stats": {
            "hp": 106,
            "attack": 110,
            "defense": 90,
            "specialAttack": 154,
            "specialDefense": 90,
            "speed": 130
        }
    },
    {
        "id": 151,
        "name": "Mew",
        "type": [
            "Psychic"
        ],
        "evolution": {},
        "image": {
            "sprite": "./sprites/151.png",
            "thumbnail": "./thumbnails/151.png",
            "hires": "./hires/151.png"
        },
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 100
        }
    }
]