import { Database } from './database.types';

type Db = Database['public']['Tables']

export type Info = Db['info']['Row']