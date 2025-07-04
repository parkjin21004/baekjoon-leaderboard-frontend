import { useEffect, useState } from "react";
import api from "./axios";
import type { Team } from "../entities/team";
import type { AxiosError } from "axios";

export function useTeams() {
    const [teams, setTeams] = useState<Team[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        api.get("/team")
            .then((res) => {
                setTeams(res.data);
            })
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }, []);

    return { teams, loading, error };
}
