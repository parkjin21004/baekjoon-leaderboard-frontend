import type { Team } from "../entities/team";
import MemberBox from "./MemberBox";

function TeamBox({ team }: { team: Team }) {
    return (
        <div className="bg-lightgray border-subblue-300 flex w-fit flex-col items-center justify-between gap-4 rounded-xl border-4 px-2 py-2 xl:w-full xl:flex-row xl:pr-2 xl:pl-10">
            <div className="flex flex-row items-center gap-4">
                {team.order <= 3 ? (
                    <img
                        src={`/assets/medal${team.order}.svg`}
                        className="xs:w-[50px] w-[30px] lg:w-[60px] xl:w-[80px]"
                    ></img>
                ) : (
                    <div className="xs:w-[50px] w-[30px] text-center lg:w-[60px] xl:w-[80px]">
                        <h1 className="font-dohyeon text-md xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl">{`${team.order}위`}</h1>
                    </div>
                )}

                <div className="flex flex-row gap-1 sm:gap-4 xl:items-center">
                    <h1 className="font-dohyeon text-md xs:text-lg truncate sm:text-xl lg:text-2xl xl:text-3xl">
                        {team.teamName}
                    </h1>
                    <h1 className="font-dohyeon text-md xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl">{`(${team.gain >= 0 ? `+${team.gain}` : `${team.gain}`})`}</h1>
                </div>
            </div>
            <div className="mt-2 grid grid-cols-2 grid-rows-2 gap-2 xl:mt-0 xl:flex xl:flex-row xl:gap-2">
                {team.members.map((member, index) => {
                    return <MemberBox key={index} member={member}></MemberBox>;
                })}
            </div>
        </div>
    );
}

export default TeamBox;
