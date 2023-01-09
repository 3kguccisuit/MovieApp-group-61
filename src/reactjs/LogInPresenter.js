import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/authContext';
import { useState, useEffect } from 'react';
import LogInView from '../views/LogInView'
import Message from './message';


const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn, user } = UserAuth();

  //Notfication
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(1);
  const [updateMessage, setUpdateMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/')
    } catch (e) {
      setError(e.message);
      setMessage(e.message);
      setMessageType(2);
      setUpdateMessage(true)

      //alert(e.message)
      //console.log(e.message)
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
      <LogInView
        handleSubmit={handleSubmit}
        user={user}
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
export default LogIn;