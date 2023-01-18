import React from 'react';
import { IonPage, IonContent, IonImg } from '@ionic/react';
import LoginForm from 'ui/components/authentication/login/LoginForm';
import img3 from 'static/assets/img/campfire.jpg';

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen color={'white-background'} class="h-full w-full flex justify-center items-center">
        <LoginForm togglePasswordButtonType='icon'/>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
