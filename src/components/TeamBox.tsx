import type { Team } from "../entities/team";
import MemberBox from "./MemberBox";

function TeamBox({ team }: { team: Team }) {
    return (
        <div className="bg-lightgray border-subblue-300 flex h-40 w-320 flex-row justify-between rounded-xl border-4 pr-4 pl-10">
            <div className="flex w-110 flex-row gap-4">
                <div className="flex w-20 shrink-0 flex-row items-center justify-center">
                    {team.order <= 3 ? (
                        <img
                            src={`/assets/medal${team.order}.svg`}
                            width={80}
                        ></img>
                    ) : (
                        <h1 className="font-dohyeon text-3xl">{`${team.order}위`}</h1>
                    )}
                </div>
                <div className="flex w-86 items-center gap-4">
                    <h1 className="font-dohyeon truncate text-3xl">
                        {team.team_name}
                    </h1>
                    <h1 className="font-dohyeon text-3xl">{`(+${team.gain})`}</h1>
                </div>
            </div>
            <div className="flex w-172 flex-row gap-4 py-2">
                {team.members.map((member, index) => {
                    return <MemberBox key={index} member={member}></MemberBox>;
                })}
            </div>
        </div>
    );
}

export default TeamBox;
