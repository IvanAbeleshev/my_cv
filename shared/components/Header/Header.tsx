'use client'

import { INavigationLink } from "@interfaces/index"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MouseEventHandler, useEffect, useRef, useState } from "react"
import Logo from "./Logo"
import MobileMenu from "./MobileMenu"

const locations: INavigationLink[] = [
  {
    index: 0,
    path: '/',
    title: 'About me'
  },
  {
    index: 1,
    path: '/skills',
    title: 'Skills'
  },
  {
    index: 2,
    path: '/experience',
    title: 'Experience'
  },
  {
    index: 3,
    path: '/contact-me',
    title: 'Contact me'
  }
]

const Header = ( ) => {
  const pathname = usePathname()
  const [currentPosition, setCurrentPosition] = useState<INavigationLink | null>(null)
  const previousPosition = useRef<INavigationLink | null>(null)
  const [isOpened, setIsOpened] = useState<boolean>(false)

  useEffect(() => {
    if(pathname){
      const foundPosition = locations.find(el => el.path === pathname)
      previousPosition.current = currentPosition
      setCurrentPosition(foundPosition ?? null)
    }
  }, [pathname])

  const getAvailabilityForTransition = (currentIndex:number): boolean => {
    const prevPosition = previousPosition.current?.index ?? -1
    const curPosition = currentPosition?.index ?? -1

    if(Math.min(prevPosition, curPosition) <= currentIndex 
      && Math.max(prevPosition, curPosition) >= currentIndex
    ){
      return true
    }

    return false
  }

  const calculateItemDelay = (currentIndex: number): number => {
    const prevPosition = previousPosition.current?.index ?? -1
    return Math.abs(prevPosition - currentIndex) * 0.075
  }


  return (
    <header className={`bg-dark-primary z-20 absolute w-full ${isOpened ? 'md:h-16 h-[100dvh]' : 'h-16'} transition-all duration-700 overflow-hidden`}>
      <Logo setIsOpened={setIsOpened}/>
      <nav className="mx-default flex justify-center pt-16 md:pt-0 md:justify-end items-center">
        <ul className={`md:h-16 flex flex-col justify-center md:flex-row items-center gap-5 lg:gap-10 w-fit`}>
          {
            locations.map(el => 
              <li key={el.index} className="p-2 overflow-hidden">
                <Link 
                  href={el.path} 
                  className={`
                    relative 
                    ${el.path === pathname ? 'skew-border bg-center' : ''}
                    ${
                      (previousPosition.current?.index ?? -1) > (currentPosition?.index ?? -1) && el.path !== pathname ? 'bg-right' : ''
                    } 
                    ${
                      (previousPosition.current?.index ?? -1) < (currentPosition?.index ?? -1) && el.path !== pathname ? 'bg-left' : ''
                    }
                    ${
                      getAvailabilityForTransition(el.index) ? 'transition-all duration-1000' : ''
                    }
                    block w-32 text-center bg-clip-text text-transparent bg-white-yellow-white bg-400 `
                  }
                  style={{transitionDelay: `${calculateItemDelay(el.index)}s`}}
                  onClick={() => setIsOpened(false)}
                >
                  {el.title}
                </Link>
              </li>
            )
          }
        </ul>
        <MobileMenu
          isOpened={isOpened}
          setIsOpened={setIsOpened}
        />
      </nav>
    </header>
  )
}

export default Header