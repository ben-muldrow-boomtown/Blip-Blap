import React from 'react';
import styles from 'components/Messages/styles/index.less';

const MessageBox = (props) => {
  return (
    <div className={styles.messageBox}>
      {props.children}
    </div>
  );
}

export default MessageBox;
