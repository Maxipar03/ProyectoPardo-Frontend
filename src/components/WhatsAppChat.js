import React from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

function WhatsAppChat() {
  const whatsappNumber = '541126790946';
  const whatsappMessage = 'Hola, ¿cómo puedo ayudarte hoy?';

  return (
    <WhatsAppWidget phoneNumber={whatsappNumber} message={whatsappMessage} />
  );
}

export default WhatsAppChat;