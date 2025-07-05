import { lazy, useState } from "react";
import { useTeams } from "../api/useTeams";
import { AnimatePresence, motion } from "motion/react";
import type { Team } from "../entities/team";
import { createPortal } from "react-dom";
import Spinner from "../components/Spinner";
import ErrorDialog from "../components/ErrorDialog";

const TeamBox = lazy(() => import("../components/TeamBox"));
const Modal = lazy(() => import("../components/Modal"));

function Leaderboard() {
    const { teams, loading, error } = useTeams();
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

    return (
        <div className="bg-subblue-200 flex min-h-screen flex-col items-center px-10 py-16">
            <div className="border-subblue flex w-fit max-w-7xl flex-col items-center justify-start gap-8 rounded-lg border-4 bg-white p-8 xl:w-full xl:p-16">
                {loading && (
                    <div className="flex h-[50vh] items-center justify-center">
                        <Spinner></Spinner>
                    </div>
                )}
                {!loading && error && <ErrorDialog error={error}></ErrorDialog>}
                {!loading &&
                    !error &&
                    teams.map((team) => (
                        <div
                            className="w-full"
                            key={team.teamId}
                            onClick={() => {
                                setSelectedTeam(team);
                            }}
                        >
                            <TeamBox team={team}></TeamBox>
                        </div>
                    ))}
            </div>
            {createPortal(
                <AnimatePresence>
                    {selectedTeam !== null && (
                        <div className="fixed inset-0 z-10 h-full w-full">
                            <motion.div
                                className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-white"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.05 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            ></motion.div>
                            <motion.div
                                className="pointer-events-none absolute inset-0 z-30"
                                initial={{ backdropFilter: "blur(0px)" }}
                                animate={{ backdropFilter: "blur(16px)" }}
                                exit={{ backdropFilter: "blur(0px)" }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                            <motion.div
                                className="z-40 flex h-full w-full items-center justify-center p-4"
                                initial={{ y: "5%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: "5%", opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                onClick={() => {
                                    setSelectedTeam(null);
                                }}
                            >
                                <Modal
                                    team={selectedTeam}
                                    onClick={() => {
                                        setSelectedTeam(null);
                                    }}
                                ></Modal>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>,
                document.body,
            )}
        </div>
    );
}

export default Leaderboard;
