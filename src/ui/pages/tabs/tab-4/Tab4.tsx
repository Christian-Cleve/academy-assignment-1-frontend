import React, { useEffect } from 'react';
import './tab-4.module.css';
import { IonContent, IonInput, IonItem, IonTitle } from '@ionic/react';
import { t } from 'i18next';
import { Center } from 'ui/components/generic/Center';
import Profiles from 'ui/components/Profile/Profiles';

const Tab4: React.FC = () => {
  return (
    <IonContent color={'white-background'}>
      <Profiles />
    </IonContent>
  );
};

export default Tab4;
