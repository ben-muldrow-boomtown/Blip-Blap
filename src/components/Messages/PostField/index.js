import React from 'react';
import styles from 'components/Messages/styles/index.less';

const PostField = () => {
  return (
    <div className={styles.postFieldWrapper}>
      <input type='text' className={styles.postTitle} placeholder='Title' />
      <textarea className={styles.postBody} placeholder='Type here...' />
      <button className={styles.postSubmit}>Submit</button>
    </div>
  );
}

export default PostField;