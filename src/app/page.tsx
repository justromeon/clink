import ThemeToggle from '@/components/ThemeToggle'
import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import React from 'react'

function HomePage() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode='modal'>
          <Button variant='default'>
            Sign Up
          </Button>
        </SignInButton>
        <SignUpButton mode='modal'>
          <Button variant='secondary'>
            Sign Up
          </Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ThemeToggle />
    </div >
  )
}

export default HomePage
