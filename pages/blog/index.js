import Head from 'next/head';
import BlogsList from '@elements/BlogsList';
import getBlogsSlugAndTitle from '@mediator/calls/blogs';

export async function getStaticProps() {
	const result = await getBlogsSlugAndTitle();
	return {
		props: result
	}
}

const Blogs = (props) => {
	return (
		<>
			<Head>
				<title>Blog</title>
			</Head>
			<BlogsList blogs={props.result}/>
		</>
	)
}

export default Blogs;
