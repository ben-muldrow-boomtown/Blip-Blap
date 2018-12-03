import React from 'react';
import styles from 'styles/styles.less'
import MessageBox from 'components/Messages/MessageBox';
import MessageWrapper from 'components/Messages/MessageWrapper';
import PostField from 'components/Messages/PostField';

const index = (props) => {

  // mock data
  const messages = [
    {
      id: 1,
      title: 'This is a title',
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      score: 4,
    },
    {
      id: 2,
      title: 'Anotha one',
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      score: 1,
    },
    {
      id: 3,
      title: 'Oh dear',
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
      score: -20,
    }
  ]

  return (
    <div className={styles.mainWrapper}>
      <h1>Blip-Blap</h1>
      <MessageBox>
        <MessageWrapper messages={messages} />
      </MessageBox>
      <PostField />
    </div>
  );
};

export default index;
