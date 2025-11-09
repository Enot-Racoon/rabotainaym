'use client'

import { z } from 'zod'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import type { Announcement, Locality, Region, SpecialtyCategory, User } from '@/payload-types'

import api from '@/api'
import useI18n from '@/i18n/useI18n'
import useAsync from '@/hooks/useAsync'
import populate from '@/utilities/populate'
import Card from '@/components/ui/card'
import Form from '@/components/ui/form'
import Select from '@/components/ui/select'
import { Message } from '@/components/Message'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { weekDayKeys, workTimeOptions } from '@/fields/workTime'
import { useRouter } from 'next/navigation'
import Paths from '@/paths'
import { toast } from 'sonner'

export interface AnnouncementFormProps {
  user: User
  regions: Region[]
  specialties: SpecialtyCategory[]
  initialValues?: Announcement
}

type PartialFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

const createFormSchema = (t: ReturnType<typeof useI18n>['t']) => {
  return z.object({
    region: z.string().min(1, t('form:errors:region')),
    locality: z.string().min(1, t('form:errors:locality')),
    specialty: z.string().min(1, t('form:errors:specialty')),
    skills: z.string().min(1, t('form:errors:skills')),
    startTime: z.string().min(1, t('form:errors:startTime')),
    endTime: z.string().min(1, t('form:errors:endTime')),
    mon: z.boolean(),
    tue: z.boolean(),
    wed: z.boolean(),
    thu: z.boolean(),
    fri: z.boolean(),
    sat: z.boolean(),
    sun: z.boolean(),
  })
}

