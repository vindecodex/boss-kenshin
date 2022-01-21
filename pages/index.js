import styles from '@tones/Home.module.scss';
import Image from 'next/image';
import Head from 'next/head';

const Home = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div className={styles.main}>
				<div className={styles.welcome}>
					<h1>Welcome</h1>
				</div>
				<div className={styles.gopher}>
					<figure>
						<Image src='/gopher.webp' al='my gopher image' width={300} height={300} />
					</figure>
				</div>
				<div className={styles.name}>
					<h2>@Vindecode</h2>
				</div>
			</div>
		</>
	)
}

export default Home;
