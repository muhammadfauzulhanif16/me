import React, { type FC, type JSX, type ReactNode } from 'react'

interface AboutLayoutProps {
  children: ReactNode
}

const AboutLayout: FC<AboutLayoutProps> = ({
  children,
}: AboutLayoutProps): JSX.Element => {
  return (
    <section className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
      <div className='inline-block max-w-lg text-center justify-center'>
        {children}
      </div>
    </section>
  )
}

export default AboutLayout
