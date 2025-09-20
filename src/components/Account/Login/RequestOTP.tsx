'use client'

import { z } from 'zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import useI18n from '@/i18n/useI18n'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const createFormSchema = (t: ReturnType<typeof useI18n>['t']) => {
  return z.object({
    email: z.email(t('form:errors:email:invalid')),
  })
}

const baseClass = 'request-otp'

export default function LoginForm() {
  const { t } = useI18n()
  const router = useRouter()
  const formSchema = React.useMemo(() => createFormSchema(t), [t])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="mx-auto md:w-[50vw]">
      <Card className="p-12 pt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel required htmlFor="email">
                    {t('form:labels:email')}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder={t('form:placeholders:email:login')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center">
              <Button
                // loading
                size="xl"
                type="submit"
                variant="success"
                className="px-32 mx-auto"
                disabled={!form.formState.isValid}
              >
                {t('pages:login:action')}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  )
}
