import { Metadata } from 'next';
import skills from '../assets/skills.json'
import SkillsPreview from "./components/SkillsPreview";

export const metadata: Metadata = {
  title: "Abielieshev Ivan | Skills",
  description: "Showcasing a diverse set of frontend development skills, including JavaScript, TypeScript, Angular, RxJS, and Astro.js. Experienced in building responsive web applications, creating animations, optimizing user interfaces, and integrating APIs for seamless functionality.",
  keywords: [
    "skill",
    "skills",
    "javascript",
    "js",
    "typescript",
    "ts",
    "react",
    "angular"
  ]
}

export default function SkillsPage(){
  return (
    <div className="bg-one-piece bg-cover h-full w-full flex items-center justify-center ">
      <SkillsPreview
        skills={skills}
      ></SkillsPreview>
    </div>
  )
}