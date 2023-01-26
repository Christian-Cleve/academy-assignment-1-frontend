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
import { Button, Space } from 'antd';

const Profiles: React.FC = () => {
  const authUser = useAuthUserStore((state) => state.authUser);
  const setAuthUser = useAuthUserStore((state) => state.setAuthUser);
  const profile = useProfileStore((state) => state.profile);
  const setProfile = useProfileStore((state) => state.setProfile);

  //Slet mig hvis det er dumt
  const [firstName, setFirstName] = useState<string>(profile?.name ?? '');
  const [lastName, setLastName] = useState<string>(profile?.Lname ?? '');
  const [email, setEmail] = useState<string>(profile?.email ?? '');

  //const [profile, setProfile] = useState<Profile | undefined | null>();

  const getProfile = async () => {
    const { data, error } = await supabase.from('profile').select('*').eq('id', authUser?.id).single();
    if (data) {
      setProfile(data);
    }
    if (error) {
      console.log(error);
    }
    console.log(profile?.name);
  };
  const handleUpdate = async () => {
    const { data, error } = await supabase.from('profile').update({ name: firstName, Lname: lastName, email: email }).eq('id', authUser?.id);
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="flex h-full justify-center items-center w-full  ">
      <form className="sm:w-[400px] w-3/4 relative bg-stone-900 rounded-3xl p-5">
        <div className="flex items-center">
          <Center>
            <IonText className=" text-white text-xl font-extrabold">{t('landingPage.profile')}</IonText>
          </Center>
        </div>
        <Center>
          {profile ? (
            <IonItem lines="none" color={'white-background'} className={' mt-8 rounded-lg'}>
              <IonInput
                value={email}
                type="email"
                placeholder={profile.email}
                required
                class="h-[59px] items-center "
                onIonChange={(e) => setEmail(e.detail.value ?? '')}
              ></IonInput>
            </IonItem>
          ) : (
            <div>{t('landingPage.error')}</div>
          )}
        </Center>
        <Center>
          {profile ? (
            <IonItem lines="none" color={'white-background'} className={' mt-8 rounded-lg'}>
              <IonInput
                value={firstName}
                placeholder={profile.name}
                required
                class="h-[59px] items-center "
                onIonChange={(e) => setFirstName(e.detail.value ?? '')}
              ></IonInput>
            </IonItem>
          ) : (
            <div>{t('landingPage.error')}</div>
          )}
        </Center>
        <Center>
          {profile ? (
            <IonItem lines="none" color={'white-background'} className={' mt-8 rounded-lg'}>
              <IonInput
                value={lastName}
                placeholder={profile.Lname}
                required
                class="h-[59px] items-center "
                onIonChange={(e) => setLastName(e.detail.value ?? '')}
              ></IonInput>
            </IonItem>
          ) : (
            <div>{t('landingPage.error')}</div>
          )}
        </Center>
        <Center>
          <Space wrap>
            <Button onClick={handleUpdate} type="primary" className="border-stone-300 mt-5 rounded-sm">
              {t('authentication.update')}
            </Button>
          </Space>
        </Center>
      </form>
    </div>
  );
};

export default Profiles;
