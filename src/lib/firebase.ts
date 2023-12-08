// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBGxUtq1hO-SKoqp0TXxpk_QqLk5LhQ1SM',
	authDomain: 'sveltekit-firebase-27fb3.firebaseapp.com',
	projectId: 'sveltekit-firebase-27fb3',
	storageBucket: 'sveltekit-firebase-27fb3.appspot.com',
	messagingSenderId: '832142127095',
	appId: '1:832142127095:web:9398b244f7e9a759a988f2',
	measurementId: 'G-5C2BEY93H9'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
