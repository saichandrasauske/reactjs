import React, { Component } from 'react';
var firebase = require('firebase');
var config = {
   apiKey: "AIzaSyCSX5xkqLeiM9vWQ3KoXs2k1BL4-RlFNnE",
   authDomain: "logins-644ba.firebaseapp.com",
   databaseURL: "https://logins-644ba.firebaseio.com",
   projectId: "logins-644ba",
   storageBucket: "",
   messagingSenderId: "990891321935"
 };
 firebase.initializeApp(config);

 class Authen extends Component{
  login(event){
    const email = this.refs.email.value;
    const password = this.refs.pass.value;

    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise
    .then(user =>{
        var err ="welcome " + user.email;
      var lout = document.getElementById('logout');
      lout.classList.remove('hide');
     this.setState({err:err});
    })
    promise.catch(e =>{
      var err = e.message;
      console.log(err);
      this.setState({err:err});
    });
   }
   signUp(event){
     const email = this.refs.email.value;
     const password = this.refs.pass.value;
     console.log(email,password);
     const auth = firebase.auth();
     const promise = auth.createUserWithEmailAndPassword(email,password);
     promise
     .then(user =>{
       var err = "Welcome " + user.email;
       firebase.database().ref('/users'+ user.uid).set({
         email:user.email
       });
       console.log(user);
       this.setState({err:err});
     });
     promise
     .catch(e =>{
       var err = e.message;
       console.log(err);
       this.setState({err:err});
     });
   }
   logout(){
     firebase.auth().signOut();
     var lout = document.getElementById('logout');
     lout.classList.add('hide');
   }
   google(){
     console.log("i am in google method");
     var provider = new firebase.auth.GoogleAuthProvider();
      var promise = firebase.auth().signInWithPopup(provider);
      promise.then(result =>{
        var user = result.user;
        console.log(result);
        firebase.database().ref('users/'+user.uid).set({
          email:user.email,
          name:user.displayName
        })
      });
      promise.catch(e=>{
        var err = e.message;
        console.log(err);
      });
   }
googlepopup(){
  var provider = new firebase.auth.GoogleAuthProvider();
  var promise = firebase.auth().signInWithRedirect(provider);
  promise.then(result =>{
    var user = result.user;
    firebase.database().ref('user/'+user.uid).set({
      email:user.email,
      name:user.displayName
    })
  });
  promise.catch(e=>{
    var err = e.message;
    console.log(err);
  });

}

   constructor(props){
     super(props);

     this.state = {
       err:''
     };
     this.login = this.login.bind(this);
     this.signUp = this.signUp.bind(this);
     this.logout = this.logout.bind(this);
     this.google = this.google.bind(this);
     this.googlepopup = this.googlepopup.bind(this);

   }
   render(){
     return(
       <div>
      <input type="email" placeholder="enter Your email" id="email" ref="email"/><br/>
      <input type="password" placeholder="enter Your password" id="pass" ref="pass"/><br/>
      <p>{this.state.err}</p>
      <button onClick={this.login}>Login</button>
      <button onClick={this.signUp}>Sign Up </button>
      <button id="logout" className="hide" onClick={this.logout}>Logout</button>
      <button id="google" className="google" onClick={this.google}>Sign in With Google</button><br/>
      <button id="google" className="google" onClick={this.googlepopup}>Sign in With Google popup</button><br/>
       </div>
     );
   }
 }
 export default Authen;
