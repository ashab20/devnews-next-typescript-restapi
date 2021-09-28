import type { GetStaticProps, NextPage } from "next";
import ArticleList from "../component/ArticleList";
import Meta from "../component/Meta";
import {server} from '../config/index';


interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IProps {
  articles: Article[];
}


/* 
  For connect api in server
*/

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=10`
//   );

//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

/* ********* 

Local Api connection
*********** */

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `${server}`
  );

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};




const Home: NextPage<IProps> = ({ articles }) => {
  return (
    <>
      <Meta title="home Page" description="description" keyword="keyword" />


      <ArticleList articles={articles} />
    </>
  );
};

export default Home;
