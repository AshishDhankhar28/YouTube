import "./videoright.css"
import Image from "../../assets/thumbnail1.png"
import { useEffect, useState } from "react"
import {API_KEY , value_converter} from "../../../data"
import {Link} from "react-router-dom"

const videoright = () => {
    const [apiData , setApiData] = useState([]);
    const fetchData = async()=>{
        const relatedvideoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=0&key=${API_KEY}`;
        await fetch(relatedvideoList_url).then(res=>res.json()).then(data=>setApiData(data.items));
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className="videoright">
        {apiData.map((item,index)=>{
            return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="video-right-card flex">
                    <img src={item.snippet.thumbnails.medium.url}></img>
                    <div className="content">
                        <h3>{item.snippet.title}</h3>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)} Views </p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default videoright