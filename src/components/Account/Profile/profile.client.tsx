'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type ChangeEvent, useMemo, useRef, useState } from 'react'

import api from '@/api'
import useI18n from '@/i18n/useI18n'
import useAsync from '@/hooks/useAsync'
import Card from '@/components/ui/card'
import Form from '@/components/ui/form'
import Select from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Message } from '@/components/Message'
import { Button } from '@/components/ui/button'
import type { Locality, Region, User } from '@/payload-types'

import Avatar from './avatar.svg'

const createFormSchema = (t: ReturnType<typeof useI18n>['t'], hasCompany = false) => {
  return z.object({
    // avatar: z
    //   .file()
    //   .max(1024 ** 20 * 5) // 5mb
    //   .mime(['image/png', 'image/jpeg', 'image/jpg']), // .optional(),
    email: z.email(t('form:errors:email:invalid')),
    surname: z.string().min(2, t('form:errors:cyrillicOnly')),
    name: z.string().min(2, t('form:errors:cyrillicOnly')),
    company: !hasCompany ? z.string() : z.string().min(2, t('form:errors:company')),
    region: z.string().min(1, t('form:errors:region')),
    locality: z.string().min(1, t('form:errors:locality')),
    phone: z.string().min(7, t('form:errors:numbersOnly')),
  })
}

const ProfileFormClient = ({ user, regions }: { user: User; regions: Region[] }) => {
  const { t } = useI18n()
  const [saved, setSaved] = useState(false)
  const showSaved = () => {
    setSaved(true)
    setTimeout(() => {
      if (setSaved) setSaved(false)
    }, 2000)
  }
  const { execute, loading, error } = useAsync(
    (data: Partial<Omit<User, 'id' | 'password' | 'roles' | 'email'>>) => {
      return api.update({ data, id: user.id, collection: 'users' })
    },
  )
  const avatarRef = useRef<HTMLInputElement>(null)
  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    console.log(e.target.files, file)
    // if (file) form.setValue('avatar', file)
  }
  const handleAvatarClick = () => avatarRef.current?.click()

  const formSchema = useMemo(() => createFormSchema(t), [t])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      email: user.email,
      surname: user.surname,
      name: user.name,
      company: user.company,
      region: String(
        regions.findIndex(
          ({ id }) =>
            typeof user.region === 'object' && 'id' in user.region && id === user.region.id,
        ),
      ),
      locality:
        typeof user.locality === 'object' && 'id' in user.locality ? String(user.locality.id) : '',
      phone: user.phone,
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    void execute({
      surname: data.surname,
      name: data.name,
      phone: data.phone,
      region: regions[Number(data.region)].id,
      locality: Number(data.locality),
      company: data.company,
    }).then(showSaved)
  }

  const localityList = (regions[Number(form.getValues().region)]?.localities?.docs ??
    []) as Locality[]

  // const avatar = form.watch('avatar')
  // console.log(avatar)

  return (
    <Form {...form}>
      <div className="flex flex-col gap-4">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
            <div className="h-[230px] bg-[#eaeaea] grid justify-around items-center">
              {typeof user.avatar === 'object' && user.avatar?.url ? (
                <img
                  alt={user.name}
                  src={user.avatar.url}
                  onClick={() => handleAvatarClick()}
                  className="cursor-pointer block size-[158px] min-w-[158px] min-h-[158px] rounded-full bg-[pink]"
                />
              ) : (
                <Avatar className="cursor-pointer" onClick={handleAvatarClick} />
              )}{' '}
              {/* {form.formState.errors.avatar && ( */}
              {/*   <p className="text-red-500 text-sm">{form.formState.errors.avatar.message}</p> */}
              {/* )} */}
              {/* <Form.Field */}
              {/*   name="avatar" */}
              {/*   control={form.control} */}
              {/*   render={({ field }) => ( */}
              {/*     <Form.Item> */}
              {/*       <Form.Label htmlFor="region" required> */}
              {/*         {t('collections:regions:labels:singular')} */}
              {/*       </Form.Label> */}
              {/*       <Form.Control> */}
              {/*         <input */}
              {/*           id="avatar" */}
              {/*           type="file" */}
              {/*           accept="image/*" */}
              {/*           className="hidden" */}
              {/*           {...field} */}
              {/*           ref={avatarRef} */}
              {/*         // onChange={handleAvatarChange} */}
              {/*         /> */}
              {/*       </Form.Control> */}
              {/*       <Form.Message /> */}
              {/*     </Form.Item> */}
              {/*   )} */}
              {/* /> */}
              <input
                ref={avatarRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </div>
            <Card.Content className="grid gap-6 p-12 pt-8">
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
                          {regions.map(({ fullname }, idx) => (
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
                        readOnly
                        disabled
                        {...field}
                        id="email"
                        placeholder={t('form:placeholders:email:registration')}
                      />
                    </Form.Control>
                    <Form.Message />
                  </Form.Item>
                )}
              />
              {saved && (
                <div className="mx-auto text-lg text-success">{t('message:saved-successful')}</div>
              )}
              <Button
                className="mt-4 mx-auto"
                loading={loading}
                disabled={!form.formState.isDirty || !form.formState.isValid}
                type="submit"
                variant="success"
                size="xl"
              >
                {t('general:save')}
              </Button>
            </Card.Content>
          </Card>
        </form>
        <Message error={error?.message} />
      </div>
    </Form>
  )
}

export default ProfileFormClient
