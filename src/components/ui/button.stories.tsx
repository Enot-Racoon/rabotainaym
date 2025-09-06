import type { Story } from '@ladle/react'
import { MessageSquare } from 'lucide-react'
import useI18nStory from '@/i18n/useI18nStory'

import { Button, config } from './button'

export const Primary: Story = () => {
  return <Button color="primary">Click me</Button>
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
      <Button color="danger" variant="outlined">
        Личный кабинет
      </Button>
      <Button color="warning">Search</Button>
      <Button color="success" variant="outlined" shape="round">
        Entire Rubricer
      </Button>
      <Button color="success">Account</Button>
      <Button color="success" variant="outlined">
        Refill
      </Button>
      <Button color="default" variant="outlined">
        Logout
      </Button>
      <Button color="success" variant="solid" shape="round">
        Plumbers
      </Button>
      <Button color="success" variant="outlined" shape="round">
        Electricians
      </Button>
      <Button color="warning" variant="solid" shape="circle" className="relative *:absolute">
        <MessageSquare fill="white" />
        <span
          className="-scale-x-100 translate-x-1 translate-y-1 text-white zoo"
          style={{ color: 'hsl(var(--warning))' }}
        >
          <MessageSquare fill="white" />
        </span>
      </Button>

      <Button color="warning" variant="solid" shape="round">
        TEST
      </Button>
      <Button color="warning" variant="solid" shape="round">
        TEST
      </Button>
    </div>
  )
}
