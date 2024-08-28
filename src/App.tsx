import React from 'react';
import styled from 'styled-components';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>Agenda de Contatos</h1>
      <ContactForm />
      <ContactList />
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;
