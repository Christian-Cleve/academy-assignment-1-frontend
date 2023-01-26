('https://fonts.cdnfonts.com/css/norse');
import React from 'react';
import { IonButton, IonContent, IonImg, IonPage, useIonRouter } from '@ionic/react';
import img from 'static/assets/img/Thor-hammer-wolf.jpeg';
import img2 from 'static/assets/img/long-house.jpg';
import { Center } from 'ui/components/generic/Center';
import { t } from 'i18next';

/**
 * Notice that the img will "underlap" under the content, to keep its proportion.
 * This is the desired behavior, because it allows for any amount of content and takes the space from the bottom of the img.
 */
const LandingPage: React.FC = () => {
  const router = useIonRouter();
  return (
    <IonPage>
      <IonContent fullscreen >
      <IonImg src={img2} class="object-cover h-full blur-sm"/>
      <Center>
        <IonImg src={img} class="top-48 rounded-full overflow-hidden m-8 fixed w-80 object-cover" />
      </Center>
       
          <div className=" fixed w-full bg-indigo-50 bottom-0 m-0 rounded-full opacity-50 flex flex-col items-center">
            <h3 className='text-center font-Norse'> {t('landingPage.welcome')} </h3>
          <p className="pb-4 text-center font-Norse font-bold">{t('landingPage.indexText')}</p>
          <IonButton onClick={() => router.push('/login')} className='rounded-full overflow-hidden object-center'>
            Kom i gang
          </IonButton>
        </div>
       
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
