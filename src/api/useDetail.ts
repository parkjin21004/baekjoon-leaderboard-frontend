import { useEffect, useState } from "react";
import type { Detail } from "../entities/detail";
import api from "./axios";

export function useDetail(id: number) {
    const [detail, setDetail] = useState<Detail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        api.get(`/detail/${id}`)
            .then((res) => setDetail(res.data))
            .catch((err) => setError(err))
            .then(() => setLoading(false));
    }, []);

    return { detail, loading, error };
}
