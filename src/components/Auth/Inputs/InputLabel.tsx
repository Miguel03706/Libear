import React from 'react'

interface InputLabelProps {
  text: string
  name: string
}

export default function InputLabel({ text, name }: InputLabelProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className='block mb-1 text-sm font-medium text-gray-900 dark:text-white'
      >
        {text}:
      </label>
    </div>
  )
}
