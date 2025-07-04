import { useEffect } from "react";
import { useDetail } from "../api/useDetail";
import type { Team } from "../entities/team";
import TeamRatingChart from "./TeamRatingChart";
import Spinner from "./Spinner";
import ErrorDialog from "./ErrorDialog";

function Modal({ team }: { team: Team }) {
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    const { detail, loading, error } = useDetail(team.teamId);

    return (
        <div
            className="border-subblue justify-top z-50 flex max-h-[100vh] flex-col items-center gap-4 overflow-y-auto rounded-lg border-4 bg-white p-4 lg:gap-6 lg:p-8"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="bg-subblue-200 border-subblue-300 h-full w-full items-center justify-center rounded-lg border-4 p-2 sm:p-4">
                <div className="flex flex-col gap-2">
                    <div className="flex w-full flex-row gap-2 sm:gap-6 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                        {team.order <= 3 ? (
                            <img
                                src={`/assets/medal${team.order}.svg`}
                                className="xs:w-[30px] sm:[40px] w-[20px] md:w-[40px] lg:w-[50px] xl:w-[60px]"
                            ></img>
                        ) : (
                            <h1 className="font-dohyeon whitespace-nowrap">{`${team.order}위`}</h1>
                        )}
                        <div className="flex w-full items-center gap-2 sm:gap-4">
                            <h1 className="font-dohyeon truncate">
                                {team.teamName}
                            </h1>
                            <h1 className="font-dohyeon">{`(${team.gain >= 0 ? `+${team.gain}` : `${team.gain}`})`}</h1>
                        </div>
                    </div>
                    <div className={`${!detail ? "hidden" : ""}`}>
                        <div className={`bg-subblue-300 h-1 w-full`}></div>
                        <div className="flex flex-row items-center gap-2 text-xs sm:text-sm md:text-base lg:gap-4 lg:text-lg xl:text-xl">
                            <img
                                src={`/assets/team.svg`}
                                className="xs:w-[30px] sm:[40px] w-[20px] md:w-[40px] lg:w-[50px] xl:w-[60px]"
                            ></img>
                            {detail &&
                                detail.members.map((member, index) => (
                                    <div
                                        key={index}
                                        className={`font-dohyeon ${loading || error || !detail ? "hidden" : ""}`}
                                    >
                                        <span className="hidden md:inline">{`${member.bojId} `}</span>
                                        <span className="hidden md:inline">
                                            {"("}
                                        </span>
                                        <span className="hidden lg:inline">
                                            {`${member.entranceYear.toString().substring(2, 4)}`}
                                        </span>
                                        <span>{`${member.name}`}</span>
                                        <span className="hidden md:inline">
                                            {")"}
                                        </span>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-subblue-100 border-subblue-300 h-full w-full flex-none overflow-x-auto overflow-y-hidden rounded-lg border-4 p-4">
                {loading && (
                    <div className="flex h-[50vh] w-[70vw] items-center justify-center">
                        <Spinner></Spinner>
                    </div>
                )}
                {!loading && (
                    <div className="flex h-[450px] w-[900px] flex-shrink-0 items-center justify-center">
                        {error && <ErrorDialog error={error}></ErrorDialog>}
                        {detail && (
                            <TeamRatingChart
                                data={detail.dailyRatings}
                            ></TeamRatingChart>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Modal;
