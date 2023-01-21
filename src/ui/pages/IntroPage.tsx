import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import IntroComponent from 'ui/components/ui-library/intro-component/IntroComponent';

const IntroPage: React.FC = () => (
  <IonPage>
    <IonContent fullscreen color={'white'}>
      <IntroComponent />
    </IonContent>
  </IonPage>
);

export default IntroPage;
