import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { logoFacebook, logoApple } from 'ionicons/icons';
import logoGoogle from 'static/assets/img/google.svg';
import styles from './SocialLoginButton.module.css';

type Provider = 'facebook' | 'google' | 'apple';

type Variant = {
  style: string;
  icon: string;
};

const variants: Record<Provider, Variant> = {
  facebook: {
    style: styles.buttonFacebook,
    icon: logoFacebook,
  },
  google: {
    style: styles.buttonGoogle,
    icon: logoGoogle,
  },
  apple: {
    style: styles.buttonApple,
    icon: logoApple,
  },
};

type SocialLoginButtonProps = {
  disabled?: boolean;
  className?: string;
  onClick?: (params: any) => any;
  provider: Provider;
};

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ onClick, provider, className, disabled = false }) => (
  <IonButton onClick={onClick} disabled={disabled} className={`${variants[provider].style} ${className} w-full rounded-full overflow-hidden`}>
    <IonIcon icon={variants[provider].icon} slot="icon-only" />
  </IonButton>
);
export default SocialLoginButton;
