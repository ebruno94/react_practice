import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PostList from './PostList';
import NewPostForm from './newpostform';
import Moment from 'moment';
import {Route, Switch} from 'react-router-dom';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      masterPostList: [{
        name: 'Ernest',
        formattedWaitTime: new Moment().fromNow(true),
        description: 'This is a test!'
      },
      {
      name: 'Ernest',
      formattedWaitTime: new Moment().fromNow(true),
      description: 'This is a test!'
      },
      {
        name: 'Ernest',
        formattedWaitTime: new Moment().fromNow(true),
        description: 'This is a test!'
      }]
    };
    this.handleNewPost = this.handleNewPost.bind(this);
  }

  componentDidMount(){
    this.postTimeUpdate = setInterval(()=>
      this.updateTime(),5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.postTimeUpdate);
  }

  updateTime(){
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.forEach((post)=>
      post.formattedWaitTime = (post.formattedWaitTime).fromNow(true)
    );
    this.setState({masterPostList: newMasterPostList});
  }

  handleNewPost(newPost){
    let newMasterPostList = this.state.masterPostList.slice();
    newPost.formattedWaitTime = (newPost.formattedWaitTime).fromNow(true);
    newMasterPostList.push(newPost);
    this.setState({masterPostList: newMasterPostList});
  }

  render(){
    return(
      <div>
        <style jsx global>{`
          body{
            padding: 200px;
          }
        `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=> <PostList postList = {this.state.masterPostList}/> }/>
          <Route path='/newpost' render={()=> <NewPostForm onNewPost={this.handleNewPost}/> }/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}
