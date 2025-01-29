export default async function getCaptchaToken(actionName: string) {

  return new Promise<string | null>(resolve => {
    grecaptcha.enterprise.ready(
      async () => {
        const siteKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTURE
        if(!siteKey){
          resolve(null)
          return;
        }
        const token = await grecaptcha.enterprise.execute(siteKey, {
          action: actionName
        })
        resolve(token)
      }
    )
  })
}