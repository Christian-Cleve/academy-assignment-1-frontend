import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import IntroComponent from 'ui/components/ui-library/intro-component/IntroComponent';
import CircularButton from 'ui/components/ui-library/circular-button/CircularButton';

const IntroPage: React.FC = () => (
  <IonPage>
    <IonContent fullscreen color={'white'}>
      <CircularButton></CircularButton>
    </IonContent>
  </IonPage>
);

export default IntroPage;
