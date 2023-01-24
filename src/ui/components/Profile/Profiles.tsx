import { IonItem, IonInput, IonContent, IonText, IonIcon, IonButton } from '@ionic/react';
import { supabase } from 'apis/supabaseClient';
import { equal } from 'assert';
import { t } from 'i18next';
import { chevronBackCircle, at } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { Profile } from 'types/test';
import { Center } from '../generic/Center';
import { useAuthUserStore } from 'store/user';
import { useProfileStore } from 'store/profile';

const Profiles: React.FC = () => {
  const authUser = useAuthUserStore((state) => state.authUser);
  const setAuthUser = useAuthUserStore((state) => state.setAuthUser);
  const profile = useProfileStore((state) => state.profile);
  const setProfile = useProfileStore((state) => state.setProfile);

  //const [profile, setProfile] = useState<Profile | undefined | null>();

  const getProfile = async () => {
    const { data, error } = await supabase.from('profile').select('*').eq('id', authUser?.id).single();
    if (data) {
      setProfile(data);
      console.log(profile);
    }
    if (error) {
      console.log(error);
    }
  };
  const handleUpdate = async () => {
    // const { data, error } = await supabase.from('profile').update().eq('id', authUser?.id);
    console.log('error');
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="flex h-full justify-center items-center w-full  ">
      <form className="sm:w-[400px] w-3/4 relative bg-stone-900 rounded-3xl p-5" onSubmit={handleUpdate}>
        <div className="flex items-center">
          <Center>
            <IonText className=" text-white text-xl font-extrabold">{t('landingPage.profile')}</IonText>
          </Center>
        </div>
        <Center>
          {profile ? (
            <IonItem lines="none" color={'white-background'} className={' mt-8 rounded-lg'}>
              <IonInput type="email" placeholder={profile.email} required class="h-[59px] items-center "></IonInput>
            </IonItem>
          ) : (
            <div>Tom stuff</div>
          )}
        </Center>
        <Center>
          {profile ? (
            <IonItem lines="none" color={'white-background'} className={' mt-8 rounded-lg'}>
              <IonInput placeholder={profile.name} required class="h-[59px] items-center "></IonInput>
            </IonItem>
          ) : (
            <div>Tom stuff</div>
          )}
        </Center>
        <Center>
          {profile ? (
            <IonItem lines="none" color={'white-background'} className={' mt-8 rounded-lg'}>
              <IonInput placeholder={profile.lname} required class="h-[59px] items-center "></IonInput>
            </IonItem>
          ) : (
            <div>Tom stuff</div>
          )}
        </Center>
        <IonButton type="submit">Click here</IonButton>;
      </form>
    </div>
  );
};

export default Profiles;