const AnnouncementFormClient = ({
  user,
  regions,
  specialties,
  initialValues: data,
}: AnnouncementFormProps) => {
  const { t } = useI18n()
  const router = useRouter()
  const formSchema = useMemo(() => createFormSchema(t), [t])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'all',
    defaultValues: {
      skills: data?.skills,
      region: ((region) =>
        !region ? '' : String(regions.findIndex(({ id }) => region?.id === id)))(
        populate(data?.region ?? user.region),
      ),
      locality: String(populate(data?.locality ?? user.locality)?.id ?? ''),
      specialty: String(populate(data?.specialty)?.id ?? ''),
      startTime: data?.workTime?.start ?? '',
      endTime: data?.workTime?.end ?? '',
      mon: data?.workTime?.days?.mon ?? false,
      tue: data?.workTime?.days?.tue ?? false,
      wed: data?.workTime?.days?.wed ?? false,
      thu: data?.workTime?.days?.thu ?? false,
      fri: data?.workTime?.days?.fri ?? false,
      sat: data?.workTime?.days?.sat ?? false,
      sun: data?.workTime?.days?.sun ?? false,
    },
  })
  const { execute, loading, error } = useAsync(
    (data: PartialFields<Omit<Announcement, 'createdAt' | 'updatedAt'>, 'id'>) => {
      if (!data.id) {
        return api.create({ collection: 'announcements', data })
      }
      return api.update({ collection: 'announcements', data, id: data.id })
    },
  )
  const formRef = Form.useDisabled(loading)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await execute({
      id: data?.id,
      region: regions[Number(values.region)].id,
      locality: Number(values.locality),
      status: data?.status ?? 'unpublished',
      title: data?.title ?? ' ',
      specialty: Number(values?.specialty),
      skills: values?.skills,
      author: user.id,
      workTime: {
        start: values.startTime as never,
        end: values.endTime as never,
        days: {
          mon: values.mon,
          tue: values.tue,
          wed: values.wed,
          thu: values.thu,
          fri: values.fri,
          sat: values.sat,
          sun: values.sun,
        },
      },
    })

    toast.success(t('message:saved-successful'))

    if (!data?.id && result.id) {
      router.push([Paths.page.account.announcements, result.id].join('/'))
    }
  }

  const currentRegion = form.getValues().region
  const localityList = useMemo(
    () => (regions[Number(currentRegion)]?.localities?.docs ?? []) as Locality[],
    [regions, currentRegion],
  )

  return (
    <Form {...form}>
      <div className="flex flex-col gap-4">
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)}>
          <Card>
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
                    <Form.Label htmlFor={field.name} required>
                      {t('form:labels:locality')}
                    </Form.Label>
                    <Form.Control>
                      <Select
                        name={field.name}
                        value={field.value}
                        onValueChange={field.onChange}
                        disabled={!form.getValues().region}
                      >
                        <Select.Trigger
                          id={field.name}
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
                name="specialty"
                control={form.control}
                render={({ field }) => (
                  <Form.Item>
                    <Form.Label htmlFor={field.name} required>
                      {t('form:labels:specialty')}
                    </Form.Label>
                    <Form.Control>
                      <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                        <Select.Trigger
                          id={field.name}
                          ref={field.ref}
                          onBlur={field.onBlur}
                          className="h-14 text-lg border-none focus:ring-[transparent] focus:ring-offset-0"
                        >
                          <Select.Value placeholder={t('form:placeholders:specialty')} />
                        </Select.Trigger>
                        <Select.Content>
                          {specialties.map((group) => (
                            <Select.Group key={group.id}>
                              <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
                                {group.name}
                              </div>
                              {(group.specialties?.docs ?? []).map((speciality) => {
                                const { id, name } = populate(speciality)
                                return (
                                  <Select.Item key={id} value={String(id)}>
                                    {name}
                                  </Select.Item>
                                )
                              })}
                            </Select.Group>
                          ))}
                        </Select.Content>
                      </Select>
                    </Form.Control>
                  </Form.Item>
                )}
              />

              <Form.Field
                name="skills"
                render={({ field }) => (
                  <Form.Item>
                    <Form.Label htmlFor={field.name} required>
                      {t('form:labels:skills')}
                    </Form.Label>
                    <Form.Control>
                      <Textarea
                        {...field}
                        rows={12}
                        id={field.name}
                        className="text-lg border-none !ring-0"
                        placeholder={t('form:placeholders:skills')}
                      />
                    </Form.Control>
                  </Form.Item>
                )}
              />

              <div className="grid gap-2.5">
                <Form.Label htmlFor="startTime">{t('form:labels:work-time')}</Form.Label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2.5">
                    <Form.Field
                      name="startTime"
                      control={form.control}
                      render={({ field }) => (
                        <Form.Item>
                          <Form.Control>
                            <Select
                              name={field.name}
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <Select.Trigger
                                id={field.name}
                                ref={field.ref}
                                onBlur={field.onBlur}
                                className="h-14 text-lg border-none focus:ring-[transparent] focus:ring-offset-0"
                              >
                                <Select.Value placeholder={t('general:selectValue')} />
                              </Select.Trigger>
                              <Select.Content>
                                {workTimeOptions.map(({ label, value }) => (
                                  <Select.Item key={value} value={String(value)}>
                                    {String(label)}
                                  </Select.Item>
                                ))}
                              </Select.Content>
                            </Select>
                          </Form.Control>
                        </Form.Item>
                      )}
                    />
                    -
                    <Form.Field
                      name="endTime"
                      control={form.control}
                      render={({ field }) => (
                        <Form.Item>
                          <Form.Control>
                            <Select
                              name={field.name}
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <Select.Trigger
                                id="endTime"
                                ref={field.ref}
                                onBlur={field.onBlur}
                                className="h-14 text-lg border-none focus:ring-[transparent] focus:ring-offset-0"
                              >
                                <Select.Value placeholder={t('general:selectValue')} />
                              </Select.Trigger>
                              <Select.Content>
                                {workTimeOptions.map(({ label, value }) => (
                                  <Select.Item key={value} value={String(value)}>
                                    {String(label)}
                                  </Select.Item>
                                ))}
                              </Select.Content>
                            </Select>
                          </Form.Control>
                        </Form.Item>
                      )}
                    />
                  </div>
                  <div className="flex items-center gap-2.5">
                    {weekDayKeys.map((day) => (
                      <Form.Field
                        key={day}
                        name={day}
                        control={form.control}
                        render={({ field }) => (
                          <Form.Item className="flex flex-col justify-start items-center">
                            <Form.Label htmlFor={day}>{t(`week-days:${day}`)}</Form.Label>
                            <Form.Control>
                              <Checkbox
                                id={field.name}
                                ref={field.ref}
                                name={field.name}
                                onBlur={field.onBlur}
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </Form.Control>
                          </Form.Item>
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <Button
                className="mt-4 mx-auto"
                loading={loading}
                disabled={/* !form.formState.isDirty ||  */ !form.formState.isValid}
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

export default AnnouncementFormClient
