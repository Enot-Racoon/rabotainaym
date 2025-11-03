'use client'

import { z } from 'zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'

import useI18n from '@/i18n/useI18n'
import Paths from '@/paths'
import Form from '@/components/ui/form'
import Select from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Message } from '@/components/Message'
import { Button } from '@/components/ui/button'

import type { Locality, Region, User } from '@/payload-types'

import CustomCard from './card'
import { createFormSchema } from './formSchema'

const SelfEmployed = ({ regions }: { regions: Region[] }) => {
  const { t } = useI18n()

  const router = useRouter()
  const searchParams = useSearchParams()
  const [error, setError] = React.useState<null | string>(null)
  const [loading, setLoading] = React.useState(false)
  const formRef = Form.useDisabled(loading)
  const formSchema = React.useMemo(() => createFormSchema(t), [t])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      region: '',
      locality: '',
      surname: '',
      name: '',
      phone: '',
      email: '',
      agree: undefined,
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true)

    const response = await fetch(Paths.api.user.create, {
      body: JSON.stringify({
        surname: data.surname,
        name: data.name,
        phone: data.phone,
        region: regions[Number(data.region)].id,
        locality: Number(data.locality),
        roles: ['self-employed'],
        email: data.email,
        patronymic: ' ',
        company: ' ',
        balance: 0,
        password: String(Math.random()),
      } satisfies Omit<User, 'id' | 'createdAt' | 'updatedAt'>),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })

    if (!response.ok) {
      const { errors } = (await response.json()) ?? {}
      const message =
        (errors ?? []).map((err: Error) => err?.message).join(', ') ||
        response.statusText ||
        'There was an error creating the account.'
      setLoading(false)
      setError(message)
      return
    }

    router.push(
      searchParams.get('redirect') ??
        `${Paths.page.account}?success=${encodeURIComponent(t('message:account:createdSuccess'))}`,
    )
  }

  const regionsList = React.useMemo(
    () =>
      regions.sort((a, b) => {
        // const bigRegionCode = [77, 78].findIndex((code) => code == a.code)
        // if (bigRegionCode > -1) return -1
        return String(a.name).localeCompare(b.name)
      }),
    [regions],
  )

  const localityList = (regions[Number(form.getValues().region)]?.localities?.docs ??
    []) as Locality[]

  return (
    <Form {...form}>
      <div className="grid gap-4">
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)}>
          <CustomCard
            footer={
              <Button loading={loading} type="submit" variant="success" size="xl">
                {t('pages:registration:action')}
              </Button>
            }
          >
            <Form.Field
              name="region"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label htmlFor="region" required>
                    {t('collections:regions:labels:singular')}
                  </Form.Label>
                  <Form.Control>
                    <Select
                      name={field.name}
                      value={field.value}
                      defaultValue={field.value}
                      onValueChange={(region) => {
                        field.onChange(region)
                        form.setValue('locality', '')
                      }}
                    >
                      <Select.Trigger
                        id="region"
                        ref={field.ref}
                        onBlur={field.onBlur}
                        className="h-14 text-lg border-none focus:ring-[transparent] focus:ring-offset-0"
                      >
                        <Select.Value placeholder={t('form:placeholders:region')} />
                      </Select.Trigger>
                      <Select.Content>
                        {regionsList.map(({ fullname }, idx) => (
                          <Select.Item key={idx} value={String(idx)}>
                            {fullname}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select>
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
            <Form.Field
              name="locality"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label htmlFor="locality" required>
                    {t('form:labels:locality')}
                  </Form.Label>
                  <Form.Control>
                    <Select
                      name={field.name}
                      value={field.value}
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      disabled={!form.getValues().region}
                    >
                      <Select.Trigger
                        id="locality"
                        ref={field.ref}
                        onBlur={field.onBlur}
                        className="h-14 text-lg border-none focus:ring-[transparent] focus:ring-offset-0"
                      >
                        <Select.Value placeholder={t('form:placeholders:locality')} />
                      </Select.Trigger>
                      <Select.Content>
                        {localityList.map(({ id, name }: Locality) => (
                          <Select.Item key={id} value={String(id)}>
                            {name}
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select>
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
            <Form.Field
              name="surname"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label htmlFor="surname" required>
                    {t('general:surname')}
                  </Form.Label>
                  <Form.Control>
                    <Input id="surname" placeholder={t('form:placeholders:surname')} {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
            <Form.Field
              name="name"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label htmlFor="name" required>
                    {t('general:name')}
                  </Form.Label>
                  <Form.Control>
                    <Input id="name" placeholder={t('form:placeholders:name')} {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
            <Form.Field
              name="phone"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label htmlFor="phone" required>
                    {t('form:labels:phone')}
                  </Form.Label>
                  <Form.Control>
                    <Input id="phone" placeholder={t('form:placeholders:phone')} {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
            <Form.Field
              name="email"
              control={form.control}
              render={({ field }) => (
                <Form.Item>
                  <Form.Label required htmlFor="email">
                    {t('form:labels:email')}
                  </Form.Label>
                  <Form.Control>
                    <Input
                      {...field}
                      id="email"
                      placeholder={t('form:placeholders:email:registration')}
                    />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
            <Form.Field
              name="agree"
              control={form.control}
              render={({ field: { value, ...field } }) => (
                <Form.Item>
                  <Form.Control>
                    <label
                      htmlFor="agree"
                      className="flex items-center gap-2 cursor-pointer select-none"
                    >
                      <input {...field} id="agree" type="checkbox" checked={value ?? false} />
                      {t('form:labels:agreePPD')}
                    </label>
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
          </CustomCard>
        </form>
        <Message error={error} />
      </div>
    </Form>
  )
}

export default SelfEmployed
