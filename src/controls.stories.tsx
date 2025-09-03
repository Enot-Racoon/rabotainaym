import type { Story } from '@ladle/react'

export const Controls: Story<{
  label: string
  disabled: boolean
  count: number
  range: number
  colors: string[]
  variant: string
  size: string
  airports: string[]
}> = ({ count, range, disabled, label, colors, variant, size, airports }) => (
  <>
    <p>Count: {count}</p>
    <p>Range: {range}</p>
    <p>Disabled: {disabled ? 'yes' : 'no'}</p>
    <p>Label: {label}</p>
    <p>Colors: {colors.join(',')}</p>
    <p>Variant: {variant}</p>
    <p>Size: {size}</p>
    <p>Airports: {airports?.join(',')}</p>
  </>
)

Controls.args = {
  label: 'Hello world',
  disabled: false,
  count: 2,
  colors: ['Red', 'Blue'],
}
Controls.argTypes = {
  variant: {
    options: ['primary', 'secondary'],
    control: { type: 'radio' }, // or type: inline-radio
    defaultValue: 'primary',
  },
  size: {
    options: ['small', 'medium', 'big', 'huuuuge'],
    control: { type: 'select' }, // or type: multi-select
  },
  airports: {
    name: 'International Airports', // custom label
    options: ['sfo', 'slc', 'prg'],
    // custom option labels
    labels: {
      sfo: 'San Francisco',
      slc: 'Salt Lake City',
      prg: 'Prague',
    },
    control: { type: 'check' }, // or type: inline-check
  },
  range: {
    control: { type: 'range', min: 1, max: 10, step: 0.5 },
    defaultValue: 5,
  },
}
