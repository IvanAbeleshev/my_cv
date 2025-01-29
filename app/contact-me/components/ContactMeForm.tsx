'use client'

import TextArea from "antd/es/input/TextArea";
import { ChangeEventHandler, FormEvent, useState } from "react";
import { contactMeAction } from "../actions";
import getCaptchaToken from "@/app/utils/captcha";
import { Button, ConfigProvider, notification } from "antd";
import Input from "antd/es/input/Input";
import { IContactMeFormValues, IContactMeValidation } from "@interfaces/index";
import { string, ValidationError } from "yup";

const contactInfoValidationScheme = string()
  .required('Contact info is required field')
  .test(
    'is-telegram-or-email',
    'Must be a valid Telegram username or email',
    (value) => {
      if (!value){
        return false
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      const telegramRegex = /^@?[a-zA-Z0-9_]{5,32}$/

      return emailRegex.test(value) || telegramRegex.test(value)
    }
  )

const textInfoValidationScheme = string().required('Text info is required field').min(10, 'Text info is too short')

export default function ContactMeForm() {

  const [validation, setValidation] = useState<IContactMeValidation>(
    {
      status: false,
      fields: []
    }
  )
  const [formValues, setFormValues] = useState<IContactMeFormValues>(
    {
      contactInfo: '',
      textInfo: ''
    }
  )
  const [notificationAPI, contextHolder] = notification.useNotification()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleInputChange:ChangeEventHandler = (event) => {
    const { id, value } = event.target as HTMLInputElement
    setFormValues((prev) => {
      const updatedValues = { ...prev, [id]: value }
      validateForm(updatedValues)
      return updatedValues
    })
  }

  const validateForm = (values: IContactMeFormValues) => {
    const tempValidationData: IContactMeValidation = {
      status: false,
      fields: []
    }

    try{
      contactInfoValidationScheme.validateSync(values.contactInfo)
      tempValidationData.fields.push(
        {
          fieldName: 'contactInfo',
          isValid: true,
          message: ''
        }
      )
    }catch(error){
      if (error instanceof ValidationError) {
        tempValidationData.fields.push(
          {
            fieldName: 'contactInfo',
            isValid: false,
            message: error.message
          }
        )
      }
    }

    try{
      textInfoValidationScheme.validateSync(values.textInfo)
      tempValidationData.fields.push(
        {
          fieldName: 'textInfo',
          isValid: true,
          message: ''
        }
      )
    }catch(error){
      if (error instanceof ValidationError) {
        tempValidationData.fields.push(
          {
            fieldName: 'textInfo',
            isValid: false,
            message: error.message
          }
        )
      }
    }

    tempValidationData.status = tempValidationData.fields.every(el => el.isValid)
    setValidation(tempValidationData)
    
  }

  const getFieldValidationStatus = (fieldName: string): "" | "warning" | "error" => {
    const foundField = validation.fields.find(el => el.fieldName === fieldName)
    if(foundField && !foundField.isValid){
      return "error"
    }

    return ''
  }

  const resetForm = () => {
    setFormValues(
      {
        contactInfo: '',
        textInfo: ''
      }
    )
    setValidation(
      {
        status: false,
        fields: []
      }
    )
  }

  const handleSubmit = async(event: FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    const token = await getCaptchaToken('contact')
    const result = await contactMeAction(token, formValues)
    
    if(result.isStatus){
      notificationAPI.success(
        {
          message: 'Your request has been processed.',
          description: result.errorMessage || 'Your message has been successfully delivered.' 
        }
      )
      resetForm()
    }else{
      notificationAPI.error(
        {
          message: 'Processing error.',
          description: result.errorMessage
        }
      )
    }
    
    setIsLoading(false)
  }

  return(
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#e3f700',
        },
      }}
    >
      {contextHolder}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h1 className="text-3xl text-center">
          Contact me
        </h1>
        <label htmlFor="contactInfo">
          Contact info<span className="text-red-600 uppercase">*</span>
          <Input 
            placeholder="@telegram-username or example@gmail.com"
            id="contactInfo"
            size="large"
            value={formValues.contactInfo}
            onChange={handleInputChange}
            status={getFieldValidationStatus('contactInfo')}
            disabled={isLoading}
          ></Input>
        </label>
        <label htmlFor="textInfo">
          Text info<span className="text-red-600 uppercase">*</span>
          <TextArea 
            placeholder={`"Imagination is more important than knowledge." – Albert Einstein`}
            id="textInfo"
            size="large"
            rows={5}
            value={formValues.textInfo}
            onChange={handleInputChange}
            status={getFieldValidationStatus('textInfo')}
            disabled={isLoading}
          ></TextArea>
        </label>
        {
          !validation.status && 
          <ul className="text-sm text-center text-red-600">
            {
              validation.fields.filter(el => !el.isValid).map(el => 
                <li key={el.fieldName}>{el.message}</li>
              )
            }
          </ul>
        }
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#ff6600',
            },
          }}
        >
          <Button 
            type="primary" 
            htmlType="submit"
            disabled={!validation.status}
            loading={isLoading}
          >
            Send
          </Button>
        </ConfigProvider>
      </form>
    </ConfigProvider>
  )
}