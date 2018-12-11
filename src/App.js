import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './component/VideoList';
import VideoSearch from './component/VideoSearch';
import VideoDetails from './component/VideoDetails';
import './styles/video.scss';
import logo from './images/logo.png';
import userImg from './images/default.png';
const API_KEY = "AIzaSyC_SMfYoEP1JbCZFCHr8dgEqirsu1df_MM";

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      data: [],
      selectedVideo: null,
      term: ''
    }
    
    this.videoSearch('레드벨벳')
  }

  // async videoSearch (term){
  //   await YTSearch({ key: API_KEY, term: term }, data => {
  //     this.setState({
  //       data: data,
  //       selectedVideo: data[0],
  //       term: term
  //     })
  //   })
  // }
  
  videoSearch = (term) => {
    YTSearch({ key: API_KEY, term: term }, data => {
      this.setState({ 
        data: data,
        selectedVideo : data[0],
        term: term
      });
    });
  }

  onVideoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }

  render() {
    return (
      <div className="main-container">
        <header className="header">
          <div className="container navbar">
            <div className="col-2">
              <a href="https://sumim.z12.web.core.windows.net/" className="navbar-brand text-white"><img src={logo} className="logo" alt="logo" /></a>
            </div>
            <VideoSearch onCreate={this.videoSearch}/>
            <div className="haeder-user text-right col-2 d-none d-lg-block">
              <a href="#" className="user-name mr-3">user name</a>
              <a href="#" className="user-img">
                <img src={userImg} alt="user icon" />
              </a>
            </div>
          </div>
        </header>
        <main className="main container-flex">
          <div className="container p-3">
            <div className="row">
              <VideoDetails 
                videoId={
                  this.state.selectedVideo === null 
                    ? "Loading"
                    : this.state.selectedVideo.id.videoId
                }
              />
              <VideoList 
                videos={this.state.data} 
                onVideoSelect={(selectedVideo) => this.onVideoSelect(selectedVideo)}
              />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;