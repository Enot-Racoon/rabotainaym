'use server'

import populate from '@/utilities/populate'
import { fetchSpecialties } from '@/collections/Specialties'

const Specialties = async () => {
  const groups = await fetchSpecialties()

  return (
    <div className="container grid items-start gap-x-14 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
      {groups
        .filter(({ specialties }) => (specialties?.docs ?? []).length >= 5)
        .slice(0, 20)
        .map(({ name, specialties }, keyGroup) => (
          <section className="grid gap-2" key={keyGroup}>
            <h3 className="text-[#444] text-2xl pl-4">{name}</h3>
            <ul className="text-[#777] text-lg leading-8">
              {(specialties?.docs ?? []).slice(0, 5).map((specialty, key) => (
                <li
                  key={key}
                  className="pl-4 rounded-[8px] hover:bg-[#e8e8e88e] hover:text-[#ef5e54] cursor-pointer"
                >
                  {populate(specialty).name}
                </li>
              ))}
            </ul>
          </section>
        ))}
    </div>
  )
}

export default Specialties
