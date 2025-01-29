export interface IContactMeValidation{
  status: boolean
  fields: {
    fieldName: string 
    isValid: boolean
    message: string 
  }[]
}