import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBFjOlGhb_0vYzJ3vOkBdMszNVpMKvnwmw",
    authDomain: "caloriecounter-f844b.firebaseapp.com",
    databaseURL: "https://caloriecounter-f844b.firebaseio.com",
    projectId: "caloriecounter-f844b",
    storageBucket: "caloriecounter-f844b.appspot.com",
    messagingSenderId: "242803340759"
}

const database = firebase
  .initializeApp(config)
  .database()
  .ref();
  
const addProduct = (productData) => 
  database.child('products').push(productData, response => response);

const actions = {
  addProduct
};

export default database;