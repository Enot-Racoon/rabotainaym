'use client'

import toaster from '@/utilities/toaster'
import { Button } from '@/components/ui/button'

const ToasterSpec = () => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-4">
        <Button onClick={() => toaster.info('Info')}>Info</Button>
        <Button variant="success" onClick={() => toaster.success('Success')}>
          Success
        </Button>
        <Button variant="warning" onClick={() => toaster.warning('Warning')}>
          Warning
        </Button>
        <Button variant="danger" onClick={() => toaster.error('Error')}>
          Error
        </Button>
      </div>
    </div>
  )
}

export default ToasterSpec
