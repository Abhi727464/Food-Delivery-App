import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCwGjB-2ih3H2NOTifvefUS9aV2GFFNaks",
    authDomain: "restrauntapp-85160.firebaseapp.com",
    databaseURL: "https://restrauntapp-85160-default-rtdb.firebaseio.com",
    projectId: "restrauntapp-85160",
    storageBucket: "restrauntapp-85160.appspot.com",
    messagingSenderId: "208056650685",
    appId: "1:208056650685:web:2727fc45e66860289260d4"
  };


  const app = getApps.length>0 ? getApp(): initializeApp(firebaseConfig)


  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app, firestore, storage}
