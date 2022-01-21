import '@tones/Main.scss';
import Header from '@elements/Header';
import Head from 'next/head';

function App({ Component, pageProps }) {
	return (
		<div className="container">
			<Head>
				<link rel='shortcut icon' href='/gopher.ico' />
			</Head>
			<Header />
			<Component {...pageProps} />
		</div>
	)
}

export default App;
