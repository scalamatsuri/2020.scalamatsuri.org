/*
 * Initialize firebase
 */

// @ts-check

import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB7CvEZKNQ9YpMmC92V4H2Abz3BhwTsLJ8',
  authDomain: 'coherent-span-230012.firebaseapp.com',
  databaseURL: 'https://coherent-span-230012.firebaseio.com',
  projectId: 'coherent-span-230012',
  storageBucket: 'coherent-span-230012.appspot.com',
  messagingSenderId: '158058079324',
  appId: '1:158058079324:web:9ddc0eb63a8afe720d7299'
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const database = firebase.firestore()
