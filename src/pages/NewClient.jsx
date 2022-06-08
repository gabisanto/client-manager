import React from 'react'
import FormClient from '../components/FormClient'

const NewClient = () => {
  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>New Client</h1>
      <p className='mt-3'>Fill in all fields to create a client</p>

      <FormClient />
    </>
  )
}

export default NewClient

