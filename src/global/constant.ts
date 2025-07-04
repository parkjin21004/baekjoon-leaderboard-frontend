// const BASE_URL = "https://skkusoftware.kr/api";
const BASE_URL = "/api";

export const TIER_LABEL = {
    0: "?",
    1: "B5",
    2: "B4",
    3: "B3",
    4: "B2",
    5: "B1",
    6: "S5",
    7: "S4",
    8: "S3",
    9: "S2",
    10: "S1",
    11: "G5",
    12: "G4",
    13: "G3",
    14: "G2",
    15: "G1",
    16: "P5",
    17: "P4",
    18: "P3",
    19: "P2",
    20: "P1",
    21: "D5",
    22: "D4",
    23: "D3",
    24: "D2",
    25: "D1",
    26: "R5",
    27: "R4",
    28: "R3",
    29: "R2",
    30: "R1",
    31: "M",
} as const;

export type Tier = keyof typeof TIER_LABEL;

export function tierLabel(tier: number): string {
    return TIER_LABEL[tier as Tier] ?? "Unknown";
}

export function tierGroup(tier: number): string {
    if (tier === 31) return "master";
    if (tier < 1 || tier > 31) return "none";

    const idx = Math.floor((tier - 1) / 5);
    return (
        ["bronze", "silver", "gold", "platinum", "diamond", "ruby"] as const
    )[idx];
}

export { BASE_URL };
