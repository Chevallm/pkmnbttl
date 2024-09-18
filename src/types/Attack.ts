export interface Attack {
    name: string;
    type: string;            // Type de l'attaque (ex: "Fire", "Water", etc.)
    power: number;           // Puissance de l'attaque
    accuracy: number;        // Précision de l'attaque (entre 0 et 100)
    category: 'Physical' | 'Special' | 'Status';  // Type d'attaque
    pp: number;              // Points de pouvoir de l'attaque (nombre d'utilisations)
    effect?: AttackEffect;   // Effets secondaires éventuels (optionnel)
    hits?: number;           // Nombre fixe de coups (ex: Double-Pied)
    hitsRange?: [number, number];  // Nombre de coups variable (ex: entre 2 et 5)
  }
  
  export interface AttackEffect {
    type: 'stat_boost' | 'status_condition';  // Type d'effet : boost de stats ou altération de statut
    chance: number;       // Chance que l'effet se produise (entre 0 et 100)
    stats?: Partial<StatBoosts>;  // Statistiques à augmenter ou diminuer
    statusCondition?: StatusCondition;  // Condition de statut (ex: paralysie, brûlure, etc.)
  }
  
  export interface StatBoosts {
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  }
  
  export type StatusCondition = 'Paralyzed' | 'Burned' | 'Frozen' | 'Poisoned' | 'Sleep';
  