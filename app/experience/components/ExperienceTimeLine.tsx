'use client'

import { IExperienceItem } from "@interfaces/index";
import { ConfigProvider, Steps } from "antd";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

interface IPropsExperienceTimeLine{
  experience: IExperienceItem[]
}

export default function ExperienceTimeLine({ experience }: IPropsExperienceTimeLine){
  const [currentStepPosition, setCurrentStemPosition] = useState<number>(0)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleChangeStepItem = (value: number): void => {
    setCurrentStemPosition(value)
  }

  return (
    <>
      <h1 className="text-xl font-medium mb-4">
        Experience
      </h1>

      <div 
        className="flex flex-row items-stretch h-[calc(100%-2.75rem)]">
        <ul className="w-full md:w-2/3 grow overflow-hidden pr-5">
          {experience.map(el => 
            <li 
              key={el.id} 
              className="h-full transition-transform duration-500 overflow-auto"
              style={{transform: `translateY(-${currentStepPosition*100}%)`}}
            >
              {
                isMobile && 
                  <>
                    <h2 className="text-left text-lg font-semibold text-balance mb-2 underline underline-offset-4">
                      {el.placeTitle}
                    </h2>
                    <h3 className="text-center text-balance mb-2">
                      {`${el.position} / ${el.region} / ${el.period}`}
                    </h3>
                  </>
              }
              {
                el.descriptions.map((el, index) => 
                  <Markdown key={index} className='mb-4'>
                    {el}
                  </Markdown>
                )
              }
            </li>
          )}
        </ul>
        <div className="w-10 md:w-1/3 pl-0 md:pl-5 h-full overflow-auto">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#ff6600',
              },
            }}
          >
            <Steps
              progressDot={!isMobile}
              current={currentStepPosition}
              direction={"vertical"} 
              type={!isMobile ? "navigation" : "default"}
              items={experience.map((el) => (
                {
                  title: !isMobile ? el.placeTitle : ``,
                  description: !isMobile ? `${el.position} ${el.period} ${el.region}`: ``
                }
              ))}
              onChange={handleChangeStepItem}
            />
          </ConfigProvider>
        </div>
      </div>
    </>
  )
}