import * as migration_20250929_212024_init from './20250929_212024_init'
import * as migration_20250929_212209_pre_seed_regions from './20250929_212209_pre_seed_regions'
import * as migration_20250929_212302_seed_regions from './20250929_212302_seed_regions'
import * as migration_20250929_212349_seed_localities from './20250929_212349_seed_localities'
import * as migration_20250929_212426_post_seed_localities from './20250929_212426_post_seed_localities'
import * as migration_20250929_212830_seed_users from './20250929_212830_seed_users'
import * as migration_20251003_003128_add_specialties from './20251003_003128_add_specialties'
import * as migration_20251004_085632_add_specialty_categories from './20251004_085632_add_specialty_categories'
import * as migration_20251004_085829_seed_specialties from './20251004_085829_seed_specialties'
import * as migration_20251007_035037_add_announcement from './20251007_035037_add_announcement'
import * as migration_20251010_050136_seed_announcement from './20251010_050136_seed_announcement'
import * as migration_20251014_151704_user_add_avatar from './20251014_151704_user_add_avatar'

export const migrations = [
  {
    up: migration_20250929_212024_init.up,
    down: migration_20250929_212024_init.down,
    name: '20250929_212024_init',
  },
  {
    up: migration_20250929_212209_pre_seed_regions.up,
    down: migration_20250929_212209_pre_seed_regions.down,
    name: '20250929_212209_pre_seed_regions',
  },
  {
    up: migration_20250929_212302_seed_regions.up,
    down: migration_20250929_212302_seed_regions.down,
    name: '20250929_212302_seed_regions',
  },
  {
    up: migration_20250929_212349_seed_localities.up,
    down: migration_20250929_212349_seed_localities.down,
    name: '20250929_212349_seed_localities',
  },
  {
    up: migration_20250929_212426_post_seed_localities.up,
    down: migration_20250929_212426_post_seed_localities.down,
    name: '20250929_212426_post_seed_localities',
  },
  {
    up: migration_20250929_212830_seed_users.up,
    down: migration_20250929_212830_seed_users.down,
    name: '20250929_212830_seed_users',
  },
  {
    up: migration_20251003_003128_add_specialties.up,
    down: migration_20251003_003128_add_specialties.down,
    name: '20251003_003128_add_specialties',
  },
  {
    up: migration_20251004_085632_add_specialty_categories.up,
    down: migration_20251004_085632_add_specialty_categories.down,
    name: '20251004_085632_add_specialty_categories',
  },
  {
    up: migration_20251004_085829_seed_specialties.up,
    down: migration_20251004_085829_seed_specialties.down,
    name: '20251004_085829_seed_specialties',
  },
  {
    up: migration_20251007_035037_add_announcement.up,
    down: migration_20251007_035037_add_announcement.down,
    name: '20251007_035037_add_announcement',
  },
  {
    up: migration_20251010_050136_seed_announcement.up,
    down: migration_20251010_050136_seed_announcement.down,
    name: '20251010_050136_seed_announcement',
  },
  {
    up: migration_20251014_151704_user_add_avatar.up,
    down: migration_20251014_151704_user_add_avatar.down,
    name: '20251014_151704_user_add_avatar',
  },
]
