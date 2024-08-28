import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../store/store';
import ContactItem from './ContactItem';

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  return (
    <ListContainer>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          phone={contact.phone}
          email={contact.email}
        />
      ))}
    </ListContainer>
  );
};

export default ContactList;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
