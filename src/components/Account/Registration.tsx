'use client'

import { z } from 'zod'
import React from 'react'
import { useForm } from 'react-hook-form'
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

export default function RegistrationForm() {
  const { t } = useI18n()
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
    <>
      <Card className="mx-auto p-12 pt-8 md:w-[50vw]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>{t('form:labels:email')}</FormLabel>
                  <FormControl>
                    <Input placeholder={t('form:placeholders:email')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center">
              <Button
                type="submit"
                size="xl"
                variant="success"
                className="px-32 mx-auto"
                disabled={!form.formState.isValid}
              >
                {t('pages:login')}
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </>
  )
}
