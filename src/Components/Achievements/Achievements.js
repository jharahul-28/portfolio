import React from "react";
import { CardSpotlight } from "@/Components/ui/card-spotlight";

const AchievementsDisplay = () => {
    const achievements = [
        {
            heading: "Development",
            subAchievements: [
                "Js Full Stack Capabilities",
                "10+ Live Projects",
                "Developed NPM Package with 10+ weekly downloads",
            ],
        },
        {
            heading: "Internships and Work-Ex",
            subAchievements: [
                "Ex-intern at HoppRyde",
                "Developed College's Tech-Fest Website",
                "Developed College's Club Website",
            ],
        },
        {
            heading: "DSA and Core CS",
            subAchievements: [
                "Solved 500+ LeetCode & GFG problems",
                "Knowledge of OOPS using Java",
                "Knowledge of DBMS and MySQL",
            ],
        },
        {
            heading: "Competitive Programming",
            subAchievements: [
                "Rank 286 in CodeChef Weekly Contest",
                "3 times under 1600 rank in CodeChef Weekly Contest",
                "Solved 200+ problems on Competitive Programming Platforms",
            ],
        },
    ];
    return (
        <>
            <div className="flex flex-row justify-center text-4xl size-full mb-6">
                <p className="font-rajdhaniSemiBold">Achievements</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 px-2">
                {achievements.map((achievement, index) => (
                    <CardSpotlight key={index} className="p-6">
                        <h3 className="text-xl font-semibold mb-4">{achievement.heading}</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            {achievement.subAchievements.map((subAchievement, idx) => (
                                <li key={idx} className="text-neutral-400">
                                    {subAchievement}
                                </li>
                            ))}
                        </ul>
                    </CardSpotlight>
                ))}
            </div>
        </>
    );
};

export default AchievementsDisplay;
