

import { Avatar, Divider } from "antd";
// import { github, qq, wechat} from 'antd/dist/'

const Author = () => {
  return (
    <>
      <div className="author-div comm-box">
        <span>About Author</span>
        <div>
          <Avatar size={100} src="https://huang-1234.github.io/images/Tools/Git/git-command.png" target="_blank"/>
        </div>
        
        <div className="author-introduction">
          <Divider>Detail</Divider>
          <Avatar size={28} icon={"github"} className="account" />
          <Avatar size={38} icon={"qq"} className="account" />
          <Avatar size={28} icon={"wechat"} className="account" />
        </div>
      </div>
    </>
  )
}
export default Author;