'use client'

import { ISkill, ISkillGroup } from "@interfaces/index"
import Image from "next/image"
import { useState } from "react"

interface ISkillsPreviewProps{
  skills: ISkillGroup[]
}

export default function SkillsPreview({skills}:ISkillsPreviewProps){
  const [selectedSkill, setSelectedSkill] = useState<ISkill>()

  return (
    <article className="frame-layout flex flex-col-reverse h-full md:flex-row gap-10 ">
      <div className="w-full h-1/2 md:w-2/3 md:h-full overflow-auto">
        {
          skills.map(section => 
            <ul 
              className="flex items-center justify-evenly flex-wrap font-semibold p-5" 
              key={section.id}
            >
              <h3 className="basis-full first:mt-0 my-4 text-center">{section.title}</h3>
              {
                section.skills.map(skill => 
                  <li 
                    key={skill.id}
                    onClick={() => setSelectedSkill(skill)}
                    className={`
                      flex 
                      flex-col 
                      gap-1 
                      items-stretch 
                      justify-between 
                      basis-1/3 
                      md:basis-1/4 
                      lg:basis-1/6 
                      font-normal 
                      text-sm 
                      hover:cursor-pointer
                      bg-opacity-0
                      transition-all
                      duration-500
                      ${skill === selectedSkill && 'bg-radial-orange shadow-special-orange bg-opacity-100'}
                    `}
                  >
                    {skill.icon && 
                      <div className="w-full h-16 flex items-center justify-center">
                        <Image
                          src={skill.icon}
                          alt={skill.title}
                          width={40}
                          height={60}
                        ></Image>
                      </div>
                    }
                    <span className="text-center block w-full">
                      {skill.title}
                    </span>
                  </li>
                )
              }
            </ul>
          )
        }
      </div>
      <aside className="w-full md:w-96 h-1/2 md:h-full flex justify-center flex-col">
        <div className="relative text-[#3c221fdc] flex items-center justify-center">
          {
            selectedSkill &&
            <>
              <Image
                className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-3/4"
                src={selectedSkill.icon}
                alt={selectedSkill.title}
                width={100}
                height={200}
              ></Image>
              <span 
                className="
                  block 
                  font-bold 
                  text-lg
                  md:text-3xl 
                  first-letter:uppercase
                  absolute
                  top-[71%]
                  w-full
                  text-center
                  px-12
                  z-40
                "
              >
                {selectedSkill.title}
              </span>
              <span 
                className="
                  block 
                  font-bold 
                  text-xl 
                  absolute
                  top-[81%]
                  w-full
                  text-center
                  px-12
                  z-40
                "
              >
                rate {selectedSkill.rate}
              </span>
            </>
          }
          <Image
            className="w-56 md:w-96 aspect-auto z-30 relative"
            src={'/img/wanted-poster.png'}
            alt="wanted-poster"
            width={600}
            height={800}
          ></Image>
        </div>
      </aside>
    </article>
  )
}