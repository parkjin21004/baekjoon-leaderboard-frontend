import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    type TooltipItem,
} from "chart.js";
import { Line } from "react-chartjs-2";
import type { DailyRating, Rating } from "../entities/detail";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
);

function TeamRatingChart({ data }: { data: DailyRating[] }) {
    const allDates = Array.from({ length: 31 }, (_, i) => {
        const day = String(i + 1).padStart(2, "0");
        return `07-${day}`;
    });

    const chartData = {
        labels: allDates,
        datasets: [
            {
                label: "팀 총 rating",
                data: allDates.map((date) => {
                    const entry = data.find(
                        (d) => d.date.toString().slice(5) === date,
                    );
                    if (!entry) return { x: date, y: null, members: [] };

                    const sum = entry.ratings.reduce(
                        (acc, r) => acc + r.rating,
                        0,
                    );
                    return {
                        x: date,
                        y: sum,
                        members: entry.ratings,
                    };
                }),
                parsing: {
                    xAxisKey: "x",
                    yAxisKey: "y",
                },
                borderColor: "rgba(255, 216, 51, 1)",
                tension: 0.3,
                spanGaps: false,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                mode: "index" as const,
                intersect: false,
                callbacks: {
                    title: (tooltipItems: TooltipItem<"line">[]) =>
                        tooltipItems[0].label, // 날짜
                    label: (tooltipItem: TooltipItem<"line">) => {
                        const raw = tooltipItem.raw as {
                            x: string;
                            y: number;
                            members: Rating[];
                        };
                        return raw.members.map((m) => `${m.name}: ${m.rating}`);
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: false,
            },
        },
    };

    return <Line data={chartData} options={options} />;
}

export default TeamRatingChart;
