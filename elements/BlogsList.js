import Link from 'next/link';
import styles from '@tones/BlogsList.module.scss';

const BlogsList = ({blogs}) => {
	return (
		<>
		{
			blogs.map(blog => {
				return (
					<div className={styles.blogTitleContainer} key={blog._id}>
					<h1><Link href={`/blog/${blog.slug.current}`}>{ blog.title }</Link></h1>
					</div>
				)
			})
		}
		</>
	)
}

export default BlogsList;
