/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app"
import { getFirestore, doc, collection, addDoc } from "firebase/firestore"

// import { getAnalytics } from "firebase/analytics"
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig) // eslint-disable-line no-unused-vars

const db = getFirestore()

var location = null

fetch("https://ipapi.co/json/")
	.then((response) => response.json())
	.then((data) => (location = data))
	.catch((err) => console.error(err))

const OpenLink = (e) => {
	addDoc(collection(db, "analytics"), {
		name: e.target.getAttribute("data-name"),
		link: e.target.getAttribute("data-url"),
		time: new Date(),
		loc: location,
	})
	window.open(e.target.getAttribute("data-url"), "_blank")
}

var elements = document.getElementsByClassName("link")

for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", OpenLink, false)
}
