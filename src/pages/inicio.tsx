import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonButton,
  IonIcon,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonBadge,
  IonProgressBar,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonFab,
  IonFabButton,
  IonAvatar,
} from '@ionic/react';
import { 
  notificationsOutline, 
  calendarOutline, 
  bookOutline, 
  peopleOutline, 
  libraryOutline,
  addOutline,
  homeOutline,
  chatbubbleOutline,
  settingsOutline
} from 'ionicons/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@ionic/react/css/ionic-swiper.css';

const Homepage: React.FC = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(64), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-left">UniVerse</IonTitle>
          <IonSearchbar slot="end" placeholder="Search..." className="ion-margin-end"></IonSearchbar>
          <IonButton fill="clear" slot="end">
            <IonIcon slot="icon-only" icon={notificationsOutline}></IonIcon>
          </IonButton>
          <IonAvatar slot="end">
            <img src="/placeholder-user.jpg" alt="User" />
          </IonAvatar>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        {/* Featured Events */}
        <div className="featured-events ion-padding" style={{ background: 'var(--ion-color-primary)' }}>
          <h2>Featured Events</h2>
          <Swiper slidesPerView={2.47} spaceBetween={0}>
            {[1, 2, 3,4,5,6,7,8,9].map((event) => (
              <SwiperSlide key={event}>
                <IonCard >
                  <IonImg src={`/placeholder.svg?height=100&width=224`} alt={`Event ${event}`} />
                  <IonCardHeader>
                    <IonCardSubtitle>May 1{event}, 2023</IonCardSubtitle>
                    <IonCardTitle>Spring Festival {event}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonButton expand="block">Join Event</IonButton>
                  </IonCardContent>
                </IonCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Main Feed */}
        {[1, 2, 3].map((post) => (
          <IonCard key={post}>
            <IonCardHeader>
              <IonCardTitle>University News Update {post}</IonCardTitle>
              <IonCardSubtitle>April {post + 14}, 2023</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonImg src={`/placeholder.svg?height=10&width=3`} alt={`News ${post}`} />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <IonButton fill="outline">View More</IonButton>
            </IonCardContent>
          </IonCard>
        ))}

        {/* Quick Access Buttons */}
        <div className="quick-access ion-padding ion-text-center">
          <IonButton fill="clear">
            <IonIcon slot="start" icon={calendarOutline}></IonIcon>
            Calendar
          </IonButton>
          <IonButton fill="clear">
            <IonIcon slot="start" icon={bookOutline}></IonIcon>
            Tasks
          </IonButton>
          <IonButton fill="clear">
            <IonIcon slot="start" icon={peopleOutline}></IonIcon>
            Clubs
          </IonButton>
          <IonButton fill="clear">
            <IonIcon slot="start" icon={libraryOutline}></IonIcon>
            Library
          </IonButton>
        </div>

        {/* Gamification Elements */}
        <IonFab vertical="top" horizontal="end" slot="fixed">
            <div className="gamification ion-padding">
            <IonBadge color="secondary">Level 4 Scholar</IonBadge>
            <IonProgressBar value={progress / 100}></IonProgressBar>
            </div>
        </IonFab>
      </IonContent>

      {/* Floating Action Button */}
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={addOutline}></IonIcon>
        </IonFabButton>
      </IonFab>

      {/* Footer Tabs */}
      <IonFooter>
        <IonTabBar>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="courses" href="/courses">
            <IonIcon icon={bookOutline} />
            <IonLabel>Courses</IonLabel>
          </IonTabButton>
          <IonTabButton tab="messages" href="/messages">
            <IonIcon icon={chatbubbleOutline} />
            <IonLabel>Messages</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonFooter>
    </IonPage>
  );
};

export default Homepage;