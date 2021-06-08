import SyntaxHighlighter from 'react-syntax-highlighter';
import styles from '../tones/CodeBlock.module.scss';

const CodeBlock = ({ z, l }) => {
  return (
    <div className={styles.codeBlock}>
      <SyntaxHighlighter language={l}>
        { z }
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
