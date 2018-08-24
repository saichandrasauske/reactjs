import React, {Component} from 'react';
import axios from 'axios';

// https://www.reddit.com/r/space.json
class Apicall extends Component{
  componentWillMount(){
    this.getreddit();
  }

getreddit(){
  const promise = axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
  promise.then(res => {
    const posts = res.data.data.children.map(obj => obj.data);
    this.setState({posts});
  });
  promise.catch(res => {
     var err = res.message;
     this.setState({err})
  });
}
  constructor(props){
    super(props);
    this.state = {
      posts:[],
      subr:'space'
    };
    this.getreddit = this.getreddit.bind(this)
  }
  render(){
    return(
    <div>
     Iam from apicall
     <h1>{`/r/${this.state.subr}`}</h1>
     <ul>{this.state.posts.map(post =>
          <li key = {post.id}>{post.title}</li>
         )}
       </ul>
    </div>
    );
  }
}

export default Apicall;
