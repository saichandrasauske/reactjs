import React,{Component} from 'react';
var firebase = require('firebase');
var uuid = require('uuid');
var config = {
    apiKey: "AIzaSyAsL8cI8SQKHwQTRs-bdejrfjpw11lb5xs",
    authDomain: "usurvey-d8530.firebaseapp.com",
    databaseURL: "https://usurvey-d8530.firebaseio.com",
    projectId: "usurvey-d8530",
    storageBucket: "usurvey-d8530.appspot.com",
    messagingSenderId: "127937300148"
  };
  firebase.initializeApp(config);
class Usurvey extends Component {
  nameSubmit(event){
    var studentName = this.refs.name.value;
    this.setState({studentName:studentName},function(){
      console.log(this.state);
    })
  }
  answerselected(event){
    var answers =this.state.answers;
    if(event.target.name ==='answer1'){
      answers.answer1 = event.target.value;
    } else if(event.target.name ==='answer2'){
      answers.answer2 = event.target.value;
    }else if(event.target.name ==='answer3'){
      answers.answer3 = event.target.value;
    }
    this.setState({answers:answers},function(){
      console.log(this.state)
    });
  }
  questionSubmit(){
    firebase.database().ref('uSurvey/'+this.state.uid).set({
      studentName:this.state.studentName,
      answers:this.state.answers
    });
    this.setState({isSubmitted:true});
  }

  constructor(props){
    super(props);

    this.state = {
      uid: uuid.v1(),
      studentName:'',
      answers:{
        answer1:'',
        answer2:'',
        answer3:''
      },
      isSubmitted:false
    };
    this.nameSubmit = this.nameSubmit.bind(this);
    this.answerselected = this.answerselected.bind(this);
    this.questionSubmit = this.questionSubmit.bind(this);
  }
  render(){
    var studentName;
    var questions;
    if(this.state.studentName===""&&this.state.isSubmitted===false){
      studentName = <div>
        <h1>hey student Please let us know Your Name:</h1>
      <form onSubmit={this.nameSubmit}>
        <input className="namy" type="text" placeholder="please enter your name" ref="name"/>
      </form>
    </div>;
    questions=''
    }
    else if(this.state.studentName!==''&& this.state.isSubmitted===false){
      studentName =<h1>Welcome to Usurvey,Mr/Mrs/Ms<br/>{this.state.studentName}</h1>
      questions =<div>
       <h2>Here Some questions</h2>
       <form onSubmit={this.questionSubmit}>
        <div className="card">
          <label>What Kind Of Courses Do You Like</label><br/>
         <input type="radio" name="answer1" value="Technology" onChange={this.answerselected}/>Technology
         <input type="radio" name="answer1" value="Design" onChange={this.answerselected}/>Design
         <input type="radio" name="answer1" value="Marketing" onChange={this.answerselected}/>Marketing
        </div>
        <div className="card">
          <label>You are a2</label><br/>
         <input type="radio" name="answer2" value="Student" onChange={this.answerselected}/>Student
         <input type="radio" name="answer2" value="in-job" onChange={this.answerselected}/>in-job
         <input type="radio" name="answer2" value="Looking-job" onChange={this.answerselected}/>Looking-job
        </div>
        <div className="card">
          <label>Is Online Learning Helpful</label><br/>
         <input type="radio" name="answer3" value="Yes" onChange={this.answerselected}/>Yes
         <input type="radio" name="answer3" value="No" onChange={this.answerselected}/>No
         <input type="radio" name="answer3" value="Maybe" onChange={this.answerselected}/>Maybe
        </div>
       <input type="submit" value="submit" className="feedback-button"/>

       </form>


      </div>
    }
    else if(this.state.isSubmitted === true && this.state.studentName!==""){
      studentName = <h1>thanks,{this.state.studentName}</h1>
    }
    return(
      <div>
        {studentName}
      ----------------------
      {questions}
      </div>
    );
  }
}
export default Usurvey;
