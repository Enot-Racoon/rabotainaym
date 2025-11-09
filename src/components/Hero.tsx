import Link from 'next/link'
import Paths from '@/paths'
import { Button } from '@/components/ui/button'

export default function Hero() {
  // todo: i18n
  return (
    <div className="bg-card flex flex-col gap-4 items-center pt-4 bg-no-repeat bg-[url('/hero1workers.svg')] bg-[length:auto_220px] sm:bg-[length:auto_240px] bg-[left_40px_bottom_-20px] md:bg-[length:auto_310px] sm:bg-[center_bottom_-40px] md:bg-[right_calc(50%-232px)_bottom_-40px] lg:bg-[right_calc(50%-120px)_bottom_-40px] xl:bg-[right_calc(50%-80px)_bottom_-40px]">
      <div className="container flex justify-start">
        <div className="flex flex-col justify-between md:justify-start gap-4 w-full pb-[220px] md:pb-[138px] _bg-no-repeat _bg-[url('/hero1workers.svg')] _bg-[length:auto_220px] bg-left-bottom _bg-[left_bottom_-6%] _bg-[length:130%] _md:bg-[left_280%_bottom_-50%] _md:bg-[length:85%] _lg:bg-[length:65%] _lg:bg-[left_90%_bottom_-60%]">
          <div className="text-[#444] text-[40px] leading-[1.4] md:w-[680px]">
            Тысячи объявлений поиска работы и сотрудников
            <br /> в России
          </div>
          <Link href={Paths.page.account.announcements.create}>
            <Button
              size="xl"
              variant="danger"
              appearance="outlined"
              className="w-full md:w-auto font-semibold text-2xl leading-none px-[26px] py-[18px]"
            >
              Подать объявление
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
