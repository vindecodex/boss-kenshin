import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from '@tones/CodeBlock.module.scss';

const CodeBlock = ({ codeContent, programmingLanguage }) => {
	return (
		<div className={styles.codeBlock}>
		<SyntaxHighlighter language={programmingLanguage}>
		{ codeContent }
		</SyntaxHighlighter>
		</div>
	);
}

export default CodeBlock;
