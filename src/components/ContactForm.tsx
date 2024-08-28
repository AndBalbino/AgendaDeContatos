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
      <label>
        Nome:
        <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} />
      </label>
      <label>
        Telefone:
        <InputMask
          mask="(99) 99999-9999"
          value={contactPhone}
          onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setContactPhone(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} />
      </label>
      <Button onClick={handleSubmit}>{id ? 'Editar' : 'Adicionar'} Contato</Button>
    </FormContainer>
  );
};

export default ContactForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
