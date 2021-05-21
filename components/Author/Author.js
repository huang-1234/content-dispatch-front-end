

import {
  Avatar,
  // Divider, Tooltip
} from "antd";
// import Relation from './Relation.jsx'
// import ImgMe from './static/img/me.jpg';
// import ImgMe from 'https://huang-1234.github.io/me.jpg';
const Author = () => {
  return (
    <>
      <div className="author-div comm-box">
        <span>Author</span>
        <div>
          <Avatar size={100} src="https://huang-1234.github.io/me.jpg" target="_blank"/>
        </div>
        {/* <Relation /> */}
      </div>
    </>
  )
}
export default Author;