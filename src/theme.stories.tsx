import type { Story } from '@ladle/react'

export const Colors: Story = () => {
  return (
    <ul className="grid grid-cols-6 justify-center flex-wrap gap-y-4 gap-x-2 p-4">
      {[
        'background',
        'foreground',

        'card',
        'card-foreground',

        'popover',
        'popover-foreground',

        'primary',
        'primary-foreground',

        'secondary',
        'secondary-foreground',

        'muted',
        'muted-foreground',

        'accent',
        'accent-foreground',

        'destructive',
        'destructive-foreground',

        'border',
        'ring',
        'input',

        'success',
        'warning',
        'error',
        'error-bg',
      ].map((name) => (
        <li key={name} className="grid justify-center gap-1 text-center">
          <div className="flex justify-center gap-2">
            <div style={{ backgroundColor: `hsl(var(--${name}))` }} className="size-16 rounded" />
            <div
              style={{ borderColor: `hsl(var(--${name}))` }}
              className="border size-16 rounded"
            />
          </div>
          {name}
        </li>
      ))}
      <li className="w-[136px]" />
    </ul>
  )
}

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
