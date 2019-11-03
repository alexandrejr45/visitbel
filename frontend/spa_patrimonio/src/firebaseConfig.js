import * as firebase from 'firebase/app';
import firebaseConfig from './auth';
import 'firebase/firestore';

function checkSetup() {
  if (
    !window.firebase ||
    !(firebase.app instanceof Function) ||
    !firebase.app().options
  ) {
    console.log(
      'You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions and make ' +
        'sure you are running the codelab using `firebase serve`'
    );
  }
}

export function enableCache() {
  firebase
    .firestore()
    .enablePersistence()
    .catch(function(err) {
      if (err.code === 'failed-precondition') {
        console.log(
          'Multíplas abas abertas, não foi possível realizar o cache dos arquivos'
        );
      } else if (err.code === 'unimplemented') {
        console.log('O browser atual não suporta o cache offline do firestore');
      }else{
        console.log('Ocorreu um erro na realização cache dos arquivos do firestore');
      }
    });
}

export function initFirebase() {
  try{
    firebase.initializeApp(firebaseConfig)
    checkSetup();
    return firebase;
  }catch(error){
    console.log('Não foi possível se conectar com firebase');
    console.log(error);
    return;
  }
  
}
