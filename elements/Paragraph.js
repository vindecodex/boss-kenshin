import styles from '@tones/Paragraph.module.scss';

const Paragraph = ({ content }) => {
	if (content) return <p className={styles.paragraph}>{ content }</p>
		return <p className={styles.empty}></p>
}

export default Paragraph;
