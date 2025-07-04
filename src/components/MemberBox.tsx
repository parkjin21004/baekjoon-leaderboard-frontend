import type { Member } from "../entities/team";
import TierBox from "./TierBox";

function MemberBox({ member }: { member: Member }) {
    return (
        <div className="border-subblue-200 xs:w-20 flex w-16 flex-col items-center justify-center gap-4 rounded-lg border-4 bg-white px-1 py-4 text-xs sm:w-30 sm:gap-6 sm:text-sm lg:w-40 lg:text-lg">
            <p className="font-dohyeon xs:block hidden">{member.bojId}</p>
            <div className="font-dohyeon xs:flex-row flex flex-col items-center gap-2">
                <TierBox tier={member.tier}></TierBox>
                <p className="font-dohyeon">{member.name}</p>
            </div>
        </div>
    );
}

export default MemberBox;
