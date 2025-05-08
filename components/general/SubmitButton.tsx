"use client"

import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {

    const {pending} = useFormStatus()

  return (
    <Button type='submit' className='w-full h-12 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200' disabled={pending}>
      {pending ? "Creating..." : "Create Article"}
    </Button>
  )
}
