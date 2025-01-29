import { Metadata } from "next";
import ContactMeForm from "./components/ContactMeForm";

export const metadata: Metadata = {
  title: "Abielieshev Ivan | Contact me",
  description: "Form for immediately contact with me",
  keywords: [
    "contact",
    "form",
    "mail"
  ]
}

export default function ContactMePage(){

  return (
    <div className="bg-dr-stone bg-cover h-full w-full flex items-center justify-center">
      <article className="frame-layout max-h-[calc(100%-6.5rem)] overflow-auto">
        <ContactMeForm/>
      </article>
    </div>
  )
}