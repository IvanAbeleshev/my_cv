'use client'

import { Dispatch, SetStateAction } from "react"

interface IPropsMobileMenu{
  isOpened: boolean
  setIsOpened: Dispatch<SetStateAction<boolean>>
}

export default function MobileMenu({isOpened, setIsOpened}: IPropsMobileMenu){
  return(
    <button
      onClick={() => setIsOpened(prev => !prev)}
      className="w-16 h-16 absolute top-0 right-2 overflow-hidden md:hidden"
    >
      <span 
        className={`
          mobile-button
          ${isOpened ? 'top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-orange-md' : 'bg-light-primary top-[35%]'}`
        }
      />
      <span 
        className={`
          mobile-button
          top-[50%]
          ${isOpened ? 'left-[-150%] bg-orange-md' : 'bg-light-primary'}
        `
      } 
      />
      <span 
        className={`
          mobile-button
          ${isOpened ? 'top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-orange-md' : 'bg-light-primary top-[65%]'}`
        }
      />
    </button>
  )
}
