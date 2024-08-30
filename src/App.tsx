import React from 'react';
import styled from 'styled-components';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App: React.FC = () => {
  return (
    <AppContainer>
      <HeaderMenu>
        <h1>Agenda de contatos</h1>
      </HeaderMenu>
      <Menu>
        <div>
      <h2>Adicione um contato!</h2>
      <ContactForm />
        </div>

        <div>
        <h2>Seus contatos!</h2>
      <ContactList />
        </div>
      </Menu>
    <FooterPrincipal>
      <p><span>Agenda de contatos!</span></p>
    </FooterPrincipal>
    </AppContainer>
  );
};

export default App;

const AppContainer = styled.div`
  padding: 0;
  margin: 0;
  font-family: Arial, sans-serif;
  color: #333;
`;

const HeaderMenu = styled.header`
   background-color: #282c34;
    color: #61dafb;
    text-align: center;
    padding: 1em;
    
`

const Menu = styled.main`
    min-height: 60vh;
    text-align: center;
    padding: 2em;

    h2{
      margin-bottom: 0.8em;
    }
`;

const FooterPrincipal = styled.footer`
 height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #282c34;
    color: #fff;

    span{
      font-weight: bold;
    color: #61dafb;
    }
`
