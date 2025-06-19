import { useEffect, useState } from "react";
import api from "./axios";
import type { Team } from "../entities/team";

export function useTeams() {
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get("/team")
            .then((res) => setTeams(res.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { teams, loading, error };
}
