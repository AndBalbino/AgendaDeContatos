import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../store/contactsSlice';
import ContactForm from './ContactForm';

interface ContactItemProps {
  id: string;
  name: string;
  phone: string;
  email: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ id, name, phone, email }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <ContactContainer>
      {isEditing ? (
        <ContactForm
          id={id}
          name={name}
          phone={phone}
          email={email}
          onSubmit={() => setIsEditing(false)}
        />
      ) : (
        <>
          <ContactInfo>
            <span><strong>Nome:</strong> {name}</span>
            <span><strong>Telefone:</strong> {phone}</span>
            <span><strong>Email:</strong> {email}</span>
          </ContactInfo>
          <ButtonContainer>
            <Button onClick={handleEdit}>Editar</Button>
            <Button onClick={handleDelete}>Excluir</Button>
          </ButtonContainer>
        </>
      )}
    </ContactContainer>
  );
};

export default ContactItem;

const ContactContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
