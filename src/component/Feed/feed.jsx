import "./feed.css"
import {Link} from "react-router-dom"
import {API_KEY , value_converter} from "../../../data.js"
import { useEffect ,useState } from "react"   
import moment from "moment"

const feed = () => {
  const [data,setData]=useState([]);

  const fetchData=async()=>{
    const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${API_KEY}`
    await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
  }

  useEffect(()=>{
    fetchData();
  },[])

  

  return (
    <div className="feed">
        {data.map((item,index)=>{ 
          return(
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index} className="card">
          <img src={item.snippet.thumbnails.medium.url}></img>
          <p>{item.snippet.title}</p>
          <h5>{item.snippet.channelTitle}</h5>
          <h6>{value_converter(item.statistics.viewCount)} views &bull;  {moment(item.snippet.publishedAt).fromNow()}</h6>
        </Link>
          )
        })}
    </div>
  )
}

export default feed