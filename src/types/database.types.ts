export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      info: {
        Row: {
          id: number
          img: string | null
          info: string | null
          title: string | null
        }
        Insert: {
          id?: number
          img?: string | null
          info?: string | null
          title?: string | null
        }
        Update: {
          id?: number
          img?: string | null
          info?: string | null
          title?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
