import React from 'react'
import InputForm from '../Inputs/InputForm'
import InputLabel from '../Inputs/InputLabel'

export default function FormCadastro() {
  return (
    <>
      <div>
        <InputLabel name='email' text='Email' />
        <InputForm
          name='email'
          placeHolderText='Digite o seu email'
          type='email'
          required
        />
      </div>
      <div className='my-4'>
        <InputLabel name='password' text='Senha' />
        <InputForm
          name='password'
          placeHolderText='Digite o sua senha'
          type='password'
          required
        />
      </div>
      <div className='mb-4'>
        <InputLabel name='password' text='Confirmar senha' />
        <InputForm
          name='password'
          placeHolderText='Confirme a sua senha'
          type='password'
          required
        />
      </div>
    </>
  )
}
