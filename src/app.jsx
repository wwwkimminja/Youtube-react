import './App.css';
import {useEffect, useState} from 'react';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos,setVideos]=useState([]);

  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxRequests=25&key=AIzaSyCNwV5UiUd6UEssFTfPJANlqfsf1sFzhcA", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[]);


  return <VideoList videos={videos}/>
}

export default App;
