'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import InputForm from '../Inputs/InputForm'
import InputLabel from '../Inputs/InputLabel'

interface FormEntrarTypes {}

export default function FormEntrar() {
  const navigate = useRouter()

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleSubmit(email: string, password: string): void {
    console.log(email)
    console.log(password)
  }

  return (
    <>
      <div>
        <InputLabel name='email' text='Email' />
        <InputForm
          name='email'
          placeHolderText='Digite o seu email'
          type='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='my-4'>
        <InputLabel name='password' text='Senha' />
        <InputForm
          name='password'
          placeHolderText='Digite o sua senha'
          type='password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='text-center mt-4'>
          <input
            type='submit'
            value='Entrar'
            className='border-2 p-2  bg-cyan-600 hover:bg-opacity-90 text-white py-2 px-4 text-md rounded-lg transition-colors cursor-pointer'
            onClick={() => handleSubmit(email, password)}
          />
        </div>
      </div>
    </>
  )
}
