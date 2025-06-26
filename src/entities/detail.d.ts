export interface Detail {
    id: number;
    members: MemberDetail[];
    dailyRatings: DailyRating[];
}

interface MemberDetail {
    name: string;
    bojId: string;
    gain: number;
    rating: number;
    entranceYear: number;
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
