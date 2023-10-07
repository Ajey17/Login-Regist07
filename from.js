const firebaseConfig = {
    apiKey: "AIzaSyA0gdOqoJEHskmzkfVXv_ChF-mrI1y1ejA",
    authDomain: "login-form-a2871.firebaseapp.com",
    databaseURL: "https://login-form-a2871-default-rtdb.firebaseio.com",
    projectId: "login-form-a2871",
    storageBucket: "login-form-a2871.appspot.com",
    messagingSenderId: "58426191527",
    appId: "1:58426191527:web:416cf7b08ecfc910177582",
    measurementId: "G-Z1D1LDPGH0"
};

// firebase.initializeApp(firebaseConfig);

// var messagesRef = firebase.database().ref('messages');

// JavaScript to handle tab switching
const registerTab = document.getElementById("register-tab");
const registerForm = document.getElementById("register-form");
const loginTab = document.getElementById("login-tab");
const loginForm = document.getElementById("login-form");

loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    loginForm.style.display = "block";
    registerForm.style.display = "none";
});

registerTab.addEventListener("click", () => {
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    registerForm.style.display = "block";
    loginForm.style.display = "none";
});