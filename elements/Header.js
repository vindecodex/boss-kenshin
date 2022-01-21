import Link from 'next/link';
import styles from '@tones/Header.module.scss';
import { useRouter } from 'next/router';
import { isHome, isPathOf, isPath } from '@tools/path';

const Header = () => {

	const { asPath } = useRouter();
	const setActiveClass = (path) => {
		if (!isHome(asPath))
			return isPathOf(asPath, path) ? styles.active : null;
		return isPath(asPath, path) ? styles.active : null;
	}
	return (
		<header className={styles._header}>
			<nav>
				<ul>
					<li><Link href="/"><a className={setActiveClass('/')}>Home</a></Link></li>
					<li><Link href="/about"><a className={setActiveClass('/about')}>About</a></Link></li>
					<li><Link href="/blog"><a className={setActiveClass('/blog')}>Blog</a></Link></li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;
