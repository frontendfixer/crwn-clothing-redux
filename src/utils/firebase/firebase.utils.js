import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAVEsqUlV3FBF_QCiXdgqMD_3LiTPjWh9U',
  authDomain: 'crwn-clothing-36402.firebaseapp.com',
  projectId: 'crwn-clothing-36402',
  storageBucket: 'crwn-clothing-36402.appspot.com',
  messagingSenderId: '42415152706',
  appId: '1:42415152706:web:888ba680a47e4c2520d7db',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
auth.useDeviceLanguage();

// ============ Google Authentications
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
//-------------------------------------------

// ================= Firestore Setup
export const db = getFirestore();

export const addCollectionAndDocument = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocument = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email, uid } = userAuth;
    const createDate = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDate,
        uid,
        ...additionalInformation,
      });
    } catch (error) {
      throw new Error(error);
    }
  }
  return userSnapshot;
};

// ========== Email & Password Authentications
export const createUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return {};

  const val = await createUserWithEmailAndPassword(auth, email, password);
  return val;
};

export const signInUserEmailAndPassword = async (email, password) => {
  if (!email || !password) return {};

  const val = await signInWithEmailAndPassword(auth, email, password);
  return val;
};
// ---------------------------------------

export const signOutUser = async () => signOut(auth);

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      userAuth => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
