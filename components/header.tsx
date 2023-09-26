'use client'

import React, { type FC, type JSX, useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/button'

export const Header: FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const menus = [
    'Profile',
    'Education',
    'Experience',
    'Achievement',
    'Portfolio',
    'Contact',
  ]

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <p className='font-bold text-inherit'>Fauzul</p>
        </NavbarBrand>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarMenu className='justify-center items-center'>
        {menus.map((menu, id) => (
          <NavbarMenuItem key={id}>
            <Button size='lg' variant='light' className='text-4xl'>
              {menu}
            </Button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
