import React from 'react';

import { Avatar, Divider, Tooltip } from "antd";
import { UserOutlined, AntDesignOutlined, WechatOutlined, LoadingOutlined, } from '@ant-design/icons';
// import { github, qq, wechat} from 'antd/dist/'

const Relation = () => {
  return (
    <>
      <div className="author-introduction">
        <Divider>Detail</Divider>
        <Avatar size={28} icon={<AntDesignOutlined />} className="account"
          style={{
            backgroundColor: '#1890ff',
          }}
        />
        <Avatar size={38} icon={<UserOutlined />} className="account"
          style={{
            backgroundColor: '#f56a00',
          }}
        >HSQ</Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar style={{ backgroundColor: '#3c3', }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar size={28} icon={<WechatOutlined />} className="account" style={{ backgroundColor: '#87d068', }} />
        <Avatar size={28} icon={<LoadingOutlined />} className="account" style={{ backgroundColor: '#868', }} />
      </div>
    </>
  );
}

export default Relation;
