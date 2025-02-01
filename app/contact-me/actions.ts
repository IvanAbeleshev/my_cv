'use server'

// import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise"
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

  // const client = new RecaptchaEnterpriseServiceClient()
  // const projectPath = client.projectPath(process.env.GOOGLE_PROJECT_ID)

  // const request = ({
  //   assessment: {
  //     event: {
  //       token: token,
  //       siteKey: process.env.NEXT_PUBLIC_GOOGLE_RECAPTURE,
  //     },
  //   },
  //   parent: projectPath,
  // })

  // try{
  //   console.log('request: ', request)
  //   const responseRecapture = await client.createAssessment(request)
  //   console.log('response: ', responseRecapture)
  //   const [ response ] = responseRecapture
  //   if (!response?.tokenProperties?.valid) {
  //     return (
  //       {
  //         isStatus: false,
  //         errorMessage: `The CreateAssessment call failed because the token was: ${response?.tokenProperties?.invalidReason}`
  //       }
  //     )
  //   }
  // }catch(error){
  //   console.log('error: ', error)
  //   return (
  //     {
  //       isStatus: false,
  //       errorMessage: `Recapture checking does not return expected response`
  //     }
  //   )
  // }

  try {
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
  } catch (error) {
    console.log(error)
    return (
      {
        isStatus: false,
        errorMessage: 'Telegram bot have issue and cant send the message'
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