import styles from '@tones/Strong.module.scss';
const Strong = ({ content }) => {
	return (
		<p className={styles.strong}>{ content }</p>
	)
}

export default Strong;
