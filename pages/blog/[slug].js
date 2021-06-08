import Head from 'next/head';
import CodeBlock from '../../elements/CodeBlock';
import Code from '../../elements/Code';
import Paragraph from '../../elements/Paragraph';
import getTitles from '../../mediator/calls/get_titles';
import getBlog from '../../mediator/calls/get_blog';
import styles from '../../tones/Blog.module.scss';

export async function getStaticPaths() {
  const x = await getTitles();

  const paths = x.result.map(y => ({
    params: { slug: y.slug.current }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const x = await getBlog(params.slug);
  return {
    props: x
  }
}

const Blog = ({ result }) => {
  return (
    <>
    <Head>
      <title>Blog | {result[0].title}</title>
    </Head>
    <h1 className={styles.title}>{ result[0].title }</h1>
    <div className={styles.content}>
    {
      result[0].body.map(b => {
          if (b._type == 'block') {
            if (!b.children[0].marks.length)
              return <Paragraph z={b.children[0].text} key={b._key}/>
            if (b.children[0].marks[0] == 'code')
              return <Code z={b.children[0].text} key={b._key}/>
          }
          if (b._type == 'code')
            return <CodeBlock z={b.code} l={b.language} key={b._key}/>
      })
    }
    </div>
    </>
  )
}

export default Blog;
