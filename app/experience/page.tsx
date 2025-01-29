import ExperienceTimeLine from "./components/ExperienceTimeLine";
import experience from "../assets/experience.json"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abielieshev Ivan | Experience",
  description: "Detailing over 10 years of software development experience, including 2.5+ years in frontend development. Proficient in creating dynamic web applications and over 8 years dedicated to building accounting systems for professional accountants, ensuring efficiency and user satisfaction.",
  keywords: [
    "experience",
    "fintech",
    "cyberpolice",
    "security",
    "development",
    "engineer",
    "software"
  ]
}

export default function ProjectsPage(){
  return (
    <div className="bg-anime-landscape bg-bottom h-full w-full flex items-center justify-center">
      <article className="frame-layout h-[calc(100%-6.5rem)]">
        <ExperienceTimeLine experience={experience}/>
      </article>
    </div>
  )
}