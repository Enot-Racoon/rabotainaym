export type NameCase = {
  nominative: string
  genitive: string
  dative: string
  accusative: string
  ablative: string
  prepositional: string
  locative: string
}

export type Coordinates = {
  lat: number
  lon: number
}

export type Timezone = {
  tzid: string
  abbreviation: string
  utcOffset: string
  mskOffset: string
}

export type City = {
  name: string
  name_alt: string
  label: string
  type: 'Город'
  typeShort: 'г'
  contentType: 'city'
  id: string
  okato: string
  oktmo: string
  guid: string
  isDualName: boolean
  isCapital: boolean
  zip: number
  population: number
  yearFounded: number | string
  yearCityStatus: number | string
  name_en: string
  namecase: NameCase
  coords: Coordinates
  timezone: Timezone
  region: Region
}

export type CapitalCity = Pick<City, 'name' | 'label' | 'id' | 'okato' | 'oktmo' | 'contentType'>

export type Region = {
  name: string
  label: string
  type: 'Республика' | 'Край' | 'Область' | 'Город' | 'Автономная область' | 'Автономный округ'
  typeShort: 'Респ' | 'край' | 'обл' | 'г' | 'Аобл' | 'АО'
  contentType: 'region' | 'city'
  id: string
  okato: string
  oktmo: string
  guid: string
  code: string | number
  'iso_3166-2': string
  population: number
  yearFounded: number
  area: number
  fullname: string
  unofficialName?: string
  name_en: string
  district: string
  namecase: NameCase
  capital?: CapitalCity
}
