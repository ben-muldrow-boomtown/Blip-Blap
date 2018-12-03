import React from 'react';
import Message from './Message';

const MessageWrapper = (props) => {
  const { messages } = props;

  return (
    <div>
      {messages.map(m =>
        <Message key={m.id} score={m.score} title={m.title} body={m.body} />
      )}
    </div>
  );
};

export default MessageWrapper;
