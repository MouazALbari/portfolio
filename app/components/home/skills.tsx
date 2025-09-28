import { SkillDataProvider } from "./skill-data-provider";
import { SkillText } from "./skill-text";

import { SKILL_DATA } from "@/constants";

export const Skills = () => {
  const rows = [
    SKILL_DATA.slice(0, 10),
    SKILL_DATA.slice(10, 18),
    SKILL_DATA.slice(18, 24),
    SKILL_DATA.slice(24, 27),
  ];

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <div className="flex flex-col lg:gap-14 gap-8 items-center">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid f gap-6  md:gap-10"
            style={{
              gridTemplateColumns: `repeat(${row.length}, minmax(40px, 1fr))`,
            }}
          >
            {row.map((skill, index) => (
              <SkillDataProvider
                Icon={skill.icon}
                name={skill.skill_name}
                color={skill.color}
                key={skill.skill_name}
                index={index}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Background video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
