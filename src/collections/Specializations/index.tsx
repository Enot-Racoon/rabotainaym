export type Specialization = {
  name: string
}

export type SpecializationGroup = {
  name: string
  specializations: Specialization[]
}

export const specializations: SpecializationGroup[] = [
  {
    name: 'Репетиторы',
    specializations: [
      { name: 'Английский язык' },
      { name: 'Математика' },
      { name: 'Русский язык' },
      { name: 'Начальная школа' },
      { name: 'Музыка' },
    ],
  },
  {
    name: 'Стройка и Ремонт',
    specializations: [
      { name: 'Сантехники' },
      { name: 'Электрики' },
      { name: 'Плиточники' },
      { name: 'Штукатуры' },
      { name: 'Ремонт под ключ' },
    ],
  },
  {
    name: 'Красота',
    specializations: [
      { name: 'Макияж' },
      { name: 'Маникюр' },
      { name: 'Причёски' },
      { name: 'Эпиляция' },
      { name: 'Стилисты' },
    ],
  },
  {
    name: 'Документооборот',
    specializations: [
      { name: 'Юристы' },
      { name: 'Бухгалтеры' },
      { name: 'Риелторы' },
      { name: 'Бизнес-консультанты' },
      { name: 'Кадровики' },
    ],
  },

  {
    name: 'Репетиторы',
    specializations: [
      { name: 'Английский язык' },
      { name: 'Математика' },
      { name: 'Русский язык' },
      { name: 'Начальная школа' },
      { name: 'Музыка' },
    ],
  },
  {
    name: 'Ремонт',
    specializations: [
      { name: 'Сантехники' },
      { name: 'Электрики' },
      { name: 'Плиточники' },
      { name: 'Штукатуры' },
      { name: 'Ремонт под ключ' },
    ],
  },
  {
    name: 'Красота',
    specializations: [
      { name: 'Макияж' },
      { name: 'Маникюр' },
      { name: 'Причёски' },
      { name: 'Эпиляция' },
      { name: 'Стилисты' },
    ],
  },
  {
    name: 'Учет',
    specializations: [
      { name: 'Юристы' },
      { name: 'Бухгалтеры' },
      { name: 'Риелторы' },
      { name: 'Бизнес-консультанты' },
      { name: 'Кадровики' },
    ],
  },

  {
    name: 'Репетиторы',
    specializations: [
      { name: 'Английский язык' },
      { name: 'Математика' },
      { name: 'Русский язык' },
      { name: 'Начальная школа' },
      { name: 'Музыка' },
    ],
  },
  {
    name: 'Ремонт',
    specializations: [
      { name: 'Сантехники' },
      { name: 'Электрики' },
      { name: 'Плиточники' },
      { name: 'Штукатуры' },
      { name: 'Ремонт под ключ' },
    ],
  },
  {
    name: 'Красота',
    specializations: [
      { name: 'Макияж' },
      { name: 'Маникюр' },
      { name: 'Причёски' },
      { name: 'Эпиляция' },
      { name: 'Стилисты' },
    ],
  },
  {
    name: 'Бухгалтерия',
    specializations: [
      { name: 'Юристы' },
      { name: 'Бухгалтеры' },
      { name: 'Риелторы' },
      { name: 'Бизнес-консультанты' },
      { name: 'Кадровики' },
    ],
  },

  {
    name: 'Репетиторы',
    specializations: [
      { name: 'Английский язык' },
      { name: 'Математика' },
      { name: 'Русский язык' },
      { name: 'Начальная школа' },
      { name: 'Музыка' },
    ],
  },
  {
    name: 'Ремонт',
    specializations: [
      { name: 'Сантехники' },
      { name: 'Электрики' },
      { name: 'Плиточники' },
      { name: 'Штукатуры' },
      { name: 'Ремонт под ключ' },
    ],
  },
  {
    name: 'Красота',
    specializations: [
      { name: 'Макияж' },
      { name: 'Маникюр' },
      { name: 'Причёски' },
      { name: 'Эпиляция' },
      { name: 'Стилисты' },
    ],
  },
  {
    name: 'Учет',
    specializations: [
      { name: 'Юристы' },
      { name: 'Бухгалтеры' },
      { name: 'Риелторы' },
      { name: 'Бизнес-консультанты' },
      { name: 'Кадровики' },
    ],
  },
]

export const Specializations = () => {
  return (
    <div className="container grid grid-cols-4 gap-x-14 gap-y-10">
      {specializations.map(({ name, specializations }, keyGroup) => (
        <section className="grid gap-2" key={keyGroup}>
          <h3 className="text-[#444] text-2xl pl-4" children={name} />
          <ul className="text-[#777] text-lg leading-8">
            {specializations.concat({ name: 'Все...' }).map(({ name }, key) => (
              <li
                key={key}
                children={name}
                className="pl-4 rounded-[8px] hover:bg-[#e8e8e88e] hover:text-[#ef5e54] cursor-pointer"
              />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
