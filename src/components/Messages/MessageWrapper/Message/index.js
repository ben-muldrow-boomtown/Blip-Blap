import React from 'react';
import styles from 'components/Messages/styles/index.less';

const Message = (props) => {
  const { body, title, score } = props;

  const incrementScore = () => console.log('add 1 to score');

  return (
    <div className={styles.messageWrapper}>
      <div className={styles.score} onClick={incrementScore}>{score}</div>
      <div className={styles.message}>
        <b>{title}</b><span className={styles.messageTimestamp}> at {new Date().toDateString()}</span>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Message;
