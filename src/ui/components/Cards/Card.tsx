import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonList,
  IonModal,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { PostgrestBuilder } from '@supabase/postgrest-js';
import { addCircleOutline, key } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { Center } from '../generic/Center';
import img from 'static/assets/img/thor.jpg';
import { supabase } from 'apis/supabaseClient';
import { Info } from 'types/test';
import { createClient } from '@supabase/supabase-js';

type titles = {
  title: string | null;
};

const Card: React.FC = () => {
  const [getInfo, setGetInfo] = useState<Info[] | null>();
  const [title, setTitle] = useState<titles[] | undefined>();

  async function getImage(image: string) {
    const edFunction = async () => {
      const { data, error } = await supabase.functions.invoke('fetchImg', {
        body: { img: `${image.toUpperCase()}/${image.toLowerCase()}.jpg` },
      });
      if (data) {
        console.log(data.publicUrl);
        setTitle(data.publicUrl);
      }
      if (error) {
        error('fic');
      }
      return data.publicUrl;
    };

    return edFunction();
  }

  const handelInfo = async () => {
    const { data, error } = await supabase.from('info').select();
    setGetInfo(data);
  };

  useEffect(() => {
    handelInfo();
    getImage('');
  }, []);

  /* const props: Info[] = [
    {
      id: 1,
      title: '',
      info: '',
      img: '',
    },
    {
      id: 2,
      title: '',
      info: '',
      img: '',
    },
    {
      id: 2,
      title: '',
      info: '',
      img: '',
    },
  ];
  */
  const [selectedPost, setSelectedPost] = useState<Info | undefined>(undefined);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Choose a god</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {getInfo && title && (
          <IonList className="object-cover bg-back">
            {getInfo.map((info) => (
              <IonItem key={'card-' + info.id} lines="none" className="">
                <IonCard className="object-cover w-full" onClick={() => setIsOpen(true)}>
                  <IonImg src={info.img || img} className="object-cover h-[50px] w-full" onClick={() => setSelectedPost(info)} />
                  <IonCardContent>
                    <IonText>{info.title}</IonText>
                  </IonCardContent>
                </IonCard>
              </IonItem>
            ))}
          </IonList>
        )}

        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>{selectedPost?.title}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonList>
              {selectedPost && (
                <div onClick={() => setIsOpen(false)}>
                  <IonImg src={selectedPost.img || img}></IonImg>
                  <h1>{selectedPost.title}</h1>
                  <p className="text-bold">{selectedPost.info}</p>
                </div>
              )}
            </IonList>
          </IonContent>
        </IonModal>
      </IonContent>
    </>
  );
};
export default Card;
