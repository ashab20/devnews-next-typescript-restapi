import { useRouter } from "next/dist/client/router";
import {GetServerSideProps, GetStaticPaths,GetStaticProps} from 'next'
import Link from 'next/link'
import { server} from '../../../config/index'
import Meta from "../../../component/Meta";


const Article = ({article}:any) => {
    // const router = useRouter();
    // const {id} = router.query;

  return (
    <>
      <Meta title={article.title} description={article.body}/>
      <h1>{article.title}</h1>
      <p>{article.body}</p> <br />

      <Link href='/'>Go Back</Link>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async(context:any) => {
    const res = await fetch(`${server}/${context.params.id}`);

    const article = await res.json();

    return {
        props:{
            article,
        }
    }
}





// export const getStaticPaths: GetStaticPaths = async() => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//     const articles = await res.json();

//     const ids = articles.map(article => article.id);

//     const paths =  ids.map(id => {params:{id:id.toString()} });


//     return {
//         props:{
//             paths,
//             fallback: false
//         }
//     }
// }

export default Article;
