import type { Story } from '@ladle/react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export const Form: Story = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 space-y-0">
        <CardTitle className="leading-none font-semibold text-base tracking-normal">
          Login to your account
        </CardTitle>
        <CardDescription>Enter your email below to login to your account</CardDescription>
        <CardAction>
          <Button appearance="link" size="base">
            Sign Up
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button appearance="outlined" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}

export const Default: Story = () => {
  return <Card className="p-6">Content</Card>
}
