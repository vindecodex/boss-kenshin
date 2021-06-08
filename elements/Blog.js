import Link from 'next/link';
import styles from '../tones/Blogs.module.scss';

const Blog = ({data}) => {
  return (
    <>
      {
        data.map(y => {
          return (
            <div className={styles.blogs} key={y._id}>
              <h1><Link href={`/blog/${y.slug.current}`}>{ y.title }</Link></h1>
            </div>
          )
        })
      }
    </>
  )
}

export default Blog;
