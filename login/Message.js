import React,{Component} from 'react';
var firebase = require('firebase');
var config = {
   apiKey: "AIzaSyCSX5xkqLeiM9vWQ3KoXs2k1BL4-RlFNnE",
   authDomain: "logins-644ba.firebaseapp.com",
   databaseURL: "https://logins-644ba.firebaseio.com",
   projectId: "logins-644ba",
   storageBucket: "",
   messagingSenderId: "990891321935"
 };


 class Message extends Component{
   componentWillMount(){
     const messaging = firebase.messaging()
     messaging.requestPermission()
     .then(res =>{
       console.log("Have Permission")
       return messaging.getToken();
     })
     .then(token=>{
       console.log(token)
     })
     .catch(e=>{
       console.log("Error occured")
     })
   }
   render(){

     return(
     <div>
     </div>
     );
   }
 }

export default Message;
