'use client'

import { z } from 'zod'
import React, { PropsWithChildren, ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import useI18n from '@/i18n/useI18n'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Label } from '@/components/ui/label'
import { cn } from '@/utilities/ui'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

const createFormSchema = (t: ReturnType<typeof useI18n>['t']) => {
  return z.object({
    email: z.email(t('form:errors:email:invalid')),
    region: z.string(),
  })
}

const CustomCard = (
  props: PropsWithChildren<Partial<Record<'title' | 'description' | 'footer', ReactNode>>>,
) => {
  return (
    <Card className="rounded-tl-none">
      {(props.title || props.description) && (
        <CardHeader>
          {props.title && <CardTitle>{props.title}</CardTitle>}
          {props.description && <CardDescription>{props.description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent
        className={cn('grid gap-6 p-12', props.title || props.description ? 'pt-0' : 'pt-8')}
      >
        {props.children}
      </CardContent>
      {props.footer && <CardFooter className="justify-center">{props.footer}</CardFooter>}
    </Card>
  )
}

const SelfEmployed = () => {
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
    <Form {...form}>
      <CustomCard
        footer={
          <Button type="submit" variant="success" size="xl">
            {t('pages:registration:action')}
          </Button>
        }
      >
        <FormField
          name="region"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="region" required>
                {t('collections:regions:labels:singular')}
              </FormLabel>
              <FormControl>
                <Input placeholder={t('form:placeholders:region')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel required htmlFor="email">
                {t('form:labels:email')}
              </FormLabel>
              <FormControl>
                <Input placeholder={t('form:placeholders:email:registration')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CustomCard>
    </Form>
  )
}

const LegalEntity = () => {
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
    <Form {...form}>
      <CustomCard
        footer={
          <Button type="submit" variant="success" size="xl">
            {t('pages:registration:action')}
          </Button>
        }
      >
        <div className="grid gap-3">
          <Label size="lg" htmlFor="tabs-demo-current">
            Current password
          </Label>
          <Input id="tabs-demo-current" type="password" />
        </div>
        <div className="grid gap-3">
          <Label size="lg" htmlFor="tabs-demo-new">
            New password
          </Label>
          <Input id="tabs-demo-new" type="password" />
        </div>
      </CustomCard>
    </Form>
  )
}

export default function RegistrationForm() {
  const { t } = useI18n()

  return (
    <div className="">
      <Tabs defaultValue="self-employed">
        <TabsList>
          <TabsTrigger value="self-employed">
            {t('pages:registration:as-self-employed')}
          </TabsTrigger>
          <TabsTrigger value="legal-entity">{t('pages:registration:as-legal-entity')}</TabsTrigger>
        </TabsList>
        <TabsContent value="self-employed">
          <SelfEmployed />
        </TabsContent>
        <TabsContent value="legal-entity">
          <LegalEntity />
        </TabsContent>
      </Tabs>
    </div>
  )
}
