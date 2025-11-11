import * as migration_20250929_212024_init from './20250929_212024_init'
import * as migration_20250929_212209_pre_seed_regions from './20250929_212209_pre_seed_regions'
import * as migration_20250929_212302_seed_regions from './20250929_212302_seed_regions'
import * as migration_20250929_212349_seed_localities from './20250929_212349_seed_localities'
import * as migration_20250929_212426_post_seed_localities from './20250929_212426_post_seed_localities'
import * as migration_20251003_003128_add_specialties from './20251003_003128_add_specialties'
import * as migration_20251004_085632_add_specialty_categories from './20251004_085632_add_specialty_categories'
import * as migration_20251004_085829_seed_specialties from './20251004_085829_seed_specialties'
import * as migration_20251104_060619_refine_announcement_struct from './20251104_060619_refine_announcement_struct'
import * as migration_20251104_060858_add_user_avatar from './20251104_060858_add_user_avatar'
import * as migration_20251104_060914_add_user_balance from './20251104_060914_add_user_balance'
import * as migration_20251104_062615_add_announcements_to_search from './20251104_062615_add_announcements_to_search'
import * as migration_20251104_062640_remove_post_from_search from './20251104_062640_remove_post_from_search'
import * as migration_20251104_141252_make_user_single_role from './20251104_141252_make_user_single_role'
import * as migration_seed_01_users from './seed_01_users'
import * as migration_seed_02_announcement from './seed_02_announcement'
import * as migration_seed_03_images_to_announcement from './seed_03_images_to_announcement'

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
    up: migration_20251104_060619_refine_announcement_struct.up,
    down: migration_20251104_060619_refine_announcement_struct.down,
    name: '20251104_060619_refine_announcement_struct',
  },
  {
    up: migration_20251104_060858_add_user_avatar.up,
    down: migration_20251104_060858_add_user_avatar.down,
    name: '20251104_060858_add_user_avatar',
  },
  {
    up: migration_20251104_060914_add_user_balance.up,
    down: migration_20251104_060914_add_user_balance.down,
    name: '20251104_060914_add_user_balance',
  },
  {
    up: migration_20251104_062615_add_announcements_to_search.up,
    down: migration_20251104_062615_add_announcements_to_search.down,
    name: '20251104_062615_add_announcements_to_search',
  },
  {
    up: migration_20251104_062640_remove_post_from_search.up,
    down: migration_20251104_062640_remove_post_from_search.down,
    name: '20251104_062640_remove_post_from_search',
  },
  {
    up: migration_20251104_141252_make_user_single_role.up,
    down: migration_20251104_141252_make_user_single_role.down,
    name: '20251104_141252_make_user_single_role',
  },
  {
    up: migration_seed_01_users.up,
    down: migration_seed_01_users.down,
    name: 'seed_01_users',
  },
  {
    up: migration_seed_02_announcement.up,
    down: migration_seed_02_announcement.down,
    name: 'seed_02_announcement',
  },
  {
    up: migration_seed_03_images_to_announcement.up,
    down: migration_seed_03_images_to_announcement.down,
    name: 'seed_03_images_to_announcement',
  },
]
