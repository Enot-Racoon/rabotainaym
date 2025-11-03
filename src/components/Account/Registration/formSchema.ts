import { z } from 'zod'
import useI18n from '@/i18n/useI18n'

export const createFormSchema = (t: ReturnType<typeof useI18n>['t'], hasCompany = false) => {
  return z.object({
    email: z.email(t('form:errors:email:invalid')),
    agree: z.boolean(t('form:errors:agreePPD')),
    surname: z.string().min(1, t('form:errors:cyrillicOnly')),
    name: z.string().min(1, t('form:errors:cyrillicOnly')),
    company: !hasCompany ? z.string().optional() : z.string().min(2, t('form:errors:company')),
    // todo: define better schema phone
    region: z.string().min(1, t('form:errors:region')),
    locality: z.string().min(1, t('form:errors:locality')),
    phone: z.string().min(7, t('form:errors:numbersOnly')),
  })
}
