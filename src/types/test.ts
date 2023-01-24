import { Database } from './database.types';

type Db = Database['public']['Tables']

export type Info = Db['info']['Row']

export type Profile = Db['profile']['Row']