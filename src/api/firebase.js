import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBb6oGg59mz_YKEjgNUfWHqe2DoBccQvT0',
  authDomain: 'blog-style-20507.firebaseapp.com',
  databaseURL: 'https://blog-style-20507.firebaseio.com',
  projectId: 'blog-style-20507',
  storageBucket: 'blog-style-20507.appspot.com'
};

const firebase = Firebase.initializeApp(config);

export default firebase;
