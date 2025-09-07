import type { Story } from '@ladle/react'
import { MessageSquare } from 'lucide-react'
import useI18nStory from '@/i18n/useI18nStory'

import { Button, config } from './button'

export const Primary: Story = () => {
  return <Button variant="primary">Click me</Button>
}

export const AllVariants: Story = () => {
  return (
    <div className="grid gap-4">
      {Object.keys(config.variants).map((variant) => {
        return (
          <div key={variant} className="flex items-end gap-4">
            {Object.keys(config.variants[variant as keyof typeof config.variants]).map(
              (value, key) => {
                return (
                  <div key={value} className="grid gap-2">
                    {!key && <p>{variant}:</p>}
                    <Button {...{ [variant]: value }}>{value === 'true' ? variant : value}</Button>
                  </div>
                )
              },
            )}
          </div>
        )
      })}
    </div>
  )
}

export const I18n: Story = () => {
  const { loading, t } = useI18nStory()
  return loading ? (
    'Loading...'
  ) : (
    <>
      <Button loading>{t?.('general:loading')}</Button>
      <Button disabled>{t?.('authentication:login')}</Button>
    </>
  )
}

export const Other = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="danger" appearance="outlined">
        Личный кабинет
      </Button>
      <Button variant="warning">Search</Button>
      <Button variant="success" appearance="outlined" shape="round">
        Entire Rubricer
      </Button>
      <Button variant="success">Account</Button>
      <Button variant="success" appearance="outlined">
        Refill
      </Button>
      <Button appearance="outlined">Logout</Button>
      <Button variant="success" appearance="solid" shape="round">
        Plumbers
      </Button>
      <Button variant="success" appearance="outlined" shape="round">
        Electricians
      </Button>
      <Button variant="warning" appearance="solid" shape="circle" className="relative *:absolute">
        <MessageSquare fill="white" />
        <span
          className="-scale-x-100 translate-x-1 translate-y-1 text-white zoo"
          style={{ color: 'hsl(var(--warning))' }}
        >
          <MessageSquare fill="white" />
        </span>
      </Button>
    </div>
  )
}
