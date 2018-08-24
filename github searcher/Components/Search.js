import React,{Component} from 'react';

class Search extends Component{
  onSubmit(event){
    event.preventDefault();
    let value = this.refs.username.value;
    this.props.searchProfile(value);
    this.refs.username.value = "";
  }
  render(){
    return(
    <div className = "Search-box">
      <form onSubmit = {this.onSubmit.bind(this)}>
      <label>  <input ref = "username" type="search" placeholder ="Enter the username"/></label>
      </form>
    </div>
    );
  }
}

export default Search;
