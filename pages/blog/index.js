import Head from 'next/head';
import Blog from '../../elements/Blog';
import getTitles from '../../mediator/calls/get_titles';

export async function getStaticProps() {
  const x = await getTitles();
  return {
    props: x
  }
}

const Blogs = (props) => {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Blog data={props.result}/>
    </>
  )
}

export default Blogs;
