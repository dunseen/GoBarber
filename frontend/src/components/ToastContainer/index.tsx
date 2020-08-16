import React from 'react';

import { ToastMessage } from '../../hooks/toast';

import Toast from './Toast';
import {Container} from './styles';

interface ToastContainer{
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainer>= ({messages}) => {

  return (
  <>
    <Container>
      {messages.map(message => (
        <Toast
        key={message.id}
        message={message}
        />
      ))}
    </Container>
  </>
  )
}

export default ToastContainer;
