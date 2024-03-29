import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';

import ChatbotAvatar from './components/styles/ChatbotAvatar';
import Options from './components/options/Options';

const config = {
  botName: 'COVID19 Chatbot',
  initialMessages: [
    createChatBotMessage(`Zdravím jak Vám mohu pomoci?`, {
      widget: 'options',
    }),
  ],
  widgets: [
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
  ],
  customComponents: {
    botAvatar: (props) => <ChatbotAvatar {...props} />,
    header: () => (
      <div
        style={{
          position: 'relative',
          display: 'flex',
          backgroundColor: '#2b064d',
          color: '#fff',
          padding: '5px',
        }}
      >
        <h1 style={{ position: 'relative', margin: 'auto', fontSize: '22px' }}>COVID19 CHATBOT</h1>
      </div>
    ),
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: '#8262a7',
    },
    chatButton: {
      backgroundColor: '#2b064d',
    },
  },
};

export default config;
