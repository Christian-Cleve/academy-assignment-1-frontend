import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonList, IonModal, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { PostgrestBuilder } from '@supabase/postgrest-js';
import { addCircleOutline, key } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { Center } from '../generic/Center';
import img from 'static/assets/img/thor.jpg';
import img2 from 'static/assets/img/loki.jpeg';
import img3 from 'static/assets/img/odin.jpg';
import { supabase } from 'apis/supabaseClient';
import { Info } from 'types/test';

interface Prop{
    id:number,
    name:string,
    img: string

}
const Card: React.FC =() => {

    const [getInfo, setGetInfo] = useState<Info[]| null>();
   
    const handelInfo = async () =>{
        const { data,error } = await supabase.from('info').select();
        setGetInfo(data);  
        console.log(data);
        console.log('This is get info'+getInfo);
        
    };

    useEffect(() => {
        handelInfo();
    }, []);

    const props: Info[]=[
        {
            id:1,
            title:'',
            info:'',
            img:'',
        }, 
        {
            id:2,
            title:'',
            info:'',
            img:'',
        }, 
        {
            id:2,
            title:'',
            info:'',
            img:'',
        },

    ];
    const [selectedPost,setSelectedPost] = useState<Info| undefined>(undefined );
    const [isOpen, setIsOpen] = useState(false);

  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Inline Modal</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
     {getInfo && getInfo?.length >0 && (
 <IonList className='object-cover bg-back'>
 {
 getInfo.map((info) => (
     <IonItem key={'card-'+info.id} lines="none" className=''>
 <IonCard className='object-cover w-full' onClick={()=> setIsOpen(true)} >
     <div className=''>
     <IonImg src={info.img || img} className="object-cover h-[50px] w-full" onClick={()=> setSelectedPost(info)}/>
     </div>
<IonCardContent>
 <div>
     < IonText>{info.title}</IonText>
 </div>
</IonCardContent>
</IonCard>
</IonItem>
))}
</IonList>   
     )}
           
      
      
      <IonModal isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Modal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonList>
         {
        selectedPost &&(
        <div onClick={()=> setIsOpen(false)}>
             <IonImg src={selectedPost.img || img}></IonImg>
             <h1>{selectedPost.title}</h1>
             <p>{selectedPost.info}</p>
        </div>
        )} 
        </IonList>
        </IonContent>
      </IonModal>
    <IonItem></IonItem>
    </IonContent>
    </IonPage>
    );
    
    };

export default Card;



