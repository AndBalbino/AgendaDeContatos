import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { addContact, editContact } from '../store/contactsSlice';
import { v4 as uuidv4 } from 'uuid';

interface ContactFormProps {
  id?: string;
  name?: string;
  phone?: string;
  email?: string;
  onSubmit?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ id, name = '', phone = '', email = '', onSubmit }) => {
  const dispatch = useDispatch();
  const [contactName, setContactName] = useState(name);
  const [contactPhone, setContactPhone] = useState(phone);
  const [contactEmail, setContactEmail] = useState(email);

  useEffect(() => {
    setContactName(name);
    setContactPhone(phone);
    setContactEmail(email);
  }, [name, phone, email]);

  const handleSubmit = () => {
    const contactData = {
      id: id || uuidv4(),
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
    };

    if (id) {
      dispatch(editContact(contactData));
    } else {
      dispatch(addContact(contactData));
    }

    setContactName('');
    setContactPhone('');
    setContactEmail('');
    if (onSubmit) onSubmit();
  };

  return (
    <FormContainer>
        <InputContainer>
            <label htmlFor="title">Nome:</label>
            <input type="text" name='title' placeholder='Nome do contato' value={contactName} onChange={(e) => setContactName(e.target.value)} />
        </InputContainer>
        <InputContainer>
            <label htmlFor="email">E-mail:</label>
            <input type="email" name='email' placeholder='E-mail do contato' value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
        </InputContainer>
        <InputContainer>
            <label htmlFor="phoneNumber">Número do contato:</label>
            <InputMask
              mask="(99) 99999-9999"
              placeholder='Número de telefone'
              name='phoneNumber'
              value={contactPhone}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setContactPhone(e.target.value)}
            />
        </InputContainer>
      <Button onClick={handleSubmit}>{id ? 'Editar' : 'Adicionar'} Contato</Button>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.div`
     display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
`;

const InputContainer = styled.div`
display: flex;
    flex-direction: column;
    text-align: left;

    label{
        font-weight: bold;
    margin-bottom: .4em;
    }

    input{
        padding: 8px 15px;
    margin-bottom: 1.5em;
    border-radius: 0;
    border: 1px solid #282c34;
    }
`;

const Button = styled.button`
  background-color: #61dafb;
    border: 1px solid #61dafb;
    color: #000;
    transition: .5s;
    cursor: pointer;

  &:hover {
    background-color: #fff;
    border-color: #282c34;
  }
`;
