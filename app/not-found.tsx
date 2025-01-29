import Image from "next/image"
import Link from "next/link"

export default function NotFound(){
  return(
    <div className="w-full h-full bg-dark-primary flex justify-center items-center">
      <div className="w-full ">
        <h1 className="w-1/2 text-center font-semibold text-5xl mb-20 select-none not-found-letter-4">0</h1>
        <div className="flex items-center justify-center">
          <Image
            className="select-none"
            src={'/img/inspector-gadget.png'}
            alt="not-found"
            width={300}
            height={400}
          ></Image>
        </div>
        <div className="flex justify-end mt-20">
          <div className="w-1/2 flex justify-center">
            <Link 
              href={'/'}
              className="font-semibold text-3xl hover:underline block hover:text-orange-md transition-colors duration-300"
            >
              go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}