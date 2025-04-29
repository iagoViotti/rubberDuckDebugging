import { useRef, useState } from 'react';
import { useChat } from '../hooks/useChat';
import MessageItem from './MessageItem';
import send from '../assets/send.svg';
import './ChatWindow.css';
import { askGPT } from '../utils/requests';

const ChatWindow = () => {
  const { messages, addMessage, quack, aiEngaged } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);
  const [duckThinking, setDuckThinking] = useState(false);

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const input = inputRef.current as HTMLInputElement;
    if (!aiEngaged) {
      if (input.value) {
        addMessage({
          text: input.value,
          time: new Date().toLocaleTimeString(),
          sender: 'user',
        });
        setDuckThinking(true);
        let length = input.value.length;
        setTimeout(() => {
          setDuckThinking(false);
          quack(length);
        }, (1500 + length * 20));
      }
    }
    if (aiEngaged) {
      if (input.value) {
        addMessage({
          text: input.value,
          time: new Date().toLocaleTimeString(),
          sender: 'user',
        });
        setDuckThinking(true);
        const body = { input: input.value }
        const response = await askGPT(body);
        setDuckThinking(false);
        console.log(response);
        addMessage({
          text: response.message,
          time: new Date().toLocaleTimeString(),
          sender: 'duck',
        });
      }
    }
    input.value = '';
  };

  return (
    <>
      <div
        id='chat-window'
      >
        {messages.map((message, i) => (
          <MessageItem
            message={message}
            key={i}
          />
        ))}
        {duckThinking && (
          <MessageItem
            message={{
              id: messages.length + 1,
              text: '...',
              time: '',
              sender: 'duck',
            }}
            key={messages.length}
          />
        )}
      </div>
      <form
        id='chat-form'
        onSubmit={(e) => sendMessage(e)}
      >
        <input
          id='chat-input'
          type='text'
          ref={inputRef}
        />
        <button
          id='send-button'
          type='submit'
        ><img src={send} alt="Send" />
        </button>
      </form>
    </>
  );
}

export default ChatWindow;
