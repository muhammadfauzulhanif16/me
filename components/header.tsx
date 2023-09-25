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
        <NavbarMenuItem>
          <Button size='lg' variant='light'>
            Profile
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button size='lg' variant='light'>
            Achievement
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Button size='lg' variant='light'>
            Portfolio
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
