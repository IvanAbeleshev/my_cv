'use client'
import Image from "next/image";
import Link from "next/link";
import { Dispatch, MouseEventHandler, SetStateAction, useState } from "react";

interface IPropsLogo{
  setIsOpened: Dispatch<SetStateAction<boolean>>
}
export default function Logo({setIsOpened}: IPropsLogo) {

  const [triggerAnimation, setTriggerAnimation] = useState(false) 

  const onMouseEnterLogo: MouseEventHandler = (): void => {
    setTriggerAnimation(true)
    setTimeout(() => setTriggerAnimation(false), 700)
  }

  return (
    <Link
      href={'/'} 
      className="absolute w-20 h-16 overflow-hidden top-0 left-2 md:left-12 block" 
      onMouseEnter={onMouseEnterLogo}
      onClick={() => setIsOpened(false)}
    >
      <Image 
        src={'img/kunai.svg'} 
        alt="logo"
        width={20}
        height={40}
        className={`
          absolute 
          top-0 
          left-2 
          rotate-[34deg] 
          -translate-y-2 
          z-40 
          ${triggerAnimation ? 'kunai-1-finish' : 'kunai-1-start'}`
        }
      ></Image>
      <Image 
        src={'img/kunai.svg'} 
        alt="logo"
        width={20}
        height={40}
        className={`
          absolute 
          top-0 
          left-4 
          -rotate-[8deg] 
          -translate-y-2 
          z-20 
          ${triggerAnimation ? 'kunai-2-finish' : 'kunai-2-start'}`
        }
      ></Image>
      <Image 
        src={'img/kunai.svg'} 
        alt="logo"
        width={20}
        height={40}
        className={`
          absolute 
          top-1 
          left-5 
          rotate-[105deg] 
          z-30 
          ${triggerAnimation ? 'kunai-3-finish' : 'kunai-3-start'}`
        }
      ></Image>

      <Image 
        src={'img/kunai.svg'} 
        alt="logo"
        width={20}
        height={40}
        className={`
          absolute 
          -top-2 
          left-12 
          rotate-12 
          z-40 
          ${triggerAnimation ? 'kunai-4-finish' : 'kunai-4-start'}`
        }
      ></Image>
    </Link>
  )
}