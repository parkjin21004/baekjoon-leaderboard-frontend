import { useState } from "react";
import { useTeams } from "../api/useTeams";
import TeamBox from "../components/TeamBox";
import Modal from "../components/Modal";
import { AnimatePresence, motion } from "motion/react";
import type { Team } from "../entities/team";

function Leaderboard() {
    const { teams, loading, error } = useTeams();
    const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

    if (loading) return <p>불러오는 중...</p>;
    if (error) return <p>에러 발생: {error.message}</p>;

    return (
        <div className="bg-subblue-200 justify-top flex min-h-screen flex-col items-center py-16">
            <div className="border-subblue justify-top flex min-h-[calc(100vh-8rem)] w-350 flex-col items-center gap-8 rounded-lg border-4 bg-white p-16">
                {teams.map((team, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            setSelectedTeam(team);
                        }}
                    >
                        <TeamBox team={team}></TeamBox>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedTeam !== null && (
                    <div className="fixed inset-0 z-10 h-full w-full">
                        <motion.div
                            className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.05 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        ></motion.div>
                        <motion.div
                            className="pointer-events-none absolute inset-0 z-30"
                            initial={{ backdropFilter: "blur(0px)" }}
                            animate={{ backdropFilter: "blur(16px)" }}
                            exit={{ backdropFilter: "blur(0px)" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                        <motion.div
                            className="z-40 flex h-full w-full items-center justify-center"
                            initial={{ y: "5%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "5%", opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={() => {
                                setSelectedTeam(null);
                            }}
                        >
                            <div
                                className="z-50"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Modal team={selectedTeam}></Modal>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Leaderboard;
