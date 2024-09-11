import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert,
  IonModal,
  IonButtons,
  IonBackButton
} from '@ionic/react';
import './login.css';

const Login: React.FC = () => {
  const history = useHistory();
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [mostrarModalCambioContraseña, setMostrarModalCambioContraseña] = useState(false);
  const [contraseñaActual, setContraseñaActual] = useState('');
  const [nuevaContraseña, setNuevaContraseña] = useState('');
  const [confirmarNuevaContraseña, setConfirmarNuevaContraseña] = useState('');

  const manejarInicioSesion = () => {
    if (nombreUsuario === '' || contraseña === '') {
      setMensajeAlerta('Por favor, ingresa tu nombre de usuario y contraseña.');
      setMostrarAlerta(true);
      return;
    }
    // Simulación de autenticación (puedes reemplazar esto con lógica de autenticación real)
    if (nombreUsuario === 'admin' && contraseña === '1234') {
      setMensajeAlerta('Inicio de sesión exitoso. ¡Bienvenido!');
      setMostrarAlerta(true);
      // Redirige a la página de inicio después de un breve retraso
      setTimeout(() => {
        history.push('/inicio'); // Asume que '/inicio' es la ruta de tu página principal
      }, 1500); // Espera 1.5 segundos antes de redirigir
    } else {
      setMensajeAlerta('Nombre de usuario o contraseña incorrectos.');
      setMostrarAlerta(true);
    }
  };

  const manejarCambioContraseña = () => {
    if (contraseñaActual === '' || nuevaContraseña === '' || confirmarNuevaContraseña === '') {
      setMensajeAlerta('Por favor, completa todos los campos.');
      setMostrarAlerta(true);
      return;
    }
    if (nuevaContraseña !== confirmarNuevaContraseña) {
      setMensajeAlerta('Las nuevas contraseñas no coinciden.');
      setMostrarAlerta(true);
      return;
    }
    // Aquí iría la lógica real para cambiar la contraseña
    setMensajeAlerta('Contraseña cambiada con éxito.');
    setMostrarAlerta(true);
    setMostrarModalCambioContraseña(false);
    setContraseñaActual('');
    setNuevaContraseña('');
    setConfirmarNuevaContraseña('');
  };

  return (
    <IonPage className="login-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio de Sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="login-content">
        <h1 className="login-title">Bienvenido</h1>
        <IonItem className="login-item">
          <IonLabel position="floating" className="login-label">Nombre de Usuario</IonLabel>
          <IonInput
            className="login-input"
            type="text"
            value={nombreUsuario}
            onIonChange={(e) => setNombreUsuario(e.detail.value!)}
          />
        </IonItem>
        <IonItem className="login-item">
          <IonLabel position="floating" className="login-label">Contraseña</IonLabel>
          <IonInput
            className="login-input"
            type="password"
            value={contraseña}
            onIonChange={(e) => setContraseña(e.detail.value!)}
          />
        </IonItem>
        <IonButton expand="block" onClick={manejarInicioSesion} className="login-button">
          Iniciar Sesión
        </IonButton>
        <IonButton expand="block" fill="outline" onClick={() => setMostrarModalCambioContraseña(true)} className="change-password-button">
          Cambiar Contraseña
        </IonButton>
        <IonAlert
          className="login-alert"
          isOpen={mostrarAlerta}
          onDidDismiss={() => setMostrarAlerta(false)}
          header={'Mensaje'}
          message={mensajeAlerta}
          buttons={['Aceptar']}
        />
        <IonModal isOpen={mostrarModalCambioContraseña} className="change-password-modal">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="#" onClick={() => setMostrarModalCambioContraseña(false)} />
              </IonButtons>
              <IonTitle>Cambiar Contraseña</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonLabel position="floating">Contraseña Actual</IonLabel>
              <IonInput type="password" value={contraseñaActual} onIonChange={e => setContraseñaActual(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Nueva Contraseña</IonLabel>
              <IonInput type="password" value={nuevaContraseña} onIonChange={e => setNuevaContraseña(e.detail.value!)} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Confirmar Nueva Contraseña</IonLabel>
              <IonInput type="password" value={confirmarNuevaContraseña} onIonChange={e => setConfirmarNuevaContraseña(e.detail.value!)} />
            </IonItem>
            <IonButton expand="block" onClick={manejarCambioContraseña} className="change-password-submit-button">
              Cambiar Contraseña
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Login;