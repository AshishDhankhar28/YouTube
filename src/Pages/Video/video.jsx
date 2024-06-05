import "./video.css"
import Videoleft from "../../component/VideoLeft/videoleft"
import Videoright from "../../component/VideoRight/videoright"
import { useParams } from "react-router-dom"
import React from "react"




const video = () => {
  const { videoId ,categoryId} = useParams();
  return (  
    <div className="video">
      <Videoleft videoId={videoId}/>
      <Videoright /> 
    </div>
  )
}

export default video