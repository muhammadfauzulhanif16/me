import React, { type FC, type JSX, type ReactNode } from 'react'
import '@/styles/globals.css'
import { type Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { fontSans } from '@/config/fonts'
import { Providers } from './providers'
import clsx from 'clsx'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({
  children,
}: RootLayoutProps): JSX.Element => {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />

      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <Header />

          <main>{children}</main>

          {/* <footer className='w-full flex items-center justify-center py-3'> */}
          {/*  <Link */}
          {/*    isExternal */}
          {/*    className='flex items-center gap-1 text-current' */}
          {/*    href='https://nextui-docs-v2.vercel.app?utm_source=next-app-template' */}
          {/*    title='nextui.org homepage' */}
          {/*  > */}
          {/*    <span className='text-default-600'>Powered by</span> */}
          {/*    <p className='text-primary'>NextUI</p> */}
          {/*  </Link> */}
          {/* </footer> */}
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
