// var obj = {
//     name : 'maria'
// }
// console.log(obj.name)


// ````````````````````````````````````` CONSTRUCTOR OBJ ----------------1
// function Student (name, roll){
//     this.name = name;
//     this.roll = roll  
// }
// var student1= new Student('maria' , 23);
// console.log(student1.name, student1.roll)


//   ------------------------------ 2
// function Student(name, roll){
//     this.name = name;
//     this.roll = roll
//     this.getName =  function(){
//         return  this.name
//     }   
// }
// var student1= new Student('maria' , 23);
// console.log(student1.getName())


// ------------------------------------------ 3
// function Student(name, roll){
//     this.name = name;
//     this.roll = roll
//     this.getName =  function(){
//         return  this.name
//     }   
// }
// var student1= new Student('maria' , 23);
// var student2= new Student('Ria' , 2);
// console.log(student1);
// console.log(student2)



// `````````````````````````````````````PROTYPE  OBJ

// function Student(name, roll){
//     this.name = name;
//     this.roll = roll
   
//     Student.prototype.getName = function(){
//         return this.name
//     }
// }
// var student1= new Student('maria' , 23);
// var student2= new Student('Ria' , 2);
// console.log(student1.name);
// console.log(student2)



// const firebaseConfig = {
//     apiKey: "AIzaSyA-dU2EBD2OIv2PCDTl_IXHh-FW6MOLTxU",
//     authDomain: "coffee-contact-form.firebaseapp.com",
//     projectId: "coffee-contact-form",
//     storageBucket: "coffee-contact-form.appspot.com",
//     messagingSenderId: "453721489427",
//     appId: "1:453721489427:web:e28208820761aa8e093fe6",
//     measurementId: "G-KRL0VYWPPQ"
//   };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   const database  = firebase.database()
//   const ref = database.ref('message')

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyA-dU2EBD2OIv2PCDTl_IXHh-FW6MOLTxU",
    authDomain: "coffee-contact-form.firebaseapp.com",
    projectId: "coffee-contact-form",
    storageBucket: "coffee-contact-form.appspot.com",
    messagingSenderId: "453721489427",
    appId: "1:453721489427:web:e28208820761aa8e093fe6",
    measurementId: "G-KRL0VYWPPQ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  
function saveData(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var user = { 
        name : name.value,
        email : email.value,
        passowrd : password.value,
    }
    // console.log(saveData);
    // ref.push(
    //     {
    //         name : name,
    //         email : email,
    //         password : password,
    //     }
    // )
    firebase.database().ref('user').set(user)
}

console.log(firebase.databse)

