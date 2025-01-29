import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Abielieshev Ivan | About",
  description: "Experienced frontend developer with over 2.5 years of expertise in building dynamic and responsive web applications. Proficient in JavaScript, TypeScript, Angular, and modern web technologies, with a strong background in developing accounting systems and optimizing user experiences.",
  keywords: [
    'frontend',
    'front-end',
    'about',
    'description',
    'summary'
  ]
}

export default function Home() {
  return (
    <div className="bg-hidden-leaf-village bg-cover bg-center h-full w-full flex items-center justify-center">
      <article className="frame-layout overflow-auto">
        <h1 className="text-xl font-medium mb-4">About me</h1>
        <p className="mb-4">Hi, I’m Abielieshev Ivan, a dedicated Frontend Developer with over 2.5 years of hands-on experience in creating dynamic and user-friendly web interfaces. With a solid foundation in software development spanning more than a decade, I bring a unique perspective that combines technical expertise with a deep understanding of user needs.</p>
        <p>For over 10 years, I’ve been immersed in the world of software development, mastering a range of technologies and honing my problem-solving skills. In the past few years, I’ve specialized in frontend development, focusing on delivering seamless, responsive, and engaging user experiences.</p>
      </article>
    </div>
  )
}
