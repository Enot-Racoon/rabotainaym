import * as migration_20250929_125227_init from './20250929_125227_init';
import * as migration_20250929_125453_seed_users from './20250929_125453_seed_users';

export const migrations = [
  {
    up: migration_20250929_125227_init.up,
    down: migration_20250929_125227_init.down,
    name: '20250929_125227_init',
  },
  {
    up: migration_20250929_125453_seed_users.up,
    down: migration_20250929_125453_seed_users.down,
    name: '20250929_125453_seed_users'
  },
];
