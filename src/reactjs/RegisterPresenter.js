import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/authContext';
import RegisterView from '../views/RegisterView';
import Message from './messagePresenter';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { createUser, user } = UserAuth();
  const navigate = useNavigate();

  //Notfication
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(1);
  const [updateMessage, setUpdateMessage] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/')
    }
    catch (e) {
      setError(e.message)
      setMessageType(2);
      setMessage(e.message);
      setUpdateMessage(true)
    }
  }

  useEffect(() => {
    if (updateMessage) {
      // Reset the value of updateMessage to false after 1 second
      const timer = setTimeout(() => {
        setUpdateMessage(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [updateMessage]);

  return (
    <>
      <RegisterView
        user={user}
        handleSubmit={handleSubmit}
        setEmail={setEmail}
        setPassword={setPassword}
      />
      {updateMessage && (
        <Message
          message={message}
          timeout={5000}
          type={messageType}
          key={Date.now()}
        />
      )}
    </>
  );
};
export default Register;