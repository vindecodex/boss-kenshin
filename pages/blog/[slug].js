import Head from 'next/head';
import dynamic from 'next/dynamic';
import opt from '@elements/DynamicImport';
import styles from '@tones/Blog.module.scss';
import getBlogsSlugAndTitle from '@mediator/calls/blogs';
import getBlog from '@mediator/calls/blog';

const CodeBlock = dynamic(() => import('@elements/CodeBlock'), opt);
const Code = dynamic(() => import('@elements/Code'), opt);
const Paragraph = dynamic(() => import('@elements/Paragraph'), opt);
const Strong = dynamic(() => import('@elements/Strong'), opt);

export async function getStaticPaths() {
	const blogs = await getBlogsSlugAndTitle();

	const paths = blogs.result.map(blog => ({
		params: { slug: blog.slug.current }
	}))

	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const blog = await getBlog(params.slug);
	return {
		props: blog
	}
}

const Blog = ( blog ) => {
	return (
		<>
			<Head>
				<title>Blog | {blog.result[0].title}</title>
			</Head>
			<h1 className={styles.title}>{ blog.result[0].title }</h1>
			<div className={styles.content}>
			{
				blog.result[0].body.map(content => {
					if (content._type == 'block') {
						if (!content.children[0].marks.length)
							return <Paragraph content={content.children[0].text} key={content._key}/>
								if (content.children[0].marks[0] == 'code')
							return <Code codeContent={content.children[0].text} key={content._key}/>
								if (content.children[0].marks[0] == 'strong')
							return <Strong content={content.children[0].text} key={content._key} />
					}
					if (content._type == 'code')
						return <CodeBlock codeContent={content.code} programmingLanguage={content.language} key={content._key}/>
				})
			}
			</div>
		</>
	)
}

export default Blog;
