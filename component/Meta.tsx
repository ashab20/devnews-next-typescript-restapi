import Head from "next/head"

interface headerProps{
    title:string,
    description: string,
    keyword:string,
}

// interface props{
//     props:headerProps[],
// }

const Meta = ({ title,description,keyword }:headerProps) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="keyword" content={keyword} />
            <meta name='descripiton' content={description} />
            <meta charSet='utf-8' />
            <meta name="google-analytics" content="1-AHFKALJ"/>
            <meta name="author" content="Ashab Uddin, ashabuddin34@gmail.com"></meta>
            <meta name="subject" content="your website's subject"></meta>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Home Page',
    keyword: 'keyword',
    description: "Web development, programming"
}


export default Meta;
