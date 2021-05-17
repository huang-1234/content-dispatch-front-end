import React from 'react';
import axios from 'axios';
import servicePath from '../../config/apiUrl';

import GetArticleList from '../../components/ArticleList/index';

const articlelist = ({list}) => {
  return (
    <div>articleList
      {/* <GetArticleList list={list}/> */}
    </div>
  );
}

export default articlelist;

export const getServerSideProps = async (context) => {

  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getListById + id).then(
      (res) => resolve(res.data)
    )
  })
  const list = await promise;
  console.log(list);
  return { props: { list } }
}
