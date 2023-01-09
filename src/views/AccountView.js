const AccountView = ({ user, handleLogout  }) => {
  
    if (user) {
        return (<div>
            <h1>Account</h1>

            <div>
                <form>
                    <p>User email: {user && user.email} </p>
                    <button onClick={handleLogout}>Log out</button>
                </form>
            </div>
        </div>
        );
    }
    else {
        return (<div>
            <h1>Account</h1>

            <div>
                <p>Log in to access account information </p>

            </div>
        </div>
        );
    }
    }
  
  export default AccountView;
  