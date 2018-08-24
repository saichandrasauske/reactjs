import React,{Component} from 'react';
const Api = "AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA"
const channelId = "UCXgGY0wkgOzynnHvSEVmE3A"
// const result = 10;
//www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

const API = `https://www.googleapis.com/youtube/v3/search?key=${Api}&channelId=${channelId}&part=snippet,id&order=date&maxResults`;
class Youtube extends Component{
  clicked(result){
  let  finalURL = `${API}=${result}`;
    fetch(finalURL)
    .then((response) => response.json())
    .then((responseJson) => {
      const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
      this.setState({resultyt})

    })
    .catch((error) => {
      console.error(error);
    });
}
onSubmit(event){
  event.preventDefault();
  let value = this.refs.number.value;
  this.clicked(value);
}
ComponentDidMount(){
  this.clicked(this.state.result)
}

constructor(props){
  super(props);
  this.state = {
    resultyt:[],
    result:'',
    };
  this.clicked = this.clicked.bind(this);
}
  render(){
    // console.log(this.state.resultyt)

    // console.log(finalURL)
    return(
      <div>
        <form onSubmit = {this.onSubmit.bind(this)}><input type ="search" placeholder ="Enter number of videos u want" ref ="number"/></form>

        <button onClick ={this.clicked}> please enter the button in your keyboard</button>
          {
            this.state.resultyt.map((link,i) => {
            // console.log(link);
             var frame = <div className = "youtube"><iframe key = {i} width="560" height="315" src={link}
              frameBorder="0"
               allowFullScreen></iframe></div>
             return frame;
            })
          }
          {this.frame}
  </div>
    );
  }
}
export default Youtube;
