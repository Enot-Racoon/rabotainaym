import type { Announcement } from '@/payload-types'

import Dump from '@/components/ui/dump'

export interface AnnouncementFormProps {
  initialValues?: Announcement
}

const AnnouncementForm = ({ initialValues }: AnnouncementFormProps) => {
  // const router = useRouter();
  return (
    <>
      <>AnnouncementForm</>
      <Dump announcement={initialValues} />
    </>
  )
}

export default AnnouncementForm
