import styles from '@tones/Code.module.scss';
const Code = ({ codeContent }) => {
	return (
		<span className={styles.__code}>{ codeContent }</span>
	)
}

export default Code;
