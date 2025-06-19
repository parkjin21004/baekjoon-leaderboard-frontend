import type { Member } from "../entities/team";

function MemberBox({ member }: { member: Member }) {
    return (
        <div className="border-subblue-200 flex w-40 flex-col items-center justify-center gap-4 rounded-lg border-4 bg-white">
            <p className="font-dohyeon text-lg">{member.boj_id}</p>
            <div className="flex flex-row">
                <p className="font-dohyeon text-lg">{member.name}</p>
            </div>
        </div>
    );
}

export default MemberBox;
