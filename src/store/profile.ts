import { Database } from 'types/database.types';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Profile } from 'types/test';

type ProfileState = {
  profile: Profile | null;
  setProfile: (profile: Profile) => void;
  resetProfile: () => void;
};

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: null,
      setProfile: (profile) => set({ profile }),
      resetProfile: () => set({ profile: null }),
    }),
    {
      name: 'profile-storage',
    }
  )
);
