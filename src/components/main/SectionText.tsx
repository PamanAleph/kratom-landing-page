import React from 'react'

interface SectionTextProps{
    title: string
}

export default function SectionText({title}: SectionTextProps) {
  return (
    <h1 className="text-secondary font-open-sans italic font-[600] text-[20px]">
    {title}
  </h1>

  )
}
