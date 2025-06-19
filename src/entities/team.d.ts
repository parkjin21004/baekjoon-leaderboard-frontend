export interface Team {
    team_id: number;
    team_name: string;
    gain: number;
    order: number;
    members: Member[];
}

interface Member {
    name: string;
    boj_id: string;
    tier: number;
}
