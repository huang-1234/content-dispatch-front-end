import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import Link from 'next/link';

export default function GetArticleList(props) {
  console.log('GetArticleList');
  const { list } = props;
  const [artlist, setArtlist] = useState(list.data);

  useEffect(() => {
    setArtlist()
  })
  return (
    <>
      <div className="goback">
        <Link href={{pathname:'/'}}>
          <a>goto First</a>
        </Link>
      </div>
      <List
        itemLayout="vertical"
        dataSource={artlist}
        renderItem={item => (
          <List.Item>
            <div className="list-title">
              <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                <a>{item.title}</a>
              </Link>
            </div>
            <div className="list-icon">
              <span><Icon type="calendar" />{item.addTime}</span>
              <span><Icon type="folder" /> {item.typeName}</span>
              <span><Icon type="fire" />  {item.view_count}人</span>
            </div>
            <div className="list-context">{item.introduce}</div>
          </List.Item>
        )}
      />
    </>
  )
}




