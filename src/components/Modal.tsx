import { useEffect } from "react";
import { useDetail } from "../api/useDetail";
import type { Team } from "../entities/team";
import TeamRatingChart from "./TeamRatingChart";

function Modal({ team }: { team: Team }) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    const { detail, loading, error } = useDetail(team.teamId);

    if (loading) return <p>불러오는 중...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;
    if (!detail) return <p>데이터 없음</p>;

    return (
        <div className="border-subblue justify-top flex w-350 flex-col items-center gap-6 rounded-lg border-4 bg-white p-8">
            <div className="bg-subblue-200 border-subblue-300 h-40 w-full items-center justify-center rounded-lg border-4 p-4">
                <div className="flex flex-col gap-2">
                    <div className="flex w-full flex-row gap-6">
                        {team.order <= 3 ? (
                            <img
                                src={`/assets/medal${team.order}.svg`}
                                width={60}
                            ></img>
                        ) : (
                            <h1 className="font-dohyeon text-3xl">{`${team.order}위`}</h1>
                        )}
                        <div className="flex w-86 items-center gap-4">
                            <h1 className="font-dohyeon truncate text-3xl">
                                {team.teamName}
                            </h1>
                            <h1 className="font-dohyeon text-3xl">{`(+${team.gain})`}</h1>
                        </div>
                    </div>
                    <div className="bg-subblue-300 h-1 w-322"></div>
                    <div className="flex flex-row items-center gap-6">
                        <img src={`/assets/team.svg`} width={60}></img>
                        {detail.members.map((member, index) => (
                            <h2 key={index} className="font-dohyeon text-xl">
                                {`${member.bojId} (${member.entranceYear} ${member.name})`}
                            </h2>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-subblue-100 border-subblue-300 h-135 w-full rounded-lg border-4 p-4">
                <div className="h-full w-full items-center justify-center">
                    <TeamRatingChart
                        data={detail.dailyRatings}
                    ></TeamRatingChart>
                </div>
            </div>
        </div>
    );
}

export default Modal;
