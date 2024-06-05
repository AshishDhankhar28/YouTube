import "./videoleft.css";
import Video from "../../assets/video.mp4";
import Like from "../../assets/like.png";
import Dislike from "../../assets/dislike.png";
import Share from "../../assets/share.png";
import Music from "../../assets/music.png";
import { useEffect, useState } from "react";
import {API_KEY, value_converter} from "../../../data"
import moment from "moment"

const videoleft = ({videoId}) => {
  const [apiData,setApiData]=useState(null);
  const fetchVideoData = async()=>{
    const videoDetail_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetail_url).then(res=>res.json()).then(data=>setApiData(data.items[0]));
  }

  useEffect(()=>{
    fetchVideoData();
  })
  return ( 
    <>
      <div className="videoleft1">

        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
        <h2>{apiData?apiData.snippet.title:"Title Here"}</h2>
        <div className="videoleft2 flex">
          <p>{apiData?value_converter(apiData.statistics.viewCount):"16K" } Views  &#x2022; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
          <div className="flex">
            <img src={Like}></img>
            <p>{apiData?value_converter(apiData.statistics.likeCount):155}</p>
            <img src={Dislike}></img>
            <p></p>
            <img src={Share}></img>
            <p>Share</p>
            <img src={Music}></img>
            <p>Save</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default videoleft;
