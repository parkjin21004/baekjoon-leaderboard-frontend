export interface Team {
    teamId: number;
    teamName: string;
    gain: number;
    order: number;
    members: Member[];
}

interface Member {
    name: string;
    bojId: string;
    tier: number;
}
