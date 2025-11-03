import Link from 'next/link'
import Paths from '@/paths'

export default function Hero() {
  // todo: i18n
  return (
    <div className="bg-card flex flex-col gap-4 items-center pt-4">
      <div className="container flex justify-start">
        <div className="w-full pb-[138px] bg-right-bottom bg-no-repeat bg-[url('/hero.png')]">
          <div className="text-[#444] text-[40px] leading-[1.4] w-[680px]">
            Тысячи объявлений поиска работы и сотрудников
            <br /> в России
          </div>
          <Link href={Paths.page.account.announcements.create}>
            <button className="mt-[14px] rounded border-2 border-[#EF5E54] text-[#EF5E54] px-[26px] py-[18px] font-semibold text-2xl leading-none">
              Подать объявление
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
