import { tierGroup, tierLabel } from "../global/constant";

function TierBox({ tier }: { tier: number }) {
    return (
        <div
            className={`w-5 bg-tier-${tierGroup(tier)} items-center justify-center rounded px-0.5 py-1 text-white outline-2 outline-offset-1 outline-tier-${tierGroup(tier)} text-tiny xs:w-5 lg:text-md sm:w-6 sm:text-xs md:w-7 md:text-sm lg:w-8`}
        >
            <p className="m-0 text-center">{tierLabel(tier)}</p>
        </div>
    );
}

export default TierBox;
