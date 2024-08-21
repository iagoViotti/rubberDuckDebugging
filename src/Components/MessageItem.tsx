import { useEffect } from "react";
import { MessageObj } from "../interfaces/MessageObj";
import './MessageItem.css';

const MessageItem = ({ message }: { message: MessageObj }, key: number) => {

  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow?.scrollTo(0, chatWindow.scrollHeight);
  }, [message]);

  return (
    <div
      className={`message-item ${message.sender}`}
      key={key}
    >
      <div className='message-text' >
        {message.text}
      </div>
      <small className='message-time'>
        {message.time.slice(0, 5)}
      </small>
    </div>
  );
}

export default MessageItem;