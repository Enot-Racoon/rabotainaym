'use client'

import { z } from 'zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { REGEXP_ONLY_DIGITS } from 'input-otp'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { cn } from '@/utilities/ui'
import useI18n from '@/i18n/useI18n'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import InputOTP from '@/components/ui/input-otp'
import PageHeader from '@/components/PageHeader'
import LoginIcon from '@/components/Account/login.svg'
import PageMetaTitle from '@/components/PageMetaTitle'

const createRequestFormSchema = (t: ReturnType<typeof useI18n>['t']) => {
  return z.object({
    email: z.email(t('form:errors:email:invalid')),
  })
}

const createSendFormSchema = (t: ReturnType<typeof useI18n>['t']) => {
  return z.object({
    code: z.string(t('form:errors:otp:wrong')).min(6, t('form:errors:otp:length')),
  })
}

export default function LoginByOTP() {
  const { t } = useI18n()
  const router = useRouter()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [waitingOTP, setWaitingOTP] = useState(false)
  const requestFormSchema = React.useMemo(() => createRequestFormSchema(t), [t])
  const sendFormSchema = React.useMemo(() => createSendFormSchema(t), [t])

  const requestForm = useForm<z.infer<typeof requestFormSchema>>({
    resolver: zodResolver(requestFormSchema),
    mode: 'onBlur',
    defaultValues: { email: '' },
  })

  const sendForm = useForm<z.infer<typeof sendFormSchema>>({
    resolver: zodResolver(sendFormSchema),
    mode: 'onSubmit',
    defaultValues: { code: '' as never },
  })

  async function requestOTP({ email }: z.infer<typeof requestFormSchema>) {
    if (waitingOTP) return
    const url = '/api/users/otp/request'
    sendForm.reset()
    try {
      setError(false)
      setLoading(true)
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'email', value: email }),
      })
      if (!response.ok && process.env.NODE_ENV === 'production') {
        setError(true)
        requestForm.setError('email', {
          type: 'error',
          message: t('form:errors:email:not-found'),
        })
      } else {
        setWaitingOTP(true)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  async function sendOTP({ code }: z.infer<typeof sendFormSchema>) {
    const email = requestForm.getValues().email
    if (!email || !waitingOTP) return

    const url = '/api/users/otp/login'

    try {
      setError(false)
      setLoading(true)
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'email',
          value: email,
          otp: code,
        }),
      })
      if (!response.ok) {
        setError(true)
        setLoading(false)
        sendForm.setError('code', {
          type: 'error',
          message: t('form:errors:otp:wrong'),
        })
      } else {
        router.push('/account')
      }
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <div className="container gap-10 justify-center grid mt-8 mb-48">
      <LoginIcon className="mx-auto" />
      <PageMetaTitle>
        {!waitingOTP
          ? t('pages:login-by-otp:header:request')
          : `${t('pages:login-by-otp:header:login')} ${requestForm.getValues().email}`}{' '}
        - {t('general:appName')}
      </PageMetaTitle>
      <PageHeader>
        {!waitingOTP
          ? t('pages:login-by-otp:header:request')
          : `${t('pages:login-by-otp:header:login')} ${requestForm.getValues().email}`}
      </PageHeader>

      <div className={cn('mx-auto', { 'md:w-[50vw]': !waitingOTP })}>
        <Card className="px-12 py-8">
          <Form {...requestForm}>
            <form
              onSubmit={requestForm.handleSubmit(requestOTP)}
              className={cn('space-y-8', { hidden: waitingOTP })}
            >
              <FormField
                name="email"
                control={requestForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel required htmlFor="email">
                      {t('form:labels:email')}
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder={t('form:placeholders:email:login')}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="text-center">
                <Button
                  size="xl"
                  type="submit"
                  variant="success"
                  className="px-32 mx-auto"
                  loading={loading}
                  disabled={!requestForm.formState.isValid}
                >
                  {t('pages:login:action')}
                </Button>
              </div>
            </form>
          </Form>
          <Form {...sendForm}>
            <form
              onKeyUp={(e) => {
                if (e.code === 'Enter') e.currentTarget.requestSubmit()
              }}
              onSubmit={sendForm.handleSubmit(sendOTP)}
              className={cn('space-y-4 grid content-center justify-center', {
                hidden: !waitingOTP,
              })}
            >
              <FormField
                name="code"
                control={sendForm.control}
                render={({ field }) => (
                  <FormItem
                    className={cn(
                      '[&>div[data-input-otp-container]]:justify-center',
                      error && '[&>div[data-input-otp-container]>div>div]:bg-error-bg',
                      !error && '[&>div[data-input-otp-container]>div>div]:bg-background',
                    )}
                  >
                    <FormControl>
                      <InputOTP
                        pattern={REGEXP_ONLY_DIGITS}
                        maxLength={6}
                        {...field}
                        onChange={(code) => {
                          field.onChange(code)
                          if (code?.length === 6) void sendOTP({ code })
                        }}
                      >
                        <InputOTP.Group className="m-0 *:h-20">
                          <InputOTP.Slot className="text-3xl" index={0} />
                          <InputOTP.Slot className="text-3xl" index={1} />
                          <InputOTP.Slot className="text-3xl" index={2} />
                          <InputOTP.Slot className="text-3xl" index={3} />
                          <InputOTP.Slot className="text-3xl" index={4} />
                          <InputOTP.Slot className="text-3xl" index={5} />
                        </InputOTP.Group>
                      </InputOTP>
                    </FormControl>
                    <FormMessage className="whitespace-pre-wrap text-center" />
                  </FormItem>
                )}
              />
              <Button
                size="sm"
                disabled={!error}
                variant="secondary"
                appearance="outlined"
                className={cn('', { hidden: !error })}
                onClick={() => setWaitingOTP(false)}
              >
                {t('pages:login-by-otp:action:newOTP')}
              </Button>
              <Button
                size="xl"
                type="submit"
                variant="success"
                className="px-32 mx-auto"
                loading={loading}
                disabled={!sendForm.formState.isValid}
              >
                {t('pages:login:action')}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  )
}
