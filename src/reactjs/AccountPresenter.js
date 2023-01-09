import React from 'react';
import { UserAuth } from '../Context/authContext';
import { useNavigate } from 'react-router-dom';
import AccountView from '../views/AccountView';

const Account = () => {

    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
            console.log("You are logged out")
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <>
          <AccountView
            user={user}
            handleLogout={handleLogout}
          />
        </>
      );


}
export default Account;