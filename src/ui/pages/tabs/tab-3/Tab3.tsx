import React from 'react';
import { IonContent, IonTitle } from '@ionic/react';
import { t } from 'i18next';
import Card from 'ui/components/Cards/Card';


const Tab3: React.FC = () => (
  <IonContent color={'god-back'}>
    <IonTitle>{t('landingPage.welcome')}</IonTitle>
   <Card/>
  </IonContent>
);

export default Tab3;
