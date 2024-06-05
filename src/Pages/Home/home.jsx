import Sidebar from "../../component/Sidebar/sidebar";
import Feed from "../../component/Feed/feed"

const home = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <Feed/>
    </div>
  )
}

export default home