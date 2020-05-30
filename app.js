const firebaseConfig = {
    apiKey: "AIzaSyDva4VxlxoE68bfBGOFa9khrlgCaNhEQXc",
    authDomain: "testing-84f62.firebaseapp.com",
    databaseURL: "https://testing-84f62.firebaseio.com",
    projectId: "testing-84f62",
    storageBucket: "testing-84f62.appspot.com",
    messagingSenderId: "367739024587",
    appId: "1:367739024587:web:5d4091d034b12db049574e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// function signUp() {
//     firebase.auth().createUserWithEmailAndPassword('faraz3@gmail.com', '123456')
//     .then((res) => {
//     console.log('REs ===>', res)
//       var db = firebase.firestore();
//       db.collection('users').doc(res.user.uid).set({
//           name: "faraz",
//           email: "faraz3@gamil.com"
//       })
//       .then(() => {
//           console.log('Saved') 
//       })
//       .catch((e) => {
//           console.log('e', e)
//       })
//     })
//     .catch((e) => {
//       console.log('e ====>', e)
//     })
// } asas

function login() {
    firebase.auth().signInWithEmailAndPassword('faraz3@gmail.com', '123456')
    .then((res) => {
        var db = firebase.firestore()
        console.log(res)
        db.collection("users").doc(res.user.uid).get()
        .then((res) => {
          console.log('res ===>', res)
        })
        .catch((e) => {
            console.log('e', e)
        })
    })
    .catch((e) => {
      console.log('e', e)
    })
}

// signUp()

login()