import type { Story } from '@ladle/react'

import { Btn as Button } from './btn'
import useI18nStory from '@/i18n/useI18nStory'

export const Solid: Story = () => (
  <>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="default">Default</Button>
  </>
)

export const Variants: Story = () => (
  <>
    <Button variant="solid">Solid</Button>
    <Button variant="outlined" color="danger">
      Outlined
    </Button>
    <Button variant="dashed" color="warning">
      Dashed
    </Button>
    <Button variant="filled" color="success">
      Filled
    </Button>
    <Button variant="text" color="default">
      Text
    </Button>
    <Button variant="link" color="primary">
      Link
    </Button>
  </>
)

export const Sizes: Story = () => (
  <>
    <Button size="large">Large</Button>
    <Button size="middle">Middle</Button>
    <Button size="small">Small</Button>
  </>
)

export const Shapes: Story = () => (
  <>
    <Button shape="default">Default</Button>
    <Button shape="round">Round</Button>
    <Button shape="circle">+</Button>
  </>
)

export const States: Story = () => (
  <>
    <Button loading>Loading...</Button>
    <Button disabled>Disabled</Button>
  </>
)

export const I18n: Story = () => {
  const { loading, t } = useI18nStory()
  return loading ? (
    'Loading...'
  ) : (
    <>
      <Button loading>{t?.('general:loading')}</Button>
      <Button disabled>Disabled</Button>
    </>
  )
}
