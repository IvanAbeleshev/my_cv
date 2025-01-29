'use server'

import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise"
import { IContactMeFormValues } from "@interfaces/index"
import { sendMeMessage } from "../lib/telegram"

export async function contactMeAction(token:string | null, receivedData: IContactMeFormValues):Promise<{isStatus: boolean, errorMessage: string}> {
  if(!token){
    return (
      {
        isStatus: false,
        errorMessage: 'token not found'
      }
    )
  }

  const client = new RecaptchaEnterpriseServiceClient()
  const projectPath = client.projectPath(process.env.GOOGLE_PROJECT_ID)

  const request = ({
    assessment: {
      event: {
        token: token,
        siteKey: process.env.NEXT_PUBLIC_GOOGLE_RECAPTURE,
      },
    },
    parent: projectPath,
  })

  const [ response ] = await client.createAssessment(request);

  if (!response?.tokenProperties?.valid) {
    return (
      {
        isStatus: false,
        errorMessage: `The CreateAssessment call failed because the token was: ${response?.tokenProperties?.invalidReason}`
      }
    )
  }

  const message = await sendMeMessage(
    `<b>From:</b> ${receivedData.contactInfo}\n<b>Message:</b> ${receivedData.textInfo}`
  )
  if(!message.message_id){
    return (
      {
        isStatus: true,
        errorMessage: 'Message in delivery progress'
      }
    )
  }

  return (
    {
      isStatus: true,
      errorMessage: ''
    }
  )
}