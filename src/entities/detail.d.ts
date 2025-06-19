export interface Detail {
    id: number;
    members: MemberDetail[];
    daily_ratings: DailyRating[];
}

interface MemberDetail {
    name: string;
    boj_id: string;
    gain: number;
    rating: number;
    entrance_year: number;
    tier: number;
}

interface DailyRating {
    date: Date;
    ratings: Rating[];
}

interface Rating {
    name: string;
    rating: number;
}
